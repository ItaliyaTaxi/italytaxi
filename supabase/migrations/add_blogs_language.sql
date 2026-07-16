-- Adds Italian-language support to the blogs table.
-- Additive and idempotent: existing rows default to 'en', nothing is modified.
--   language       : 'en' | 'it' — which language this row is written in
--   translation_of : slug of the English original (set on Italian rows only)
-- Italian rows use their own Italian keyword slug and are served at /it/blog/<slug>,
-- so the existing UNIQUE(slug) constraint is preserved.

ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS language TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS translation_of TEXT;
CREATE INDEX IF NOT EXISTS blogs_language_idx ON public.blogs (language);
