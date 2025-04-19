import Gallery from "../Util/art-components/Gallery";
import Photo from "../Util/art-components/Photo";
import { ART_PIECES, ArtKind, SoftwareTitle, type ArtPiece } from "./ArtPieces";
import { useInView } from "react-intersection-observer";

export default function Art() {
  return (
    <>
      {/* <div className="mb-2">
        Check out my{" "}
        <a href="https://artstation.com/eliberkowitz">Artstation</a>.
      </div> */}
      <div className="mb-8 flex flex-wrap justify-between gap-8 gap-y-12">
        {ART_PIECES.map((artPiece) => (
          <Piece key={artPiece.id} artPiece={artPiece} />
        ))}
      </div>
    </>
  );
}

function Piece({ artPiece }: { artPiece: ArtPiece }) {
  return (
    <div
      key={artPiece.id}
      className="group relative h-[216px] grow-0 basis-[384px]"
    >
      {artPiece.artKind === ArtKind.VIDEO ? (
        <Video piece={artPiece} />
      ) : artPiece.artKind === ArtKind.GALLERY ? (
        <Gallery piece={artPiece} />
      ) : artPiece.artKind === ArtKind.PHOTO ? (
        <Photo piece={artPiece} />
      ) : null}
      <div className="text-center">{artPiece.title}</div>
      <div className="absolute right-2 top-2 flex gap-2">
        {artPiece.software.map((software) => (
          <Software software={software} key={software} />
        ))}
      </div>
    </div>
  );
}

const SOFTWARE_TO_IMG: Record<SoftwareTitle, string> = {
  Houdini: "/houdini-logo.png",
  Maya: "/maya-logo.png",
  Blender: "/blender-logo.png",
  "Substance Painter": "/substance-painter-logo.png",
};

function Software({ software }: { software: SoftwareTitle }) {
  return (
    <img
      src={SOFTWARE_TO_IMG[software]}
      className="size-6 opacity-25 transition-opacity group-hover:opacity-75"
      alt={software}
    />
  );
}

function Video({
  piece,
}: {
  piece: Extract<ArtPiece, { artKind: ArtKind.VIDEO }>;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="relative object-cover">
      {inView && (
        <video
          ref={ref}
          onClick={(e) => {
            e.stopPropagation();
          }}
          muted
          preload="auto"
          autoPlay
          loop={piece.loop}
          controls
          controlsList=""
          src={`${piece.src}#t=0.000001`}
        />
      )}
    </div>
  );
}
