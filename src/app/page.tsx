import { residents } from "@/data/residents";
import { ArrowUpRight, House, Mail, MapPin, Sparkles, Users } from "lucide-react";

const houseProtocols = [
  "live close to the work",
  "ship more than you explain",
  "share context before you share opinions",
  "prototype in public, refine in private",
  "make the room smarter than the individual",
];

const activities = [
  {
    index: "01",
    title: "Late-night shipping",
    description:
      "Small teams, open laptops, fast commits. The house gets quiet in a productive way and ideas turn tangible before morning.",
  },
  {
    index: "02",
    title: "Research jams",
    description:
      "Papers, prompts, notes, and half-finished threads get pressure-tested together until a sharper point emerges.",
  },
  {
    index: "03",
    title: "Demo dinners",
    description:
      "Friends of the house drop in, share what is working, and cut through what is performative or premature.",
  },
  {
    index: "04",
    title: "Resident sprints",
    description:
      "Everyone is building something different, but momentum leaks across the room in useful ways.",
  },
];

const stats = [
  { label: "Base", value: "Seoul" },
  { label: "Model", value: "Builder residency" },
  { label: "Rhythm", value: "Night shift" },
  { label: "Access", value: "By context" },
];

const principles = [
  ["proximity to the work", "Conversation, critique, and execution happen close together. The house is designed to reduce lag between idea and build."],
  ["disciplined cross-pollination", "Product, code, design, research, and culture overlap naturally here — but with enough restraint to keep signal high."],
  ["internet-native, physically grounded", "Dark screens, whiteboards, dinners, and long-form conversations. Online energy, but with a real room behind it."],
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vyv.house",
    accent: "text-[#d4ff00]",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "Seoul / exact location shared privately",
    accent: "text-white/70",
  },
  {
    icon: Users,
    label: "Openings",
    value: "Residents, collaborators, and dinner guests considered case by case.",
    accent: "text-[#ff3b7c]",
  },
];

