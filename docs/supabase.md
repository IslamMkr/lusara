# Supabase usage in Lusara

## Install
npm install @supabase/supabase-js

## Client rules
- Browser client lives in `src/lib/supabase/browser.ts`
- Server client (if needed) lives in `src/lib/supabase/server.ts`
- Never expose service role key to the browser

## Types
Prefer generating DB types via Supabase (CLI/dashboard) when we add DB tables.
