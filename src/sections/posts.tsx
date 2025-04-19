/* eslint-disable react-refresh/only-export-components */
import { lazy, ReactNode } from "react";
import { Tag } from "./Blog";
import Song from "../Util/blog-components/Song";

export interface PostProps {
  title: ReactNode;
  summary: ReactNode;
  Content: React.FC;
  date: Date;
  tags: Tag[];
}

export const POSTS = {
  "seminar-project-reflections": {
    title: "Reflections from the first semester",
    summary: "Reflecting on the seminar project",
    Content: lazy(() => import("../blog-posts/Post14")),
    date: new Date("2024-12-03"),
    tags: ["Coding", "Art", "C++ Raytracer"],
  },
  "seminar-project-final": {
    title: "Wrapping up the seminar project",
    summary:
      "Finishing up the raytracer and 3d models by adding raytracer support for smooth shading, various materials, lighting, and whipping up a final scene to render",
    Content: lazy(() => import("../blog-posts/Post13")),
    date: new Date("2024-11-17"),
    tags: ["Coding", "Art", "C++ Raytracer"],
  },
  "seminar-project-week-9": {
    title: "Seminar Project - Week 9",
    summary: "Back to Raytracing",
    Content: lazy(() => import("../blog-posts/Post12")),
    date: new Date("2024-11-05"),
    tags: ["Coding"],
  },
  "seminar-project-week-8": {
    title: "Seminar Project - Week 8",
    summary: "More 3D modeling and learning Substance Painter",
    Content: lazy(() => import("../blog-posts/Post11")),
    date: new Date("2024-10-29"),
    tags: ["Art"],
  },
  "seminar-project-week-7": {
    title: "Seminar Project - Week 7",
    summary: "Lamp and Armchair",
    Content: lazy(() => import("../blog-posts/Post10")),
    date: new Date("2024-10-26"),
    tags: ["Art"],
  },
  "seminar-project-week-6": {
    title: "Seminar Project - Week 6",
    summary: "Mental block on 3D modeling",
    Content: lazy(() => import("../blog-posts/Post9")),
    date: new Date("2024-10-15"),
    tags: ["Art"],
  },
  "seminar-project-week-5": {
    title: "Seminar Project - Week 5",
    summary: "Starting to implemnt glTF™️ support in the raytracer",
    Content: lazy(() => import("../blog-posts/Post8")),
    date: new Date("2024-10-08"),
    tags: ["Coding", "C++ Raytracer"],
  },
  "seminar-project-week-4": {
    title: '"Ray Tracing - The Rest of Your Life", FBX Parsing, and OpenPBR',
    summary: (
      <>
        Going through{" "}
        <a href="https://raytracing.github.io/books/RayTracingTheRestOfYourLife.html">
          Ray Tracing - The Rest of Your Life
        </a>
        , researching OpenPBR, and looking into how to import FBX files into
        C++.
      </>
    ),
    Content: lazy(() => import("../blog-posts/Post7")),
    date: new Date("2024-09-29"),
    tags: ["Coding", "C++ Raytracer"],
  },
  "seminar-project-week-3": {
    title: '"Ray Tracing - The Next Week" and Blender Geometry Nodes',
    summary: (
      <>
        Finishing up the{" "}
        <a href="https://raytracing.github.io/books/RayTracingTheNextWeek.html">
          Ray Tracing - The Next Week
        </a>{" "}
        book and getting familiar with Blender's geometry nodes
      </>
    ),
    Content: lazy(() => import("../blog-posts/Post6")),
    date: new Date("2024-09-23"),
    tags: ["Coding", "Art", "C++ Raytracer"],
  },
  "seminar-project-milestone-one": {
    title: "Raytracer BVH, Materials, Camera Settings, and Motion Blur",
    summary:
      "Adding raytracer support for lambertian diffuse, gamma correction, metal and dielectric materials, camera location and depth of field, and motion blur. Optimizing with a BVH.",
    Content: lazy(() => import("../blog-posts/Post5")),
    date: new Date("2024-09-16"),
    tags: ["Coding", "C++ Raytracer"],
  },
  "starting-seminar-project": {
    title: "Basic Raytracer and Bookshelf Model",
    summary:
      "Starting off the seminar project with some 3D modeling and raytracing code.",
    Content: lazy(() => import("../blog-posts/Post4")),
    date: new Date("2024-09-09"),
    tags: ["Coding", "Art", "C++ Raytracer"],
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
    Content: lazy(() => import("../blog-posts/Post3")),
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
    Content: lazy(() => import("../blog-posts/Post2")),
    date: new Date("2024-09-01"),
    tags: ["Music"],
  },
  "seminar-project": {
    title: "First Semester Seminar Project Plan",
    summary:
      "Plan for my first semester Seminar project in the MFA program at Clark University. I will focus on raytracing and 3D modeling.",
    Content: lazy(() => import("../blog-posts/Post1")),
    date: new Date("2024-09-02"),
    tags: ["Coding", "Art"],
  },
  "semester-2-week-1": {
    title: "C++ Rasterizer",
    summary:
      "Kicking off my second semester seminar project by switching from writing a raytracer to writing a rasterizer in C++",
    Content: lazy(() => import("../blog-posts/Post15")),
    date: new Date("January 20, 2025"),
    tags: ["Coding", "Art", "C++ Rasterizer"],
  },
  "semester-2-week-2": {
    title: "Software Rasterizer - Part 1",
    summary: "Writing code to render lines and triangles",
    Content: lazy(() => import("../blog-posts/Post16")),
    date: new Date("January 28, 2025"),
    tags: ["Coding", "C++ Rasterizer"],
  },
  "semester-2-week-3": {
    title: "Software Rasterizer - Part 2",
    summary: "Z-buffer, using UVs for texturing, and projections",
    Content: lazy(() => import("../blog-posts/Post17")),
    date: new Date("February 4, 2025"),
    tags: ["Coding", "C++ Rasterizer"],
  },
  "semester-2-week-4": {
    title: "Software Rasterizer - Part 3",
    summary: "Smooth-shading and camera transformations",
    Content: lazy(() => import("../blog-posts/Post18")),
    date: new Date("February 12, 2025"),
    tags: ["Coding", "C++ Rasterizer"],
  },
  "semester-2-week-5": {
    title: "Software Rasterizer - Part 4",
    summary:
      "Finishing up the rasterizer and preparing a small linear algebra lesson for my milestone presentation",
    Content: lazy(() => import("../blog-posts/Post19")),
    date: new Date("February 17, 2025"),
    tags: ["Coding", "C++ Rasterizer"],
  },
  "semester-2-week-6": {
    title: "OpenGL and Fork",
    summary: "Starting to learn OpenGL, and modeling a fork for fun",
    Content: lazy(() => import("../blog-posts/Post20")),
    date: new Date("February 25, 2025"),
    tags: ["Coding", "Art"],
  },
  "semester-2-week-7": {
    title: "Houdini spaghetti simulation!",
    summary:
      "Starting to delve into VFX in Houdini by simulating spaghetti falling into a bowl",
    Content: lazy(() => import("../blog-posts/Post21")),
    date: new Date("March 11, 2025"),
    tags: ["Coding", "Art", "Houdini"],
  },
  "semester-2-week-8": {
    title: "Houdini - Patronus",
    summary:
      "Doing a patronus VFX effect in Houdini following a Youtube tutorial",
    Content: lazy(() => import("../blog-posts/Post22")),
    date: new Date("March 19, 2025"),
    tags: ["Coding", "Art", "Houdini"],
  },
  "semester-2-week-9": {
    title: "Houdini - Finishing the Patronus",
    summary:
      "Finishing the patronus VFX effect in Houdini and compositing it in Nuke",
    Content: lazy(() => import("../blog-posts/Post23")),
    date: new Date("March 25, 2025"),
    tags: ["Coding", "Art", "Houdini"],
  },
  "procedural-art": {
    title: "Procedural Art Portfolio Pieces",
    summary:
      "Preparing some procedural art pieces for my portfolio and making some general portfolio improvements",
    Content: lazy(() => import("../blog-posts/Post24")),
    date: new Date("April 3, 2025"),
    tags: ["Coding", "Art"],
  },
} as const satisfies Record<string, PostProps>;

export type SlugName = keyof typeof POSTS;

export function isValidSlugName(slug: string): slug is SlugName {
  return slug in POSTS;
}
