-- Create tables for the law firm website

-- Profiles table (extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  email text,
  created_at timestamp with time zone default now()
);

-- Services table
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  icon_url text,
  order_number integer,
  created_at timestamp with time zone default now()
);

-- Team members table
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text not null,
  specialty text,
  bio text,
  image_url text,
  email text,
  order_number integer,
  created_at timestamp with time zone default now()
);

-- Blog posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  author_id uuid references auth.users(id) on delete set null,
  featured_image_url text,
  published boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Consultation requests table
create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service_type text,
  message text,
  status text default 'pending',
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.team_members enable row level security;
alter table public.blog_posts enable row level security;
alter table public.consultation_requests enable row level security;

-- Policies for profiles
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- Policies for services (public read)
create policy "services_select_all"
  on public.services for select
  using (true);

-- Policies for team members (public read)
create policy "team_members_select_all"
  on public.team_members for select
  using (true);

-- Policies for blog posts (public read published)
create policy "blog_posts_select_published"
  on public.blog_posts for select
  using (published = true or auth.uid() = author_id);

-- Policies for consultation requests (anyone can insert)
create policy "consultation_requests_insert"
  on public.consultation_requests for insert
  with check (true);

create policy "consultation_requests_select_own"
  on public.consultation_requests for select
  using (auth.uid() = (select id from auth.users where email = consultation_requests.email limit 1));
