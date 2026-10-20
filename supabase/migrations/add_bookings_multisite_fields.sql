-- Multi-site lead intake: lets the one `bookings` table hold leads from more
-- than one website without losing anything either site collects.
--
-- Safe & idempotent — additive only. No column is dropped, renamed, retyped
-- or made NOT NULL, and no existing row's data is altered except the
-- `source_site` backfill described below, which only fills a column that did
-- not exist a moment earlier. Running it twice is harmless.
--
-- Until this is run, lead intake still works: both `createLead()` and the
-- public form fall back to the pre-migration column set when Postgres reports
-- an unknown column, and the extra detail is written into `admin_notes`
-- instead so nothing the customer typed is thrown away. After it is run, that
-- detail lands in real columns and becomes searchable and filterable.
--
-- Columns:
--   source_site      : which website produced the lead —
--                      'italytaxiservice' | 'rometransferservice'.
--                      Distinct from `source_form`, which stays what it has
--                      always been: which form or channel on that site.
--   service_type     : the service the customer picked, where the form asks
--                      ('airport', 'hotel', 'station', 'cruise', 'day-trip',
--                      'hourly', 'other'). Free text; no constraint, so a new
--                      site can add its own without a migration.
--   customer_message : the customer's own free-text message. Previously there
--                      was nowhere to put this on a booking.
--   locale           : the language the enquiry was made in ('en' | 'it'), so
--                      replies can match it.
--   adults, children : the passenger split. `passengers` keeps holding the
--                      total, so every existing query and the CRM's own
--                      display keep working untouched.
--   child_ages       : free text. Italian law ties the required child
--                      restraint to the child's age, so this is operationally
--                      significant rather than a nicety.
--   luggage_hold,
--   luggage_cabin    : the luggage split. `luggage` keeps holding the human
--                      readable summary for the existing CRM display.
--   idempotency_key  : a client-supplied key, unique where present, so a
--                      retried submission after a network failure updates
--                      nothing and inserts nothing twice.

ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS source_site      TEXT,
  ADD COLUMN IF NOT EXISTS service_type     TEXT,
  ADD COLUMN IF NOT EXISTS customer_message TEXT,
  ADD COLUMN IF NOT EXISTS locale           TEXT,
  ADD COLUMN IF NOT EXISTS adults           INTEGER,
  ADD COLUMN IF NOT EXISTS children         INTEGER,
  ADD COLUMN IF NOT EXISTS child_ages       TEXT,
  ADD COLUMN IF NOT EXISTS luggage_hold     INTEGER,
  ADD COLUMN IF NOT EXISTS luggage_cabin    INTEGER,
  ADD COLUMN IF NOT EXISTS idempotency_key  TEXT;

-- Every lead that already exists came from the Italy Taxi Service site, which
-- was the only one submitting until now. Filling it in means the CRM's
-- "Website" filter is correct from the first minute rather than showing the
-- entire history as "unknown".
UPDATE public.bookings
   SET source_site = 'italytaxiservice'
 WHERE source_site IS NULL;

-- New rows get it automatically; the default is applied after the backfill so
-- the two statements cannot race each other.
ALTER TABLE public.bookings
  ALTER COLUMN source_site SET DEFAULT 'italytaxiservice';

-- Partial unique index: NULL keys (every existing row, and anything submitted
-- without one) are exempt, so this cannot fail on existing data and cannot
-- block a legitimate second enquiry from the same customer.
CREATE UNIQUE INDEX IF NOT EXISTS bookings_idempotency_key_unique
    ON public.bookings (idempotency_key)
 WHERE idempotency_key IS NOT NULL;

-- Filtering the CRM by website should stay fast as the table grows.
CREATE INDEX IF NOT EXISTS bookings_source_site_idx
    ON public.bookings (source_site);
