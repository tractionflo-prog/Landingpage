# TractionFlo Landing Page

Premium one-page marketing site with a **5-question founding quiz**, **Supabase** lead storage, and **Resend** emails.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- Supabase (leads table)
- Resend (welcome + founder notification emails)

## Quick start

```bash
npm install
cp .env.example .env.local
# Fill in Supabase + Resend keys (see below)
npm run dev
```

## Environment variables

Create `.env.local` from `.env.example`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (optional for future client use) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key — **server only**, used by `/api/leads` |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `TractionFlo <hello@yourdomain.com>` |
| `RESEND_NOTIFY_EMAIL` | Your inbox for new lead alerts (optional) |

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com)
2. Open **SQL Editor** and run `supabase/migrations/001_leads.sql`
3. Copy **Project URL** and **service_role** key into `.env.local`

Leads are stored in `public.leads` with columns: `email`, `name`, `answers` (jsonb), `source`, timestamps.

## Resend setup

1. Create an account at [resend.com](https://resend.com)
2. Add and verify your domain (or use `onboarding@resend.dev` for testing)
3. Create an API key and add it to `.env.local`

On submit, the user receives a **welcome email**; you receive a **notification** with all quiz answers (if `RESEND_NOTIFY_EMAIL` is set).

## Quiz flow

Click **Join Founding Access** anywhere on the page →

1. 5 qualifying questions (business type, bottleneck, volume, platform, goal)
2. Name + email
3. Save to Supabase → send emails → success screen

## Scripts

```bash
npm run dev
npm run build
npm start
```
