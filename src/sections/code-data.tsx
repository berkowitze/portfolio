/* eslint-disable react-refresh/only-export-components */
import { lazy, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export interface CodeProjectInfo {
  title: ReactNode;
  thumbnail: string;
  description: ReactNode;
  stack: string[];
  contributions?: string[];
  url?: string;
  targetPageId?: string; // For internal navigation to sections like "blog", "art", etc.
  onClick?: (setFilteredTags: (tags: Set<string>) => void) => void;
  Content?: React.FC; // For individual project pages
}

export const CODE_PROJECTS: Record<string, CodeProjectInfo> = {
  raytracer: {
    title: "C++ Raytracer",
    thumbnail: "/Code/raytracer.mp4",
    description:
      "A raytracer written in C++ during my MFA at Clark University.",
    stack: ["C++", "Blender"],
    contributions: [
      "Support for diffuse, metallic, dielectric, and volumetric materials",
      "FBX import support, including materials with textures",
      "Multiprocessing and live-preview rendering",
      "Initially followed the Ray Tracing in One Weekend book",
    ],
    targetPageId: "blog",
    onClick: (setFilteredTags) => {
      setFilteredTags(new Set(["C++ Raytracer"]));
    },
    Content: lazy(() => import("../code/Raytracer")),
  },
  downup: {
    title: "Downup",
    thumbnail: "/Code/downup.mp4",
    description:
      "A hobby website for small communities to do goal-oriented challenges together, like monthly pushup challenges.",
    stack: ["Next.js", "Twilio", "Redis", "Postgres", "Railway", "Upstash"],
    contributions: [
      "Full-stack development",
      "SMS integration with Twilio",
      "Real-time progress tracking",
      "Community challenge management",
    ],
    url: "https://downup.app",
    Content: lazy(() => import("../code/Downup")),
  },
  "analysis-tool": {
    title: "Benchling Insights",
    thumbnail: "/Code/analysis-tool.mp4",
    description:
      "A no-code data analysis platform for Benchling customers to transform and analyze data without writing SQL.",
    stack: [
      "React",
      "TypeScript",
      "Flask",
      "GraphQL",
      "SQLAlchemy",
      "Postgres",
      "Redis",
      "S3",
    ],
    contributions: [
      "Tool to create datasets with checkboxes, building GraphQL queries",
      "Data transformation tools (aggregations, filters)",
      "Product scaffolding and architecture",
    ],
    Content: lazy(() => import("../code/AnalysisTool")),
  },
  "entity-diagram": {
    title: "Benchling Database Diagram",
    thumbnail: "/Code/entity-diagram.mp4",
    description:
      "Interactive visualization tool to help Benchling customers understand their denormalized database schemas.",
    stack: ["React", "TypeScript"],
    contributions: [
      "Built interactive database schema visualization",
      "Schema relationship mapping",
      "Search and navigation features",
    ],
  },
  exosim: {
    title: "Exosim",
    thumbnail: "/Code/exosim.mp4",
    description:
      "A physics-based simulator for exoplanet systems with light intensity graphing as planets pass in front of stars.",
    stack: ["p5.js", "JavaScript"],
    contributions: [
      "Physics simulation implementation",
      "Interactive system builder",
      "Real-time light curve visualization",
    ],
    url: "https://exosim.netlify.app",
  },
  life: {
    title: "Life Percent Calculator",
    thumbnail: "/Code/lifepercent.mp4",
    description:
      "My first ever website! Shows a ticking estimate of the percentage of your life that has passed.",
    stack: ["HTML", "CSS", "JavaScript"],
    contributions: [
      "Date calculation algorithms",
      "Real-time UI updates",
      "Responsive design",
    ],
    url: "https://yourlifepercent.com",
  },
};

export type CodeSlug = keyof typeof CODE_PROJECTS;

export function isValidCodeSlug(slug: string): slug is CodeSlug {
  return slug in CODE_PROJECTS;
}

// Helper component for videos
export function CodeVideo({ src, load }: { src: string; load: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="size-56 flex-1">
      {inView && load ? (
        <video
          src={src}
          className="h-full max-h-64 grow-0"
          loop
          autoPlay
          muted
          playsInline
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          controls={false}
        />
      ) : (
        <div className="object-cover" />
      )}
    </div>
  );
}
