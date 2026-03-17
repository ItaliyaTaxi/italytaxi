-- Run this in your Supabase SQL Editor for the Italy Taxi database

-- 1. Create bloggers table
CREATE TABLE IF NOT EXISTS public.bloggers (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_login TIMESTAMPTZ
);

-- Enable RLS for bloggers
ALTER TABLE public.bloggers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to active bloggers" 
  ON public.bloggers FOR SELECT 
  USING (is_active = true);

-- 2. Create blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL DEFAULT '',
  featured_image_url TEXT,
  category TEXT NOT NULL DEFAULT 'General',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_id UUID REFERENCES public.bloggers(id),
  read_time TEXT DEFAULT '5 min read',
  seo_title TEXT,
  seo_description TEXT,
  focus_keyword TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  published_at TIMESTAMPTZ
);

-- Enable RLS for blogs
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to published blogs" 
  ON public.blogs FOR SELECT 
  USING (status = 'published');

-- 3. Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bloggers_modtime
    BEFORE UPDATE ON public.bloggers
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_blogs_modtime
    BEFORE UPDATE ON public.blogs
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
