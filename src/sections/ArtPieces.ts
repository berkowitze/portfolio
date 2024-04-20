export enum ArtKind {
  VIDEO,
  GALLERY,
  PHOTO,
}

export type ArtPiece = {
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

export const ART_PIECES: ReadonlyArray<ArtPiece> = [
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
