import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import range from "../Util/range";

enum ArtKind {
  VIDEO,
  GALLERY,
  PHOTO,
}

type ArtPiece = {
  title: string;
  id: string;
} & (
  | {
      artKind: ArtKind.VIDEO;
      loop: boolean;
      src: string;
    }
  | {
      artKind: ArtKind.GALLERY;
      photos: ReadonlyArray<string>;
    }
  | {
      artKind: ArtKind.PHOTO;
      src: string;
    }
);

const ART_PIECES: ReadonlyArray<ArtPiece> = [
  {
    artKind: ArtKind.VIDEO,
    id: "bubbles",
    title: "Bubbles",
    src: "/Art/bubbles.mp4",
    loop: false,
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/teashop.jpg",
    id: "teashop",
    title: "Teashop",
  },
  {
    artKind: ArtKind.VIDEO,
    id: "lewis",
    title: "Lewis Chess King",
    src: "/Art/chess.mp4",
    loop: true,
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/plant.jpg",
    id: "plant",
    title: "Plant",
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/headphones.jpg",
    id: "headphones",
    title: "Headphones",
  },
  {
    artKind: ArtKind.GALLERY,
    id: "mushroom",
    title: "Mushroom House",
    photos: ["/Art/mushroom1.jpg", "/Art/mushroom2.jpg", "/Art/mushroom3.jpg"],
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/puzzle.jpg",
    id: "puzzle",
    title: "Puzzle",
  },
  {
    artKind: ArtKind.PHOTO,
    id: "tree",
    title: "Tree",
    src: "/Art/tree.jpg",
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/teapot.jpg",
    id: "teapot",
    title: "Teapot",
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/spoon.jpg",
    id: "spoon",
    title: "Spoon",
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/sunglasses.jpg",
    id: "sunglasses",
    title: "Sunglasses",
  },
  {
    artKind: ArtKind.PHOTO,
    id: "paperclip",
    title: "Paperclip",
    src: "/Art/paperclip.jpg",
  },
  {
    artKind: ArtKind.PHOTO,
    src: "Art/snowman funeral.jpg",
    id: "snowman funeral",
    title: "Snowman funeral - my first 3d model!",
  },
];

export default function Art() {
  const [fullScreenArtPiece, setFullScreenArtPiece] = useState<Extract<
    ArtPiece,
    { artKind: ArtKind.GALLERY | ArtKind.PHOTO }
  > | null>(null);

  return fullScreenArtPiece == null ? (
    <div className="mb-8 flex flex-wrap justify-between gap-8 gap-y-12">
      {ART_PIECES.map((artPiece) => (
        <div
          key={artPiece.id}
          className="h-[216px] shrink-0 grow-0 basis-[384px]"
        >
          {artPiece.artKind === ArtKind.VIDEO ? (
            <Video piece={artPiece} />
          ) : artPiece.artKind === ArtKind.GALLERY ? (
            <Gallery
              onFullScreen={() => {
                setFullScreenArtPiece(artPiece);
              }}
              piece={artPiece}
            />
          ) : artPiece.artKind === ArtKind.PHOTO ? (
            <div className="relative">
              <img
                onClick={() => {
                  setFullScreenArtPiece(artPiece);
                }}
                className="cursor-pointer object-cover"
                src={artPiece.src}
              />
              <div
                className={
                  "absolute inset-0 flex size-full cursor-pointer items-center justify-center bg-gradient-to-t from-gray-700/90  to-gray-700/10 text-5xl opacity-0 transition-opacity hover:opacity-100"
                }
                onClick={() => {
                  setFullScreenArtPiece(artPiece);
                }}
              >
                <span className="rounded-md bg-gray-200/20 px-1 font-bold text-white">
                  ⛶
                </span>
              </div>
            </div>
          ) : null}
          <div className="text-center">{artPiece.title}</div>
        </div>
      ))}
    </div>
  ) : fullScreenArtPiece.artKind === ArtKind.GALLERY ? (
    <Gallery
      onFullScreen={() => {
        setFullScreenArtPiece(null);
      }}
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
  onFullScreen,
  isFullScreen,
}: {
  piece: Extract<ArtPiece, { artKind: ArtKind.GALLERY }>;
  onFullScreen: () => void;
  isFullScreen?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div
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
          onFullScreen={onFullScreen}
        />
      </div>
    </>
  );
}

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
          {isPaused ? "⏵" : "⏸"}
        </div>
        <div
          onClick={onFullScreen}
          className="flex cursor-pointer select-none items-center text-xl transition-transform hover:scale-125"
        >
          ⛶
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
