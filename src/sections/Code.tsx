import { useInView } from "react-intersection-observer";
import { Fragment } from "react/jsx-runtime";

interface CodePiece {
  id: string;
  url: string;
  title: string;
  video: string;
  description: string | JSX.Element;
  stack?: string;
  company?: "Benchling";
}

const CODE_PIECES: ReadonlyArray<CodePiece | "professional" | "hobby"> = [
  "hobby",
  {
    id: "downup",
    url: "https://downup.app",
    title: "Downup",
    video: "/Code/downup.mp4",
    description: (
      <span>
        Hobby website for small communities to do goal-oriented challenges
        together.
        <br />
        For example, a monthly pushup challenge where everyone chooses a number
        of pushups to do each day.
      </span>
    ),
    stack: "Next.js, Twilio, Redis, Postgres, Railway, Upstash",
  },
  {
    id: "logger-lasher",
    url: "https://logger-lasher.netlify.app",
    title: "Logger Lasher",
    video: "/Code/loggerlasher.mp4",
    description:
      "My first foray into game development. A simple game where you keep the loggers away from the tree. Click to play!",
    stack: "React, TypeScript",
  },
  {
    id: "exosim",
    url: "https://exosim.netlify.app",
    title: "Exosim",
    video: "/Code/exosim.mp4",
    description:
      "A physics-based simulator for exoplanet systems. You can create your own system, and see a graph of the star's light intensity over time as planets pass in front of it.",
    stack: "p5.js",
  },
  {
    id: "life",
    url: "https://yourlifepercent.com",
    title: "Life Percent Calculator",
    video: "/Code/lifepercent.mp4",
    description:
      "My first ever website! Shows a ticking estimate of the percentage of your life that has passed.",
    stack: "HTML, CSS, JavaScript",
  },
  "professional",
  {
    id: "analysis-tool",
    url: "https://help.benchling.com/hc/en-us/articles/15322155422221-Creating-analysis-tables-from-a-Registry-schema",
    title: "Analysis Tool",
    video: "/Code/analysis-tool.mp4",
    description: (
      <div>
        I worked on a new analysis platform for Benchling customers to transform
        and analyze their data without having to write SQL. My work included:
        <ul className="list-disc pl-6">
          <li>
            A tool to create datasets with only checkboxes, building up a
            GraphQL query under the hood which was then transformed to a dataset
          </li>
          <li>
            Tools for users to add transformations to their data, such as
            aggregations and filters
          </li>
          <li>Scaffolding for the product</li>
        </ul>
      </div>
    ),
    stack: "React, TypeScript, Flask, SQLAlchemy, Postgres, Redis, S3",
    company: "Benchling",
  },
  {
    id: "entity-diagram",
    url: "https://help.benchling.com/hc/en-us/articles/9684226168077-Search-for-schemas-to-use-in-Insights-queries#h_e8f23b880b",
    title: "Database Diagram",
    video: "/Code/entity-diagram.mp4",
    description:
      "Benchling customers have their own denormalized database schemas that they can query with SQL using the Insights product. This tool helps them understand how their data is structured and interrelated.",
    stack: "React, TypeScript",
    company: "Benchling",
  },
];

export default function Code() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="flex flex-col gap-8">
      {CODE_PIECES.map((codePiece, index) =>
        codePiece === "professional" || codePiece === "hobby" ? (
          <Fragment key={index}>
            {index > 0 && <hr />}
            <h2 className="text-3xl font-bold text-black">
              {codePiece === "professional"
                ? "Professional work"
                : "Hobby projects"}
            </h2>
          </Fragment>
        ) : (
          <CodeProject
            key={codePiece.id}
            loadImg={inView}
            codePiece={codePiece}
          />
        )
      )}
    </div>
  );
}

function CodeProject({
  codePiece,
  loadImg,
}: {
  codePiece: CodePiece;
  loadImg: boolean;
}) {
  return (
    <a
      key={codePiece.id}
      href={codePiece.url}
      className="no-underline-ani flex grow basis-32 cursor-pointer flex-wrap items-center justify-between gap-8 rounded-[2px] border-my-blue/30 p-4 text-left transition-colors duration-300 hover:border-my-blue hover:bg-gray-100 md:border-l-2"
    >
      <div className="grow basis-96 self-start">
        <h3 className="flex items-center gap-2 text-2xl font-bold text-black">
          {codePiece.company && `${codePiece.company} - `}
          {codePiece.title}
          {/* {codePiece.company && (
            <span className="rounded-full bg-my-blue px-2 py-1 text-sm text-white">
              
            </span>
          )} */}
          <span className="hide-with-pointer translate-y-0.5 text-lg text-my-blue">
            {" "}
            &#8599;
          </span>
        </h3>
        <div className="text-black">{codePiece.description}</div>
        {codePiece.stack && <p>Stack: {codePiece.stack}</p>}
      </div>
      {loadImg ? (
        <video
          src={codePiece.video}
          className="max-h-64 grow-0"
          loop
          autoPlay
          muted
          controls={false}
        />
      ) : (
        <div className="size-56 flex-1 bg-gray-300" />
      )}
    </a>
  );
}
