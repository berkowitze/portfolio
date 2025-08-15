export enum ArtKind {
  VIDEO,
  GALLERY,
  PHOTO,
}

export type SoftwareTitle =
  | "Houdini"
  | "Maya"
  | "Blender"
  | "Substance Painter";

export type ArtPiece = {
  title: string;
  id: string;
  software: Array<SoftwareTitle>;
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
    artKind: ArtKind.PHOTO,
    src: "/Art/teashop.jpg",
    id: "teashop",
    title: "Teashop",
    software: ["Maya"],
  },
  {
    artKind: ArtKind.VIDEO,
    id: "gumball",
    title: "Gumball Machine",
    src: "/Art/gumballs.mp4",
    loop: true,
    software: ["Maya"],
  },
  {
    artKind: ArtKind.GALLERY,
    title: "Bike",
    id: "bike",
    photos: ["/Blog/bike-base.jpeg", "/Blog/bike-rockets.jpeg"],
    software: ["Houdini", "Substance Painter", "Maya"],
  },
  {
    artKind: ArtKind.VIDEO,
    id: "bubbles",
    title: "Bubbles",
    src: "/Art/bubbles.mp4",
    loop: false,
    software: ["Maya"],
  },
  {
    artKind: ArtKind.PHOTO,
    id: "tree",
    title: "Tree",
    src: "/Art/tree.jpg",
    software: ["Maya"],
  },
  {
    artKind: ArtKind.VIDEO,
    id: "ladder",
    title: "Ladder",
    src: "/Art/ladder.mp4",
    loop: true,
    software: ["Houdini"],
  },
  {
    artKind: ArtKind.VIDEO,
    id: "lewis",
    title: "Lewis Chess King",
    src: "/Art/chess.mp4",
    loop: true,
    software: ["Maya"],
  },
  {
    artKind: ArtKind.GALLERY,
    id: "table",
    title: "Industrial Table",
    photos: ["/Art/table2.jpg", "/Art/table1.jpg", "/Art/table-anim.mp4"],
    software: ["Houdini"],
  },
  {
    artKind: ArtKind.PHOTO,
    id: "smores",
    src: "/Art/smores.jpg",
    title: "S'mores",
    software: ["Maya"],
  },
  {
    artKind: ArtKind.PHOTO,
    src: "/Art/plant.jpg",
    id: "plant",
    title: "Plant",
    software: ["Maya"],
  },
  {
    artKind: ArtKind.PHOTO,
    src: "/Art/headphones.jpg",
    id: "headphones",
    title: "Headphones",
    software: ["Maya"],
  },
  {
    artKind: ArtKind.GALLERY,
    id: "mushroom",
    title: "Mushroom House",
    photos: ["/Art/mushroom1.jpg", "/Art/mushroom2.jpg", "/Art/mushroom3.jpg"],
    software: ["Maya"],
  },
  {
    artKind: ArtKind.PHOTO,
    src: "/Art/puzzle.jpg",
    id: "puzzle",
    title: "Puzzle",
    software: ["Maya"],
  },

  {
    artKind: ArtKind.PHOTO,
    src: "/Art/teapot.jpg",
    id: "teapot",
    title: "Teapot",
    software: ["Maya"],
  },
  {
    artKind: ArtKind.PHOTO,
    src: "/Art/spoon.jpg",
    id: "spoon",
    title: "Spoon",
    software: ["Maya"],
  },
  {
    artKind: ArtKind.PHOTO,
    src: "/Art/sunglasses.jpg",
    id: "sunglasses",
    title: "Sunglasses",
    software: ["Maya"],
  },
  // {
  //   artKind: ArtKind.PHOTO,
  //   id: "paperclip",
  //   title: "Paperclip",
  //   src: "/Art/paperclip.jpg",
  // },
  {
    artKind: ArtKind.PHOTO,
    src: "/Art/snowman funeral.jpg",
    id: "snowman funeral",
    title: "Snowman funeral (primitives only)",
    software: ["Maya"],
  },
];
