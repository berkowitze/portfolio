import { ART_PIECES } from "./sections/ArtPieces";
import { Piece } from "./sections/Art";
import PageLayout from "./Util/PageLayout";

export default function ArtPage() {
  return (
    <PageLayout title="Art">
      <div className="flex flex-wrap justify-around gap-8 gap-y-12">
        {ART_PIECES.map((artPiece) => (
          <Piece key={artPiece.id} artPiece={artPiece} className="" />
        ))}
      </div>
    </PageLayout>
  );
}
