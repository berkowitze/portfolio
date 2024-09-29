/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from "react";
import { Tag } from "./Blog";
import Post1 from "../blog-posts/Post1";
import Post2 from "../blog-posts/Post2";
import Song from "../Util/blog-components/Song";
import Post4 from "../blog-posts/Post4";
import Post5 from "../blog-posts/Post5";
import Post6 from "../blog-posts/Post6";
import Post7 from "../blog-posts/Post7";

export interface PostProps {
  title: ReactNode;
  summary: ReactNode;
  Content: React.FC;
  date: Date;
  tags: Tag[];
}

export const POSTS = {
  "seminar-project-week-4": {
    title: "Seminar Project - Week 4",
    summary:
      "Going through Ray Tracing - The Rest of Your Life, researching OpenPBR, and looking into how to import FBX files into C++",
    Content: Post7,
    date: new Date("2024-09-29"),
    tags: ["Coding"],
  },
  "seminar-project-week-3": {
    title: "Seminar Project - Week 3",
    summary: (
      <>
        Finishing up the{" "}
        <a href="https://raytracing.github.io/books/RayTracingTheNextWeek.html">
          Ray Tracing - The Next Week
        </a>{" "}
        book and getting familiar with Blender's geometry nodes
      </>
    ),
    Content: Post6,
    date: new Date("2024-09-23"),
    tags: ["Coding", "Art"],
  },
  "seminar-project-milestone-one": {
    title: "Seminar Project - Week 2",
    summary:
      "Finishing the first milestone of my seminar project by writing a functional raytracer with a BVH.",
    Content: Post5,
    date: new Date("2024-09-16"),
    tags: ["Coding"],
  },
  "starting-seminar-project": {
    title: "Seminar Project - Week 1",
    summary:
      "Starting off the seminar project with some 3D modeling and raytracing code.",
    Content: Post4,
    date: new Date("2024-09-09"),
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
    title: "Seminar Project - Plan",
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
