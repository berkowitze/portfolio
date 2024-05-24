import { useInView } from "react-intersection-observer";

const CODE_PIECES = [
  {
    id: "downup",
    url: "https://downup.app",
    title: "Downup",
    bgImg: "/Code/downup.gif",
    shortDescription: "Community pushup challenge site",
    description:
      "Hobby website for small communities to do goal-oriented challenges together.",
    stack: "Next.js, Twilio, Redis, Postgres",
  },
  {
    id: "logger-lasher",
    url: "https://logger-lasher.netlify.app",
    title: "Logger Lasher",
    bgImg: "/Code/loggerlasher.gif",
    shortDescription: "Keep the loggers away",
    description:
      "My first foray into game development. A simple game where you keep the loggers away from the tree.",
    stack: "React, TypeScript",
  },
  {
    id: "exosim",
    url: "https://exosim.netlify.app",
    title: "Exosim",
    bgImg: "/Code/exosim.gif",
    shortDescription: "Physics-based exoplanet simulator",
    description: "A physics-based simulator for exoplanet systems.",
    stack: "p5.js",
  },
  {
    id: "life",
    url: "https://yourlifepercent.com",
    title: "Life Percent Calculator",
    bgImg: "/Code/lifepercent.gif",
    shortDescription:
      "My first ever website! Shows a ticking estimate of the percentage of your life that has passed.",
    description: "A physics-based simulator for exoplanet systems.",
    stack: "HTML, CSS, JavaScript",
  },
];

type CodePiece = (typeof CODE_PIECES)[number];

export default function Code() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="flex flex-col gap-8">
      {CODE_PIECES.map((codePiece) => (
        <CodeProject
          key={codePiece.id}
          loadImg={inView}
          codePiece={codePiece}
        />
      ))}
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
    <div
      key={codePiece.id}
      className="grow basis-32 cursor-pointer rounded-[2px] border-l-2 border-my-blue/30 p-4 transition-colors duration-300 hover:border-my-blue hover:bg-gray-100"
    >
      <a
        href={codePiece.url}
        className="no-underline-ani flex items-center justify-between text-left backdrop-blur-[2px]"
      >
        <div>
          <h3 className="text-3xl font-bold text-black">{codePiece.title}</h3>
          <p className="text-black">{codePiece.shortDescription}</p>
          <p>Stack: {codePiece.stack}</p>
        </div>
        {loadImg ? (
          <img src={codePiece.bgImg} alt={codePiece.title} className="h-56" />
        ) : (
          <div className="h-56 bg-gray-300" />
        )}
      </a>
    </div>
  );
}
