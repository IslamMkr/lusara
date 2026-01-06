import { Button } from '@/src/components/Button';
import { Card } from '@/src/components/Card';
import { Chip } from '@/src/components/Chip';
import { Heading, Text } from '@/src/components/Typography';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6efe6] text-[#1e1b16]">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f9c784]/60 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-[#8dd3c7]/50 blur-[140px]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-10">
        <header className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-[#6b5f52]">
          <span className="font-semibold">Lusara</span>
          <nav className="hidden gap-6 sm:flex">
            <a className="transition hover:text-[#1e1b16]" href="#games">
              Games
            </a>
            <a className="transition hover:text-[#1e1b16]" href="#about">
              About
            </a>
          </nav>
        </header>

        <section className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Chip
              variant="pill"
              size="md"
              className="tracking-[0.25em]"
              leading={
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#f28f3b]"
                />
              }
            >
              Word games, gently competitive
            </Chip>
            <Heading as="h1" variant="hero">
              A cozy arcade of wordplay, built for quick wins and quiet focus.
            </Heading>
            <Text variant="lead" className="max-w-xl">
              Lusara is a growing collection of tiny, polished web games.
              Mobile-first, accessible, and designed to load fast so you can
              jump right in.
            </Text>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#games">Browse games</Button>
              <Button href="#about" variant="outline">
                Our approach
              </Button>
            </div>
          </div>

          <Card className="bg-white/80" shadow>
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5f52]">
              <Text as="span" variant="micro">
                Featured
              </Text>
              <Chip variant="amber" size="sm">
                Coming soon
              </Chip>
            </div>
            <Heading as="h2" variant="section" className="mt-6 text-[#1e1b16]">
              Word Guess
            </Heading>
            <Text variant="muted" className="mt-3 leading-relaxed">
              A quick daily puzzle with crisp feedback and a playful twist. We
              are polishing the first build now.
            </Text>
            <div className="mt-6 grid gap-3 text-xs uppercase tracking-[0.2em] text-[#6b5f52]">
              <div className="rounded-2xl border border-dashed border-[#d9c8b5] px-4 py-3">
                60-second rounds
              </div>
              <div className="rounded-2xl border border-dashed border-[#d9c8b5] px-4 py-3">
                Colorblind-safe palette
              </div>
              <div className="rounded-2xl border border-dashed border-[#d9c8b5] px-4 py-3">
                Shareable results
              </div>
            </div>
          </Card>
        </section>

        <section id="games" className="mt-20">
          <div className="flex flex-col gap-3">
            <Heading>Games</Heading>
            <Text variant="eyebrow">
              Small, focused, and made to replay
            </Text>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Card as="article">
              <Heading as="h3" variant="card">
                Word Guess
              </Heading>
              <Text variant="muted" className="mt-2">
                Guess the word in a handful of smart, satisfying moves.
              </Text>
              <Chip variant="amber" size="sm" className="mt-6">
                In progress
              </Chip>
            </Card>
            <Card
              as="article"
              variant="dashed"
              className="text-[#6b5f52]"
            >
              <Heading as="h3" variant="card" className="text-[#1e1b16]">
                Next game slot
              </Heading>
              <Text variant="muted" className="mt-2">
                The second game is still a secret. Expect a fast, tactile
                puzzle.
              </Text>
              <Chip variant="outline" size="sm" className="mt-6">
                Planned
              </Chip>
            </Card>
          </div>
        </section>

        <section id="about" className="mt-20 max-w-3xl">
          <Heading>About Lusara</Heading>
          <Text className="mt-4">
            We build lightweight games that feel crafted rather than crowded.
            Every release stays focused on clarity, accessibility, and the joy
            of returning for just one more round.
          </Text>
        </section>

        <footer className="mt-auto pt-12">
          <Text as="p" variant="micro">
            Crafted for curious players.
          </Text>
        </footer>
      </main>
    </div>
  );
}
