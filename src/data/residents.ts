import type { Resident } from "@/types/resident";

export const residents: Resident[] = [
  {
    id: "simon-kim",
    name: "Simon Kim",
    githubId: "seojoonkim",
    githubUrl: "https://github.com/seojoonkim",
    avatarUrl: "https://github.com/seojoonkim.png",
    xHandle: "simonkim_nft",
    xUrl: "https://x.com/simonkim_nft",
    description:
      "Operator, builder, and systems thinker exploring how AI-native products, communities, and internet culture can compound together.",
    role: "Founder Resident",
    tags: ["AI", "product", "community"],
    featured: true,
    sortOrder: 1,
    status: "current",
  },
  {
    id: "resident-02",
    name: "Coming Soon",
    githubId: "github-id",
    githubUrl: "https://github.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/9919?s=400&v=4",
    xHandle: "twitter-handle",
    xUrl: "https://x.com",
    description:
      "Placeholder resident profile. Replace this with a real resident name, avatar, GitHub, X link, and a one-to-three sentence intro.",
    role: "Builder Resident",
    tags: ["design", "infra", "research"],
    sortOrder: 2,
    status: "current",
  },
  {
    id: "resident-03",
    name: "Open Slot",
    githubId: "future-resident",
    githubUrl: "https://github.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/583231?s=400&v=4",
    xHandle: "future-handle",
    xUrl: "https://x.com",
    description:
      "Another placeholder slot for the next resident. Ideal for someone building at the edge of software, media, culture, or research.",
    role: "Guest / Resident",
    tags: ["founder", "writing", "prototype"],
    sortOrder: 3,
    status: "guest",
  },
];
