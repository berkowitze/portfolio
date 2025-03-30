import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import range from "../../Util/range";
import { FULLSCREEN_ICON } from "../../constants";
import { ArtKind, ArtPiece } from "../../sections/ArtPieces";
import { useInView } from "react-intersection-observer";

export default function Gallery({
  piece,
}: {
  piece: Extract<ArtPiece, { artKind: ArtKind.GALLERY }>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleFullScreen() {
    if (ref.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        ref.current.requestFullscreen();
      }
    }
  }

  const { ref: viewRef, inView } = useInView({ triggerOnce: true });

  return (
    <>
      <div
        ref={ref}
        onDoubleClick={handleFullScreen}
        className="relative size-full"
      >
        <div className="relative size-full" ref={viewRef}>
          {inView &&
            piece.photos.map((photo, index) =>
              photo.endsWith(".mp4") ? (
                <GalleryVideo active={index === currentIndex} src={photo} />
              ) : (
                <img
                  className={classNames(
                    "top-0 bottom-0 transition-opacity duration-1000 place-self-center absolute inset-0 max-h-full",
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  )}
                  key={photo}
                  src={photo}
                />
              )
            )}
        </div>
        <GalleryControls
          numPieces={piece.photos.length}
          currentIndex={currentIndex}
          onChangeCurrentIndex={setCurrentIndex}
          onFullScreen={handleFullScreen}
        />
      </div>
    </>
  );
}

function GalleryVideo({ active, src }: { active: boolean; src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (active) {
      ref.current?.play();
    }
  }, [active]);
  return (
    <video
      ref={ref}
      className={classNames(
        "top-0 bottom-0 transition-opacity duration-1000 place-self-center absolute inset-0 max-h-full",
        active ? "opacity-100" : "opacity-0"
      )}
      autoPlay
      loop
      key={src}
      src={src}
    />
  );
}

const PAUSE_ICON = <span>&#x23F8;&#xFE0E;</span>;
const PLAY_ICON = <span>&#x23F5;&#xFE0E;</span>;

function GalleryControls({
  numPieces,
  currentIndex,
  onChangeCurrentIndex,
  isFullScreen,
  onFullScreen,
}: {
  numPieces: number;
  currentIndex: number;
  onChangeCurrentIndex: (newIndex: number) => void;
  isFullScreen?: boolean;
  onFullScreen: () => void;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("animationiteration", () => {
        onChangeCurrentIndex((currentIndex + 1) % numPieces);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div
      className={classNames(
        !isFullScreen && "absolute bottom-0",
        "flex w-full flex-col"
      )}
    >
      <div className="mb-2 flex items-center gap-2 self-center rounded-md bg-gray-200/40 px-2 py-1">
        {range(numPieces).map((index) => (
          <div
            key={index}
            onClick={() => {
              onChangeCurrentIndex(index);
            }}
            className={classNames(
              "cursor-pointer size-3 shrink-0 grow-0 rounded-full border-gray-600 border transition-colors",
              index === currentIndex && "bg-my-blue/60"
            )}
          />
        ))}
        <div
          onClick={(e) => {
            setIsPaused(!isPaused);
            e.preventDefault();
          }}
          className="flex cursor-pointer select-none items-center justify-center text-xl transition-transform hover:scale-125"
        >
          {isPaused ? PLAY_ICON : PAUSE_ICON}
        </div>
        <div
          onClick={onFullScreen}
          className="hide-without-pointer flex cursor-pointer select-none items-center text-xl transition-transform hover:scale-125"
        >
          {FULLSCREEN_ICON}
        </div>
      </div>
      <div
        key={currentIndex}
        className={classNames("w-full h-[6px]", !isPaused && "gallery-slider")}
        ref={sliderRef}
      />
    </div>
  );
}
