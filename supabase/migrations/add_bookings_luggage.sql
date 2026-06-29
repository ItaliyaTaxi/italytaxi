-- Adds an optional luggage field to the bookings table so the booking form's
-- new "Luggage" selection is persisted. Safe & idempotent — does not touch
-- existing data or columns. Until this is run, the booking action still works
-- (it falls back to inserting without luggage) and the luggage value is always
-- included in the admin/client confirmation emails.

ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS luggage TEXT;
