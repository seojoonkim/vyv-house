export type GuestbookEntry = {
  id: string;
  name: string;
  title?: string;
  note: string;
  githubHandle?: string;
  githubUrl?: string;
  xHandle?: string;
  xUrl?: string;
  websiteLabel?: string;
  websiteUrl?: string;
  avatarUrl?: string;
  tags?: string[];
  status?: "open" | "posted";
};
