import { residents } from "@/data/residents";
import { House, Mail, MapPin, Sparkles, Users, ArrowUpRight } from "lucide-react";

const houseProtocols = [
  "live close to the work",
  "ship more than you explain",
  "share context before you share opinions",
  "prototype in public, refine in private",
  "make the room smarter than the individual",
];

const activities = [
  {
    title: "Late-night shipping",
    description: "Fast builds, tiny experiments, and messy prototypes that turn into real products by sunrise.",
  },
  {
    title: "Research jams",
    description: "Papers, prompts, wild ideas, and rabbit holes turned into tangible insight together.",
  },
  {
    title: "Demo dinners",
    description: "Founders, builders, and friends drop in, share progress, and pressure-test what is worth pushing further.",
  },
  {
    title: "Resident sprints",
    description: "Focused weeks where everyone is building different things, but momentum leaks helpfully across the room.",
  },
];

const stats = ["Seoul", "builder residency", "night shift energy", "open to collabs"];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-20" />
      <div className="hero-orb absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[rgba(204,255,0,0.14)]" />
      <div className="hero-orb absolute right-[-5rem] top-40 h-72 w-72 rounded-full bg-[rgba(255,45,120,0.12)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl tracking-wide text-white">
            vyv<span className="text-[#ccff00]">.</span>house
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">about</a>
            <a href="#residents" className="hover:text-white">residents</a>
            <a href="#life" className="hover:text-white">life</a>
            <a href="#join" className="hover:text-white">join</a>
          </nav>
          <a
            href="#join"
            className="rounded-full border border-[#ccff00]/30 bg-[#ccff00]/10 px-4 py-2 text-sm font-medium text-[#e7ff8f] transition hover:border-[#ccff00]/60 hover:bg-[#ccff00]/16"
          >
            say hi
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-14 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs uppercase tracking-[0.26em] text-white/60">
              <House size={14} className="text-[#ccff00]" />
              hacker house / builder residency
            </div>

            <h1 className="max-w-4xl font-display text-[3.4rem] leading-[0.92] tracking-[-0.04em] md:text-[6.2rem]">
              a house for
              <br />
              <span className="gradient-text">builders with taste</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              <span className="highlight-block">vyv-house</span> is a vibey hacker house where founders,
              researchers, designers, and internet weirdos live close to the work — building,
              testing, hosting, and cross-pollinating ideas in real time.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#residents"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ccff00] px-5 py-3 font-semibold text-black transition hover:bg-[#d9ff4f]"
              >
                Meet the residents
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/3 px-5 py-3 font-medium text-white transition hover:border-white/25 hover:bg-white/6"
              >
                Apply / Contact
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {stats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="panel neon-border rounded-[2rem] p-5 md:p-7">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/45">
              <span>house signal</span>
              <span className="text-[#00ff87]">live</span>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-black/50 p-5 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]">
              <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
                <Sparkles size={16} className="text-[#ff2d78]" />
                part residency, part lab, part internet salon
              </div>
              <div className="space-y-4 text-sm leading-6 text-white/72">
                <p>
                  We optimize for proximity: to work, to feedback, to energy, and to the kind of
                  people who make your ideas sharper just by being in the room.
                </p>
                <p>
                  This is where products get unstuck, collaborations start naturally, and new
                  rituals for AI-native building get tested in the open.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-left text-sm">
                <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
                  <div className="text-white/45">residents</div>
                  <div className="mt-1 font-emphasis text-3xl text-[#ccff00]">03</div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
                  <div className="text-white/45">mode</div>
                  <div className="mt-1 font-emphasis text-3xl text-[#ff2d78]">ship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-[0.28em] text-white/45">what is vyv-house</div>
          <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
            a <span className="highlight-block-pink">creative bunker</span> for people who build
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["live close to the work", "A house where the line between conversation and execution is intentionally thin."],
            ["cross-pollination by default", "Builders across product, code, design, research, and culture influence each other daily."],
            ["internet-native but human", "Dark screens, whiteboards, long dinners, prototypes, and ambient obsession in one place."],
          ].map(([title, description]) => (
            <div key={title} className="panel panel-glow rounded-[1.75rem] p-6">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/45">
                signal
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="panel rounded-[2rem] px-6 py-10 text-center md:px-12">
          <div className="mb-4 text-xs uppercase tracking-[0.28em] text-white/45">house protocol</div>
          <div className="space-y-4 text-2xl leading-tight tracking-[-0.03em] text-white/88 md:text-4xl">
            {houseProtocols.map((line, index) => (
              <p key={line} className={index === houseProtocols.length - 1 ? "text-[#ccff00]" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="residents" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.28em] text-white/45">the residents</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">the people make the house</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
            Resident profiles are structured so you can attach real names, GitHub IDs, avatars, X links,
            and a short explanation of what each person is building or exploring.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {residents.map((resident) => (
            <article
              key={resident.id}
              className="resident-card sticker-card rounded-[1.8rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/35"
            >
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resident.avatarUrl}
                  alt={resident.name}
                  className="h-20 w-20 rounded-2xl border border-white/10 object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{resident.name}</h3>
                      <p className="mt-1 text-sm text-[#ccff00]">{resident.role}</p>
                    </div>
                    {resident.featured ? (
                      <span className="rounded-full border border-[#ff2d78]/30 bg-[#ff2d78]/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[#ff77a8]">
                        featured
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/65">
                    <a href={resident.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                      <span aria-hidden>⌘</span> {resident.githubId}
                    </a>
                    {resident.xUrl ? (
                      <a href={resident.xUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                        <span aria-hidden>𝕏</span> @{resident.xHandle}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/72">{resident.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {resident.tags?.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="life" className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-[0.28em] text-white/45">life at the house</div>
          <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
            what actually <span className="highlight-block-green">happens here</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity) => (
            <div key={activity.title} className="panel rounded-[1.5rem] p-5">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/4 p-2 text-[#00ff87]">
                <Sparkles size={16} />
              </div>
              <h3 className="text-lg font-semibold text-white">{activity.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="rounded-[2rem] border border-[#ccff00]/18 bg-[linear-gradient(135deg,rgba(204,255,0,0.08),rgba(255,45,120,0.08),rgba(0,255,135,0.08))] p-[1px]">
          <div className="rounded-[calc(2rem-1px)] bg-[#0a0a0c]/92 px-6 py-10 md:px-10 md:py-12">
            <div className="mb-3 text-xs uppercase tracking-[0.28em] text-white/45">join / contact</div>
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <div>
                <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
                  want to <span className="gradient-text">build from here?</span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                  If you are a founder, builder, researcher, or operator who wants to live near momentum,
                  send context. Applications, collaborations, and dinner conversations are all welcome.
                </p>
              </div>
              <div className="space-y-3 text-sm text-white/68">
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <Mail size={16} className="text-[#ccff00]" />
                  hello@vyv.house
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <MapPin size={16} className="text-[#ff2d78]" />
                  Seoul / exact location shared privately
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <Users size={16} className="text-[#00ff87]" />
                  resident slots and collabs — placeholder status
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-2xl">vyv.house</div>
            <div className="mt-1 text-sm text-white/45">live together, think together, ship together.</div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/55">
            <a href="https://github.com/seojoonkim/vyv-house" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://x.com/simonkim_nft" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href="mailto:hello@vyv.house" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
