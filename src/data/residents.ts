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
    id: "woonggi-min",
    name: "Woonggi Min",
    githubId: "minpeter",
    githubUrl: "https://github.com/minpeter",
    avatarUrl: "https://github.com/minpeter.png",
    xHandle: "minpeterx",
    xUrl: "https://x.com/minpeterx",
    description:
      "Software engineer exploring developer tooling, local-serving workflows, and practical AI systems.",
    role: "Builder Resident",
    tags: ["developer tools", "AI", "systems"],
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
