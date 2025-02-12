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
import Post3 from "../blog-posts/Post3";
import Post8 from "../blog-posts/Post8";
import Post9 from "../blog-posts/Post9";
import Post10 from "../blog-posts/Post10";
import Post11 from "../blog-posts/Post11";
import Post12 from "../blog-posts/Post12";
import Post13 from "../blog-posts/Post13";
import Post14 from "../blog-posts/Post14";
import Post15 from "../blog-posts/Post15";
import Post16 from "../blog-posts/Post16";
import Post17 from "../blog-posts/Post17";
import Post18 from "../blog-posts/Post18";

export interface PostProps {
  title: ReactNode;
  summary: ReactNode;
  Content: React.FC;
  date: Date;
  tags: Tag[];
}

export const POSTS = {
  "seminar-project-reflections": {
    title: "Seminar Project - Reflections",
    summary: "Reflecting on the semester project",
    Content: Post14,
    date: new Date("2024-12-03"),
    tags: ["Coding", "Art"],
  },
  "seminar-project-final": {
    title: "Seminar Project - Wrapping Up",
    summary: "Finishing up the semester project",
    Content: Post13,
    date: new Date("2024-11-17"),
    tags: ["Coding", "Art"],
  },
  "seminar-project-week-9": {
    title: "Seminar Project - Week 9",
    summary: "Back to Raytracing",
    Content: Post12,
    date: new Date("2024-11-05"),
    tags: ["Coding"],
  },
  "seminar-project-week-8": {
    title: "Seminar Project - Week 8",
    summary: "More 3D modeling and learning Substance Painter",
    Content: Post11,
    date: new Date("2024-10-29"),
    tags: ["Art"],
  },
  "seminar-project-week-7": {
    title: "Seminar Project - Week 7",
    summary: "Lamp and Armchair",
    Content: Post10,
    date: new Date("2024-10-26"),
    tags: ["Art"],
  },
  "seminar-project-week-6": {
    title: "Seminar Project - Week 6",
    summary: "Mental block on 3D modeling",
    Content: Post9,
    date: new Date("2024-10-15"),
    tags: ["Art"],
  },
  "seminar-project-week-5": {
    title: "Seminar Project - Week 5",
    summary: "Starting to implemnt glTF™️ support in the raytracer",
    Content: Post8,
    date: new Date("2024-10-08"),
    tags: ["Coding"],
  },
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
    Content: Post3,
    date: new Date("2024-09-09"),
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
    date: new Date("2024-09-01"),
    tags: ["Music"],
  },
  "seminar-project": {
    title: "Seminar Project - Plan",
    summary:
      "Plan for my first semester Seminar project in the MFA program at Clark University. Focus on raytracing and 3D modeling.",
    Content: Post1,
    date: new Date("2024-09-02"),
    tags: ["Coding", "Art"],
  },
  "semester-2-week-1": {
    title: "Kicking off the second semester of my MFA",
    summary: "Switching gears from raytracing to rasterizing!",
    Content: Post15,
    date: new Date("January 20, 2025"),
    tags: ["Coding", "Art"],
  },
  "semester-2-week-2": {
    title: "Software Rasterizer - Part 1",
    summary: "Writing code to render lines and triangles",
    Content: Post16,
    date: new Date("January 28, 2025"),
    tags: ["Coding"],
  },
  "semester-2-week-3": {
    title: "Software Rasterizer - Part 2",
    summary: "Z-buffer, using UVs for texturing, and projections",
    Content: Post17,
    date: new Date("February 4, 2025"),
    tags: ["Coding"],
  },
  "semester-2-week-4": {
    title: "Software Rasterizer - Part 3",
    summary: "Smooth-shading and camera transformations",
    Content: Post18,
    date: new Date("February 12, 2025"),
    tags: ["Coding"],
  },
} as const satisfies Record<string, PostProps>;

export type SlugName = keyof typeof POSTS;

export function isValidSlugName(slug: string): slug is SlugName {
  return slug in POSTS;
}
