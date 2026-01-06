# Lusara — Agent Instructions (AGENTS.md)

## Product
Lusara is a website with multiple simple web games.
MVP focus: Word guessing game first.
Goals: fast load, clean UI, mobile-first, accessible, easy to add new games.

## Stack
- Next.js (App Router) + TypeScript
- Supabase (database now, Auth later)
- Jest + ts-jest for unit tests

## Key rules
- Prefer simple, readable code over clever code.
- Do not add dependencies unless needed; explain why.
- No large refactors unless asked.
- Keep each game isolated under `src/games/<slug>/`.

## Supabase rules (Auth later)
- DO NOT implement authentication flows yet.
- DO NOT add SSR auth/cookie session handling yet.
- Use Supabase only for non-auth data needs.
- Never use the Supabase service role key in the browser.
- Frontend uses ONLY anon key via NEXT_PUBLIC_* env vars.
- If writing data is required later, design with RLS in mind.

## Env vars
- NEXT_PUBLIC_SUPABASE_URL=
- NEXT_PUBLIC_SUPABASE_ANON_KEY=
Never create or request NEXT_PUBLIC_* secrets beyond anon key.

## Project structure
- src/app/                 routes
- src/lib/supabase/        supabase client(s)
- src/games/<slug>/        each game isolated
  - Game.tsx
  - logic.ts
  - ui.tsx (optional)
- src/components/          shared UI only if reused

## Testing (Jest)
- Unit-test pure logic in `src/**/logic.ts`.
- Tests must be deterministic (avoid randomness/timers unless controlled).
- No network calls in unit tests; mock when needed.

## Definition of done
1) `npm run lint` passes
2) `npm test` passes
3) No console errors in dev
4) No `any` types
5) Updated docs if behavior changed

## Commands
- Install: npm i
- Dev: npm run dev
- Test: npm test
