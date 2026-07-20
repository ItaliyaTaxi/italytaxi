-- =============================================================================
-- Adds ItaliaRide-template fields to public.invoices.
-- Fully additive & idempotent — safe to re-run, does not touch existing rows.
-- Existing invoices simply have NULL/empty values for the new columns until
-- edited, and the invoice page/email fall back gracefully in that case.
-- =============================================================================

ALTER TABLE public.invoices
  ADD COLUMN IF NOT EXISTS passengers   INTEGER,
  ADD COLUMN IF NOT EXISTS luggage      TEXT,
  ADD COLUMN IF NOT EXISTS flight_no    TEXT,
  ADD COLUMN IF NOT EXISTS trip_type    TEXT,
  ADD COLUMN IF NOT EXISTS ref_token    TEXT,
  ADD COLUMN IF NOT EXISTS payment_date DATE,
  ADD COLUMN IF NOT EXISTS line_items   JSONB NOT NULL DEFAULT '[]'::jsonb;
