import { ART_PIECES, ArtKind, type ArtPiece } from "./ArtPieces";
import Gallery from "./ArtComponents/Gallery";
import Photo from "./ArtComponents/Photo";

export default function Art() {
  return (
    <div className="mb-8 flex flex-wrap justify-between gap-8 gap-y-12">
      {ART_PIECES.map((artPiece) => (
        <Piece key={artPiece.id} artPiece={artPiece} />
      ))}
    </div>
  );
}

function Piece({ artPiece }: { artPiece: ArtPiece }) {
  return (
    <div key={artPiece.id} className="h-[216px] grow-0 basis-[384px]">
      {artPiece.artKind === ArtKind.VIDEO ? (
        <Video piece={artPiece} />
      ) : artPiece.artKind === ArtKind.GALLERY ? (
        <Gallery piece={artPiece} />
      ) : artPiece.artKind === ArtKind.PHOTO ? (
        <Photo piece={artPiece} />
      ) : null}
      <div className="text-center">{artPiece.title}</div>
    </div>
  );
}

function Video({
  piece,
}: {
  piece: Extract<ArtPiece, { artKind: ArtKind.VIDEO }>;
}) {
  return <video loop={piece.loop} controls src={piece.src} />;
}
