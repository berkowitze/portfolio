/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from "react";
import { Tag } from "./Blog";
import Post1 from "../blog-posts/Post1";
import Post2 from "../blog-posts/Post2";
import Song from "../Util/blog-components/Song";
import Post4 from "../blog-posts/Post4";

export interface PostProps {
  title: ReactNode;
  summary: ReactNode;
  Content: React.FC;
  date: Date;
  tags: Tag[];
}

export const POSTS = {
  "starting-seminar-project": {
    title: "Getting started - Seminar project",
    summary:
      "Starting off the seminar project with some 3D modeling and raytracing code.",
    Content: Post4,
    date: new Date("2024-09-9"),
    tags: ["Coding", "Art"],
  },
  "snowboard-song": {
    title: "Music Composition for Games - Snowboard song",
    summary: (
      <>
        Second song I composed for my Music Composition for Games class, themed
        as a background song in a retro snowboarding game.
        <br />
        <Song src="/Music/Snowboard.mp3" />
      </>
    ),
    Content: Post2,
    date: new Date("2024-9-9"),
    tags: ["Music"],
  },
  "first-song": {
    title: "Music Composition for Games - First song",
    summary: (
      <>
        First song I composed for my Music Composition for Games class.
        <br />
        <Song src="/Music/Song 1.m4a" />
      </>
    ),
    Content: Post2,
    date: new Date("2024-09-1"),
    tags: ["Music"],
  },
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
