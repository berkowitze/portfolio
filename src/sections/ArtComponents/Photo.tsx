import { useRef } from "react";
import { ArtKind, type ArtPiece } from "../ArtPieces";
import { FULLSCREEN_ICON } from "../../constants";

export default function Photo({
  piece,
}: {
  piece: Extract<ArtPiece, { artKind: ArtKind.PHOTO }>;
}) {
  const ref = useRef<HTMLImageElement>(null);

  function handleFullScreen() {
    if (ref.current) {
      ref.current.requestFullscreen();
    }
  }

  return (
    <div className="relative">
      <img
        ref={ref}
        onClick={() => {
          if (!document.fullscreenElement) {
            handleFullScreen();
          }
        }}
        onDoubleClick={() => {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
        }}
        className="object-cover"
        src={piece.src}
      />
      <div
        className={
          "mouse-only-cover absolute inset-0 flex size-full cursor-pointer items-center justify-center bg-gradient-to-t  from-gray-700/90 to-gray-700/10 text-5xl opacity-0 transition-opacity"
        }
        onClick={() => {
          handleFullScreen();
        }}
      >
        <span className="rounded-md bg-gray-200/20 px-1 font-bold text-white">
          {FULLSCREEN_ICON}
        </span>
      </div>
    </div>
  );
}
