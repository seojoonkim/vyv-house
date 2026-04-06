export type Resident = {
  id: string;
  name: string;
  githubId: string;
  githubUrl: string;
  avatarUrl: string;
  xHandle?: string;
  xUrl?: string;
  description: string;
  role?: string;
  tags?: string[];
  featured?: boolean;
  sortOrder?: number;
  status?: "current" | "alumni" | "guest";
};
