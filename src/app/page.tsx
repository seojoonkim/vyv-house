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

const stats = [
  { label: "Location", value: "Seoul" },
  { label: "Format", value: "Builder residency" },
  { label: "Tempo", value: "Night shift" },
  { label: "Status", value: "Open to collabs" },
];

const principles = [
  ["live close to the work", "A house where the line between conversation and execution is intentionally thin."],
  ["cross-pollination by default", "Builders across product, code, design, research, and culture influence each other daily."],
  ["internet-native but human", "Dark screens, whiteboards, long dinners, prototypes, and ambient obsession in one place."],
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vyv.house",
    accent: "text-[#d7ff3f]",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "Seoul / exact location shared privately",
    accent: "text-[#ff4fa3]",
  },
  {
    icon: Users,
    label: "Openings",
    value: "Resident slots and collaborations — placeholder status",
    accent: "text-white/80",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#060708] text-[#f3f4f6]">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.14]" />
      <div className="hero-orb absolute left-[-10rem] top-[-2rem] h-80 w-80 rounded-full bg-[rgba(215,255,63,0.22)]" />
      <div className="hero-orb absolute right-[-8rem] top-28 h-80 w-80 rounded-full bg-[rgba(255,79,163,0.18)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#060708]/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl tracking-wide text-white">
            vyv<span className="text-[#d7ff3f]">.</span>house
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/66 md:flex">
            <a href="#about" className="transition hover:text-white">about</a>
            <a href="#residents" className="transition hover:text-white">residents</a>
            <a href="#life" className="transition hover:text-white">life</a>
            <a href="#join" className="transition hover:text-white">join</a>
          </nav>
          <a
            href="#join"
            className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:border-[#d7ff3f]/45 hover:text-[#d7ff3f]"
          >
            say hi
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
          <div>
            <div className="editorial-kicker mb-6">
              <House size={14} className="text-[#d7ff3f]" />
              hacker house / builder residency
            </div>

            <h1 className="max-w-5xl font-display text-[3.4rem] leading-[0.92] tracking-[-0.045em] md:text-[6.4rem]">
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7ff3f] px-5 py-3 font-semibold text-black transition hover:bg-[#e3ff77]"
              >
                Meet the residents
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 font-medium text-white transition hover:border-white/24 hover:bg-white/[0.03]"
              >
                Apply / Contact
              </a>
            </div>
          </div>

          <div className="frame-section pl-0 pt-6 lg:pl-8">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/46">
              <span>house signal</span>
              <span className="text-[#ff4fa3]">live</span>
            </div>

            <div className="signal-line mt-6 space-y-5">
              <div className="flex items-center gap-2 text-sm text-white/62">
                <Sparkles size={16} className="text-[#ff4fa3]" />
                part residency, part lab, part internet salon
              </div>
              <div className="space-y-4 text-sm leading-6 text-white/72 md:text-[0.96rem]">
                <p>
                  We optimize for proximity: to work, to feedback, to energy, and to the kind of
                  people who make your ideas sharper just by being in the room.
                </p>
                <p>
                  This is where products get unstuck, collaborations start naturally, and new
                  rituals for AI-native building get tested in the open.
                </p>
              </div>
            </div>

            <div className="data-strip mt-8 grid text-left sm:grid-cols-2 lg:grid-cols-2">
              <div className="data-cell px-0 py-4 sm:px-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">residents</div>
                <div className="mt-2 font-emphasis text-4xl text-[#d7ff3f]">03</div>
              </div>
              <div className="data-cell px-0 py-4 sm:px-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">mode</div>
                <div className="mt-2 font-emphasis text-4xl text-[#ff4fa3]">ship</div>
              </div>
            </div>
          </div>
        </div>

        <div className="data-strip mt-14 grid md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="data-cell px-0 py-4 md:px-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">{item.label}</div>
              <div className="mt-2 text-sm text-white/76 md:text-base">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="editorial-kicker mb-5">what is vyv-house</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
              a <span className="highlight-block-pink">creative bunker</span> for people who build
            </h2>
          </div>
          <div className="space-y-0 border-t border-white/8">
            {principles.map(([title, description], index) => (
              <div
                key={title}
                className={`grid gap-4 border-b border-white/8 py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8 ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                <div className="text-sm uppercase tracking-[0.18em] text-white/48">{title}</div>
                <p className="max-w-xl text-sm leading-6 text-white/70 md:text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="frame-section pt-6 text-center">
          <div className="editorial-kicker justify-center">house protocol</div>
          <div className="mt-8 space-y-4 text-2xl leading-tight tracking-[-0.03em] text-white/88 md:text-4xl">
            {houseProtocols.map((line, index) => (
              <p key={line} className={index === houseProtocols.length - 1 ? "text-[#d7ff3f]" : ""}>
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
            <div className="editorial-kicker mb-4">the residents</div>
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
              className="resident-card rounded-[1.8rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d7ff3f]/35"
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
                      <p className="mt-1 text-sm text-[#d7ff3f]">{resident.role}</p>
                    </div>
                    {resident.featured ? (
                      <span className="rounded-full border border-[#ff4fa3]/30 bg-[#ff4fa3]/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[#ff9ac7]">
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
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="editorial-kicker mb-5">life at the house</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
              what actually <span className="highlight-block-green">happens here</span>
            </h2>
          </div>
          <div className="border-t border-white/8">
            {activities.map((activity) => (
              <div key={activity.title} className="grid gap-4 border-b border-white/8 py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/42">
                    <Sparkles size={14} className="text-[#d7ff3f]" />
                    activity
                  </div>
                  <h3 className="text-lg font-semibold text-white md:text-xl">{activity.title}</h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/68 md:text-base">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="frame-section grid gap-10 pt-6 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <div className="editorial-kicker mb-5">join / contact</div>
            <h2 className="font-display text-4xl tracking-[-0.03em] md:text-6xl">
              want to <span className="gradient-text">build from here?</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
              If you are a founder, builder, researcher, or operator who wants to live near momentum,
              send context. Applications, collaborations, and dinner conversations are all welcome.
            </p>
          </div>

          <div className="border-t border-white/8">
            {contactItems.map(({ icon: Icon, label, value, accent }) => (
              <div key={label} className="flex items-start gap-4 border-b border-white/8 py-5">
                <Icon size={16} className={`mt-1 ${accent}`} />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">{label}</div>
                  <div className="mt-2 text-sm leading-6 text-white/76 md:text-base">{value}</div>
                </div>
              </div>
            ))}
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