const signalItems = [
  ["Format", "part residency / part lab / part salon"],
  ["Bias", "build first, explain after"],
  ["Energy", "edited chaos, not startup theater"],
  ["State", "open to aligned visitors + collaborators"],
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#060708] text-[#f3f4f6]">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.1]" />
      <div className="hero-orb absolute left-[-12rem] top-[-4rem] h-80 w-80 bg-[rgba(212,255,0,0.11)]" />
      <div className="hero-orb absolute right-[-10rem] top-36 h-72 w-72 bg-[rgba(255,59,124,0.08)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#060708]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl tracking-wide text-white">
            vyv<span className="text-[#d4ff00]">.</span>house
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a href="#about" className="transition hover:text-white">about</a>
            <a href="#residents" className="transition hover:text-white">residents</a>
            <a href="#life" className="transition hover:text-white">life</a>
            <a href="#join" className="transition hover:text-white">contact</a>
          </nav>
          <a
            href="#join"
            className="border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:border-[#d4ff00]/45 hover:text-[#d4ff00]"
            style={{ borderRadius: "var(--radius-button)" }}
          >
            get in touch
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-18 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="editorial-kicker mb-6">
              <House size={14} className="text-[#d4ff00]" />
              seoul hacker house / builder residency
            </div>

            <h1 className="max-w-5xl font-display text-[3.15rem] leading-[0.94] tracking-[-0.048em] md:text-[6rem]">
              live together.
              <br />
              think clearly.
              <br />
              <span className="text-[#d4ff00]">ship the next thing.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
              <span className="text-white">vyv.house</span> is a house for founders, researchers,
              designers, and operators who want proximity to momentum — a place where work moves
              quickly, critique is useful, and internet-native projects take shape in real time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#residents"
                className="inline-flex items-center justify-center gap-2 bg-[#d4ff00] px-5 py-3 font-semibold text-black transition hover:bg-[#deff3f]"
                style={{ borderRadius: "var(--radius-button)" }}
              >
                See who is in the house
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 border border-white/12 px-5 py-3 font-medium text-white transition hover:border-white/24 hover:bg-white/[0.025]"
                style={{ borderRadius: "var(--radius-button)" }}
              >
                Send context
              </a>
            </div>
          </div>

          <div className="frame-section pl-0 pt-6 lg:pl-10">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/42">
              <span>house signal</span>
              <span className="inline-flex items-center gap-2 text-white/56">
                <span className="h-2 w-2 rounded-full bg-[#d4ff00]" />
                active
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {signalItems.map(([label, value]) => (
                <div key={label} className="signal-row">
                  <span>{label}</span>
                  <span className="text-right text-white/72">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[0.35rem] border border-white/8 bg-white/[0.02] p-4">
              <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/42">
                <Sparkles size={13} className="text-[#ff3b7c]" />
                current read
              </div>
              <p className="max-w-md text-sm leading-6 text-white/68 md:text-[0.95rem]">
                We optimize for useful density: the right people, enough time, honest feedback, and a
                room that makes building feel inevitable.
              </p>
            </div>

            <div className="data-strip mt-8 grid text-left sm:grid-cols-2">
              <div className="data-cell px-0 py-4 sm:px-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">residents</div>
                <div className="mt-2 font-emphasis text-4xl text-[#d4ff00]">02</div>
              </div>
              <div className="data-cell px-0 py-4 sm:px-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">status</div>
                <div className="mt-2 font-emphasis text-4xl text-white/88">live</div>
              </div>
            </div>
          </div>
        </div>

        <div className="data-strip mt-14 grid md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="data-cell px-0 py-4 md:px-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">{item.label}</div>
              <div className="mt-2 text-sm text-white/74 md:text-base">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section id="about" className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="editorial-kicker mb-5">what kind of place this is</div>
            <h2 className="font-display text-4xl tracking-[-0.035em] md:text-[4.4rem]">
              a disciplined house
              <br />
              for ambitious internet work
            </h2>
          </div>
          <div className="space-y-0 border-t border-white/8">
            {principles.map(([title, description], index) => (
              <div
                key={title}
                className={`grid gap-4 border-b border-white/8 py-6 md:grid-cols-[0.82fr_1.18fr] md:gap-10 ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                <div className="text-sm uppercase tracking-[0.18em] text-white/46">{title}</div>
                <p className="max-w-xl text-sm leading-6 text-white/66 md:text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-18 md:px-8 md:pb-28">
        <div className="frame-section pt-6 text-center">
          <div className="editorial-kicker justify-center">house protocol</div>
          <div className="mt-8 space-y-4 text-2xl leading-tight tracking-[-0.03em] text-white/84 md:text-[2.65rem]">
            {houseProtocols.map((line, index) => (
              <p key={line} className={index === houseProtocols.length - 1 ? "text-[#d4ff00]" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="residents" className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-28">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="editorial-kicker mb-4">resident dossier</div>
            <h2 className="font-display text-4xl tracking-[-0.035em] md:text-[4.4rem]">the people define the signal</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/62 md:text-right md:text-base">
            Public profiles of the people currently building from the house.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {residents.map((resident, index) => (
            <article
              key={resident.id}
              className="resident-card p-5 transition duration-300 hover:border-[#d4ff00]/28 hover:bg-white/[0.04]"
            >
              <div className="resident-card-rule mb-5 flex items-center justify-between">
                <span>resident file {String(index + 1).padStart(2, "0")}</span>
                <span>{resident.status}</span>
              </div>

              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resident.avatarUrl}
                  alt={resident.name}
                  className="h-20 w-20 border border-white/10 object-cover"
                  style={{ borderRadius: "0.2rem" }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{resident.name}</h3>
                      <p className="mt-1 text-sm text-[#d4ff00]">{resident.role}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/58">
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

              <div className="mt-5 grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <div className="resident-meta-label">focus</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {resident.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/56"
                        style={{ borderRadius: "var(--radius-chip)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="resident-meta-label">brief</div>
                  <p className="mt-2 text-sm leading-6 text-white/70">{resident.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="life" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="editorial-kicker mb-5">life at the house</div>
            <h2 className="font-display text-4xl tracking-[-0.035em] md:text-[4.4rem]">
              what the week
              <br />
              tends to look like
            </h2>
          </div>
          <div className="grid gap-0 border-t border-white/8">
            {activities.map((activity) => (
              <div key={activity.title} className="grid gap-4 border-b border-white/8 py-6 md:grid-cols-[88px_0.78fr_1.22fr] md:gap-8">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/36">{activity.index}</div>
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/42">
                    <Sparkles size={13} className="text-[#d4ff00]" />
                    activity
                  </div>
                  <h3 className="text-lg font-semibold text-white md:text-xl">{activity.title}</h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/64 md:text-base">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="frame-section grid gap-10 pt-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="editorial-kicker mb-5">join / contact</div>
            <h2 className="font-display text-4xl tracking-[-0.035em] md:text-[4.4rem]">
              if the context fits,
              <br />
              <span className="text-[#d4ff00]">come by.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
              We are open to residents, collaborators, and visitors who have real work in motion.
              Send a short note with who you are, what you are building, and why this house makes sense.
            </p>
          </div>

          <div className="border-t border-white/8">
            {contactItems.map(({ icon: Icon, label, value, accent }) => (
              <div key={label} className="flex items-start gap-4 border-b border-white/8 py-5">
                <Icon size={16} className={`mt-1 ${accent}`} />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">{label}</div>
                  <div className="mt-2 text-sm leading-6 text-white/74 md:text-base">{value}</div>
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
            <div className="mt-1 text-sm text-white/42">live together, think together, ship together.</div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/52">
            <a href="https://github.com/seojoonkim/vyv-house" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://x.com/simonkim_nft" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href="mailto:hello@vyv.house" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
