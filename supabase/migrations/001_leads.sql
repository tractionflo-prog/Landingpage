-- Run this in Supabase SQL Editor (Dashboard → SQL)

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text not null,
  answers jsonb not null default '{}'::jsonb,
  source text not null default 'founding_quiz',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_source_idx on public.leads (source);

alter table public.leads enable row level security;

-- No public access; API uses service role key only
create policy "No public access"
  on public.leads
  for all
  using (false)
  with check (false);
