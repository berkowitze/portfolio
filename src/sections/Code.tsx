const CODE_PIECES = [
  {
    id: "downup",
    url: "https://downup.app",
    title: "Downup",
    bgImg: "/Code/downup.png",
    shortDescription: "Community pushup challenge site",
    description:
      "Hobby website for small communities to do goal-oriented challenges together.",
  },
  {
    id: "exosim",
    url: "https://exosim.netlify.app",
    title: "Exosim",
    bgImg: "/Code/exosim.png",
    shortDescription: "Physics-based exoplanet simulator",
    description: "A physics-based simulator for exoplanet systems.",
  },
];

type CodePiece = (typeof CODE_PIECES)[number];

export default function Code() {
  return (
    <div className="flex flex-col gap-8">
      {CODE_PIECES.map((codePiece) => (
        <CodeProject key={codePiece.id} codePiece={codePiece} />
      ))}
    </div>
  );
}

function CodeProject({ codePiece }: { codePiece: CodePiece }) {
  return (
    <div
      key={codePiece.id}
      className="grow basis-32 cursor-pointer border-l-2 p-4 transition-colors hover:bg-gray-100"
    >
      {/* <img
        src={codePiece.bgImg}
        alt={codePiece.title}
        className="mx-auto h-full"
      /> */}
      <div className="flex items-center justify-between text-center text-3xl backdrop-blur-[2px]">
        <div>
          <h3 className="font-bold text-black">{codePiece.title}</h3>
          <p className="text-lg text-black">{codePiece.shortDescription}</p>
        </div>
        <img src={codePiece.bgImg} alt={codePiece.title} className="h-48" />
      </div>
    </div>
  );
}
