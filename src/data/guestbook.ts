import type { GuestbookEntry } from "@/types/guestbook";

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "jungwoo-jay",
    name: "Jay",
    title: "Guest / Builder",
    note:
      "Likes making all kinds of things. Dropped a GitHub trace at vyv.house.",
    githubHandle: "stablewoo",
    githubUrl: "https://github.com/stablewoo",
    avatarUrl: "https://github.com/stablewoo.png",
    tags: ["guestbook", "github", "vyv.house"],
    status: "posted",
  },
  {
    id: "paul-jung",
    name: "Paul Jung",
    title: "Guest / Builder",
    note:
      "Dropped by vyv.house and left a GitHub trace. More links or a one-line intro can be added anytime.",
    githubHandle: "curiouspaul",
    githubUrl: "https://github.com/curiouspaul",
    avatarUrl: "https://github.com/curiouspaul.png",
    tags: ["guestbook", "github", "vyv.house"],
    status: "posted",
  },
];
