import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import range from "../Util/range";
import { ART_PIECES, ArtKind, type ArtPiece } from "./ArtPieces";

export default function Art() {
  const [fullScreenArtPiece, setFullScreenArtPiece] = useState<Extract<
    ArtPiece,
    { artKind: ArtKind.GALLERY | ArtKind.PHOTO }
  > | null>(null);

  return fullScreenArtPiece == null ? (
    <div className="mb-8 flex flex-wrap justify-between gap-8 gap-y-12">
      {ART_PIECES.map((artPiece) => (
        <Piece artPiece={artPiece} />
      ))}
    </div>
  ) : fullScreenArtPiece.artKind === ArtKind.GALLERY ? (
    <Gallery
      // onFullScreen={() => {
      //   setFullScreenArtPiece(null);
      // }}
      isFullScreen={true}
      piece={fullScreenArtPiece}
    />
  ) : fullScreenArtPiece.artKind === ArtKind.PHOTO ? (
    <FullScreenPhoto
      onClose={() => {
        setFullScreenArtPiece(null);
      }}
      artPiece={fullScreenArtPiece}
    />
  ) : null;
}

function Piece({ artPiece }: { artPiece: ArtPiece }) {
  const ref = useRef<HTMLImageElement>(null);

  function handleFullScreen() {
    if (ref.current) {
      ref.current.requestFullscreen();
    }
  }

  return (
    <div key={artPiece.id} className="h-[216px] grow-0 basis-[384px]">
      {artPiece.artKind === ArtKind.VIDEO ? (
        <Video piece={artPiece} />
      ) : artPiece.artKind === ArtKind.GALLERY ? (
        <Gallery
          // onFullScreen={() => {
          // setFullScreenArtPiece(artPiece);
          // handleFullScreen();
          // }}
          piece={artPiece}
        />
      ) : artPiece.artKind === ArtKind.PHOTO ? (
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
            src={artPiece.src}
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
      ) : null}
      <div className="text-center">{artPiece.title}</div>
    </div>
  );
}

function FullScreenPhoto({
  onClose,
  artPiece,
}: {
  onClose: () => void;
  artPiece: Extract<ArtPiece, { artKind: ArtKind.PHOTO }>;
}) {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    });
  }, [onClose]);

  return (
    <div className="relative flex size-full flex-col justify-center">
      <div className="absolute -left-3 -top-3">
        <button
          onClick={onClose}
          type="button"
          className="rounded-sm bg-my-blue/60 px-2 text-white transition-colors hover:bg-my-blue/80"
        >
          Back
        </button>
      </div>
      <img className="mx-auto max-h-full px-4 xl:px-12" src={artPiece.src} />
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

function Gallery({
  piece,
  isFullScreen,
}: {
  piece: Extract<ArtPiece, { artKind: ArtKind.GALLERY }>;
  isFullScreen?: boolean;
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

  return (
    <>
      <div
        ref={ref}
        onDoubleClick={handleFullScreen}
        className={classNames(
          "relative size-full",
          isFullScreen && "flex flex-col gap-4"
        )}
      >
        <div className="relative size-full">
          {piece.photos.map((photo, index) => (
            <img
              className={classNames(
                "top-0 bottom-0 transition-opacity duration-1000 place-self-center absolute inset-0 max-h-full",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
              key={photo}
              src={photo}
            />
          ))}
        </div>
        <GalleryControls
          numPieces={piece.photos.length}
          currentIndex={currentIndex}
          onChangeCurrentIndex={setCurrentIndex}
          isFullScreen={isFullScreen}
          onFullScreen={handleFullScreen}
        />
      </div>
    </>
  );
}

const PAUSE_ICON = <span>&#x23F8;&#xFE0E;</span>;
const PLAY_ICON = <span>&#x23F8;&#xFE0E;</span>;
const FULLSCREEN_ICON = <span>&#x26f6;&#xFE0E;</span>;

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
