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
];
