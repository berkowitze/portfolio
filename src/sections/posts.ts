import { ReactNode } from "react";
import { Tag } from "./Blog";
import Post1 from "../blog-posts/Post1";

export interface PostProps {
  title: ReactNode;
  summary: ReactNode;
  Content: React.FC;
  date: Date;
  tags: Tag[];
}
export const POSTS = {
  "seminar-project": {
    title: "Seminar Project",
    summary:
      "Plan for my first semester Seminar project in the MFA program at Clark University. Focus on raytracing and 3D modeling.",
    Content: Post1,
    date: new Date("2024-09-2"),
    tags: ["Coding", "Art"],
  },
} as const satisfies Record<string, PostProps>;

export type SlugName = keyof typeof POSTS;
export function isValidSlugName(slug: string): slug is SlugName {
  return slug in POSTS;
}
