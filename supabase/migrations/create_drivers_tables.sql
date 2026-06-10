-- =============================================================================
-- Driver Management System for Italy Taxi Service
-- Run this in your Supabase SQL Editor. Fully additive — does NOT touch existing
-- tables (bookings, contacts, blogs, invoices).
-- =============================================================================

-- 1. Drivers ------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.drivers (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                TEXT NOT NULL,
  whatsapp_number     TEXT NOT NULL,            -- with country code (e.g. +39 333 1234567)
  city                TEXT NOT NULL,
  coverage_areas      TEXT,                      -- free text / comma-separated
  vehicle_type        TEXT,                      -- Sedan, Minivan, Minibus, Luxury, etc.
  vehicle_model       TEXT,
  passenger_capacity  INTEGER,
  luggage_capacity    INTEGER,
  notes               TEXT,
  status              TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS drivers_city_idx        ON public.drivers (city);
CREATE INDEX IF NOT EXISTS drivers_status_idx      ON public.drivers (status);
CREATE INDEX IF NOT EXISTS drivers_vehicle_idx     ON public.drivers (vehicle_type);

CREATE OR REPLACE FUNCTION public.set_drivers_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_drivers_updated_at ON public.drivers;
CREATE TRIGGER trg_drivers_updated_at
  BEFORE UPDATE ON public.drivers
  FOR EACH ROW EXECUTE FUNCTION public.set_drivers_updated_at();

-- 2. Driver contact history ---------------------------------------------------
CREATE TABLE IF NOT EXISTS public.driver_contacts (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id    UUID,                  -- the booking this dispatch relates to
  driver_id     UUID,                  -- the driver contacted
  driver_name   TEXT,                  -- snapshot for history readability
  message_text  TEXT,                  -- the exact WhatsApp message opened
  status        TEXT NOT NULL DEFAULT 'contacted' CHECK (status IN ('contacted', 'confirmed', 'rejected')),
  contacted_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS driver_contacts_booking_idx ON public.driver_contacts (booking_id);
CREATE INDEX IF NOT EXISTS driver_contacts_driver_idx  ON public.driver_contacts (driver_id);

-- 3. Row Level Security -------------------------------------------------------
-- RLS enabled with NO public policies. All access is server-side via the
-- service-role key, so driver phone numbers are never exposed to the anon key.
ALTER TABLE public.drivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.driver_contacts ENABLE ROW LEVEL SECURITY;
