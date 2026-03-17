export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  category: string;
  status: 'draft' | 'published';
  author_id: string | null;
  read_time: string | null;
  seo_title: string | null;
  seo_description: string | null;
  focus_keyword: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  bloggers?: Blogger | null;
}

export interface Blogger {
  id: string;
  full_name: string;
  email: string;
  avatar_url: string | null;
  bio: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  last_login: string | null;
}
