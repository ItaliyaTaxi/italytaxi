-- =============================================================================
-- Invoices / Receipts system for Italy Taxi Service
-- Run this in your Supabase SQL Editor for the Italy Taxi database.
-- This is fully additive and does NOT touch existing tables (bookings, contacts).
-- =============================================================================

-- 1. Invoices table -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.invoices (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number    TEXT NOT NULL UNIQUE,
  public_token      TEXT NOT NULL UNIQUE,
  doc_type          TEXT NOT NULL DEFAULT 'invoice' CHECK (doc_type IN ('invoice', 'receipt')),

  -- Client details
  client_name       TEXT NOT NULL,
  client_email      TEXT NOT NULL,
  client_phone      TEXT,

  -- Trip details
  pickup_location   TEXT,
  dropoff_location  TEXT,
  booking_datetime  TIMESTAMPTZ,

  -- Payment details
  amount            NUMERIC(12,2) NOT NULL DEFAULT 0,
  currency          TEXT NOT NULL DEFAULT 'EUR',
  payment_method    TEXT,
  payment_status    TEXT NOT NULL DEFAULT 'paid' CHECK (payment_status IN ('paid', 'unpaid', 'partial', 'refunded')),

  -- Free text
  notes             TEXT,

  -- Uploaded receipt files (stored in the 'invoice-receipts' storage bucket).
  -- receipt_files is the source of truth: a JSONB array of { path, filename }.
  -- receipt_path / receipt_filename are kept for backward compatibility only.
  receipt_files     JSONB NOT NULL DEFAULT '[]'::jsonb,
  receipt_path      TEXT,
  receipt_filename  TEXT,

  -- Email tracking
  email_sent        BOOLEAN NOT NULL DEFAULT false,
  email_sent_at     TIMESTAMPTZ,

  -- Optional link back to the originating booking/lead
  booking_id        UUID,

  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- For databases where the table was created before multi-receipt support:
ALTER TABLE public.invoices
  ADD COLUMN IF NOT EXISTS receipt_files JSONB NOT NULL DEFAULT '[]'::jsonb;

CREATE INDEX IF NOT EXISTS invoices_created_at_idx   ON public.invoices (created_at DESC);
CREATE INDEX IF NOT EXISTS invoices_client_email_idx ON public.invoices (client_email);
CREATE INDEX IF NOT EXISTS invoices_booking_id_idx   ON public.invoices (booking_id);

-- Keep updated_at fresh on every update
CREATE OR REPLACE FUNCTION public.set_invoices_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_invoices_updated_at ON public.invoices;
CREATE TRIGGER trg_invoices_updated_at
  BEFORE UPDATE ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.set_invoices_updated_at();

-- 2. Row Level Security -------------------------------------------------------
-- RLS is ENABLED with NO public policies. All access happens server-side
-- through the service-role key (which bypasses RLS), so invoice/payment data
-- is never exposed to the public anon key.
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

-- 3. Private storage bucket for uploaded receipts -----------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('invoice-receipts', 'invoice-receipts', false)
ON CONFLICT (id) DO NOTHING;

-- No public storage policies are added: uploads/downloads are performed with
-- the service-role key, and clients receive time-limited signed URLs.
