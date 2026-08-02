-- Adds return-trip, flight-number and admin-notes fields to the bookings
-- table. Safe & idempotent — additive only, no existing data or columns
-- touched. Until this is run, the booking form still works (the insert in
-- submitBooking falls back to the pre-migration column set on error), but
-- return-trip details submitted by clients are NOT persisted and the CRM's
-- new edit/trip-selection features will show empty fields for them.
--
-- Columns:
--   flight_number           : outbound flight number, optional
--   has_return_trip         : whether the client requested a return leg
--   return_pickup_location  : return leg pickup
--   return_dropoff_location : return leg drop-off
--   return_datetime         : return leg date/time (same raw string format as booking_datetime)
--   return_flight_number    : return leg flight number, optional
--   trip_selection          : which leg(s) to include in the confirmation email —
--                              'outbound' | 'both' | 'roundtrip' — set by admin when confirming
--   admin_notes             : free-text notes/procedure instructions, editable by admin,
--                              included in the confirmation email when present

ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS flight_number TEXT,
  ADD COLUMN IF NOT EXISTS has_return_trip BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS return_pickup_location TEXT,
  ADD COLUMN IF NOT EXISTS return_dropoff_location TEXT,
  ADD COLUMN IF NOT EXISTS return_datetime TEXT,
  ADD COLUMN IF NOT EXISTS return_flight_number TEXT,
  ADD COLUMN IF NOT EXISTS trip_selection TEXT NOT NULL DEFAULT 'outbound',
  ADD COLUMN IF NOT EXISTS admin_notes TEXT;
