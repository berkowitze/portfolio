const CODE_PIECES = [
  {
    id: "downup",
    url: "https://downup.app",
    title: "Downup",
    description:
      "Hobby website for small communities to do goal-oriented challenges together.",
  },
];

type CodePiece = (typeof CODE_PIECES)[number];

export default function Code() {
  return (
    <div className="mb-8 flex flex-wrap justify-between gap-8 gap-y-12">
      Work in progress
      {CODE_PIECES.map((codePiece) => (
        <CodeProject key={codePiece.id} codePiece={codePiece} />
      ))}
    </div>
  );
}

function CodeProject({ codePiece }: { codePiece: CodePiece }) {
  return <div>{codePiece.title}</div>;
}
