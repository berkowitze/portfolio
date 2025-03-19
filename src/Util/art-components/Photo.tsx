import { useRef } from "react";
import { FULLSCREEN_ICON } from "../../constants";
import { ArtKind, ArtPiece } from "../../sections/ArtPieces";
import { useInView } from "react-intersection-observer";

export default function Photo({
  piece,
}: {
  piece: Extract<ArtPiece, { artKind: ArtKind.PHOTO }>;
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  function handleFullScreen() {
    if (imgRef.current) {
      imgRef.current.requestFullscreen();
    }
  }

  return (
    <div className="relative" ref={inViewRef}>
      {inView && (
        <img
          ref={imgRef}
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
      )}
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
