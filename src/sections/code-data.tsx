/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export interface CodeProjectInfo {
  title: ReactNode;
  thumbnail: string;
  description: ReactNode;
  stack: string[];
  company?: "Benchling" | "Clark University MFA";
  contributions?: string[];
  url: string;
  Content: React.FC;
}

export const CODE_PROJECTS: Record<string, CodeProjectInfo> = {
  raytracer: {
    title: "C++ Raytracer",
    thumbnail: "/Code/raytracer.mp4",
    description:
      "A raytracer written from scratch in C++ with FBX import support, multiprocessing, and in-progress render previews.",
    stack: ["C++"],
    company: "Clark University MFA",
    url: "/blog",
    Content: RaytracerContent,
  },
  "analysis-tool": {
    title: "Analysis Tool",
    thumbnail: "/Code/analysis-tool.mp4",
    description:
      "A no-code data analysis platform for Benchling customers to transform and analyze data without writing SQL.",
    stack: [
      "React",
      "TypeScript",
      "Flask",
      "SQLAlchemy",
      "Postgres",
      "Redis",
      "S3",
    ],
    company: "Benchling",
    contributions: [
      "Tool to create datasets with checkboxes, building GraphQL queries",
      "Data transformation tools (aggregations, filters)",
      "Product scaffolding and architecture",
    ],
    url: "https://help.benchling.com/hc/en-us/articles/15322155422221-Creating-analysis-tables-from-a-Registry-schema",
    Content: AnalysisToolContent,
  },
  "entity-diagram": {
    title: "Database Diagram",
    thumbnail: "/Code/entity-diagram.mp4",
    description:
      "Interactive visualization tool to help Benchling customers understand their denormalized database schemas.",
    stack: ["React", "TypeScript"],
    company: "Benchling",
    contributions: [
      "Built interactive database schema visualization",
      "Schema relationship mapping",
      "Search and navigation features",
    ],
    url: "https://help.benchling.com/hc/en-us/articles/9684226168077-Search-for-schemas-to-use-in-Insights-queries#h_e8f23b880b",
    Content: EntityDiagramContent,
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
    Content: DownupContent,
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
    Content: ExosimContent,
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
    Content: LifeContent,
  },
};

export type CodeSlug = keyof typeof CODE_PROJECTS;

export function isValidCodeSlug(slug: string): slug is CodeSlug {
  return slug in CODE_PROJECTS;
}

// Content components for each project
function RaytracerContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        For my Graduate Seminar class at Clark University, I wrote a raytracer
        from scratch in C++. At first, it followed the well-known{" "}
        <a href="https://raytracing.github.io/">Ray Tracing in One Weekend</a>{" "}
        tutorials.
      </p>
      <p>
        Next, I augmented the raytracer with the ability to import and render
        FBX files, including materials, from a Blender export.
      </p>
      <p>
        I also implemented multiprocessing and a feature to preview in-progress
        renders.
      </p>
      <p>
        <a href="https://github.com/berkowitze/raytracer">
          View Code on GitHub
        </a>
      </p>
    </div>
  );
}

function AnalysisToolContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        I worked on a new analysis platform for Benchling customers to transform
        and analyze their data without having to write SQL. My work included:
      </p>
      <ul className="list-disc pl-6">
        <li>
          A tool to create datasets with only checkboxes, building up a GraphQL
          query under the hood which was then transformed to a dataset
        </li>
        <li>
          Tools for users to add transformations to their data, such as
          aggregations and filters
        </li>
        <li>Scaffolding for the product</li>
      </ul>
    </div>
  );
}

function EntityDiagramContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Benchling customers have their own denormalized database schemas that
        they can query with SQL using the Insights product. This tool helps them
        understand how their data is structured and interrelated.
      </p>
    </div>
  );
}

function DownupContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Hobby website for small communities to do goal-oriented challenges
        together. For example, a monthly pushup challenge where everyone chooses
        a number of pushups to do each day.
      </p>
      <p>
        Features SMS notifications via Twilio to keep participants engaged and
        accountable.
      </p>
    </div>
  );
}

function ExosimContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        A physics-based simulator for exoplanet systems. You can create your own
        system, and see a graph of the star's light intensity over time as
        planets pass in front of it.
      </p>
      <p>
        This project helped me understand orbital mechanics and light curve
        analysis.
      </p>
    </div>
  );
}

function LifeContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        My first ever website! Shows a ticking estimate of the percentage of
        your life that has passed based on your birthdate and life expectancy.
      </p>
      <p>A motivating reminder to make the most of every moment.</p>
    </div>
  );
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
