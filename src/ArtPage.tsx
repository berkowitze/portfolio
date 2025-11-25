import { ART_PIECES } from "./sections/ArtPieces";
import { Piece } from "./sections/Art";
import PageLayout from "./Util/PageLayout";

export default function ArtPage() {
  return (
    <PageLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Art</h2>
        <a href="/" target="_self" className="text-gray-500">
          Back
        </a>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap justify-around gap-8 gap-y-12">
        {ART_PIECES.map((artPiece) => (
          <Piece key={artPiece.id} artPiece={artPiece} className="" />
        ))}
      </div>
    </PageLayout>
  );
}
