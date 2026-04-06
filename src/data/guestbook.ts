import type { GuestbookEntry } from "@/types/guestbook";

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "paul-jung",
    name: "Paul Jung",
    title: "Guest / Builder",
    note:
      "Dropped by vyv.house and left a GitHub trace. More links or a one-line intro can be added anytime.",
    githubHandle: "curiouspaul",
    githubUrl: "https://github.com/curiouspaul",
    tags: ["guestbook", "github", "vyv.house"],
    status: "posted",
  },
  {
    id: "open-slot-1",
    name: "Your Name",
    title: "Visitor / Builder / Friend of the house",
    note:
      "Left a trace at vyv.house. Add a short note, what you're building, or what you want people here to remember.",
    githubHandle: "github",
    githubUrl: "https://github.com/",
    xHandle: "xhandle",
    xUrl: "https://x.com/",
    websiteLabel: "namecard / website",
    websiteUrl: "https://",
    tags: ["guestbook", "vyv.house"],
    status: "open",
  },
  {
    id: "open-slot-2",
    name: "Next Guest",
    title: "Leave your card here",
    note:
      "This section is for real visitors to drop a small internet business card — GitHub, X, personal site, or a short memo.",
    githubHandle: "github",
    githubUrl: "https://github.com/",
    websiteLabel: "portfolio",
    websiteUrl: "https://",
    tags: ["namecard", "builder"],
    status: "open",
  },
];
