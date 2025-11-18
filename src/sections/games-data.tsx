/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from "react";
import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";
import Video from "../Util/blog-components/Video";

export interface GameInfo {
  title: ReactNode;
  thumbnail: string;
  contributions: string[];
  tools: string[];
  status?: string | JSX.Element;
  links?: { label: string; href: string }[];
  Content: React.FC;
}

export const GAMES: Record<string, GameInfo> = {
  unsent: {
    title: "Unsent",
    thumbnail: "/Games/Unsent/Unsent Logo.png",
    contributions: [
      "Collectible system rewrite, VFX, UI/UX",
      "Overhaul of HUD, shop, and menus UI/UX",
      "Player movement improvements",
      "Dialog improvements",
      "VFX for character movement, enemies, and environment",
    ],
    tools: ["Unreal Engine", "Blueprints", "C++", "Blender"],
    status: (
      <a
        href="https://store.steampowered.com/app/3621930/Unsent/"
        target="_blank"
      >
        Early Access on Steam
      </a>
    ),
    links: [
      {
        label: "Early Access on Steam",
        href: "https://store.steampowered.com/app/3621930/Unsent/",
      },
    ],
    Content: UnsentContent,
  },
  ouro: {
    title: "Ouroboros",
    thumbnail: "/Games/ouro-1.png",
    contributions: [
      "Player and camera movement",
      "Weapon mechanics",
      "Upgrade system",
      "VFX",
      "3D Props",
      "UI/UX",
    ],
    tools: ["Godot", "C#", "Blender", "Substance Painter"],
    links: [
      {
        label: "Download (Windows)",
        href: "https://drive.google.com/file/d/1ZsuYAtQDfuTU5nztH2XwTf_SyHrOcFin/view?usp=drive_link",
      },
      {
        label: "Download (Mac)",
        href: "https://drive.google.com/file/d/1Z90QSXis96q8WgWkGxi4k6y3cV3_m98-/view?usp=drive_link",
      },
    ],
    Content: OuroborosContent,
  },
  elsewhere: {
    title: "Elsewhere Creatures",
    thumbnail: "/Games/Creatures/Creatures Logo.png",
    contributions: [
      "Built entire game from scratch",
      "Real-time multiplayer synchronization",
      "Game logic and card mechanics",
      "UI/UX design",
      "Database design and API development",
    ],
    tools: ["React", "PostgreSQL", "Colyseus"],
    Content: ElsewhereContent,
  },
};

function UnsentContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        <b>Unsent</b> is a wacky 3D platformer set in a labyrinthine
        1970s-inspired post office. It released in Steam Early Access in October
        2025.
      </p>

      <h3 className="underline">Contributions</h3>

      <p>
        <strong>Collectible system rewrite:</strong> Stamp collectibles are a
        core mechanic in <em>Unsent</em>. I rebuilt the system from the ground
        up, creating a unified, designer-friendly workflow for adding and
        configuring stamps.
      </p>

      <p>
        <strong>Stamp gates:</strong> Designed and implemented the gameplay
        logic and VFX for "stamp gates" that block progression until the player
        has collected enough stamps to pass.
      </p>

      <p>
        <strong>Stamp binder UI:</strong> Fully revamped the stamp binder,
        adding page navigation, zoom controls, and support for level-specific
        stamp pages.
      </p>

      <Video
        preload
        url="/Games/Unsent/Stamps.mp4"
        large
        fullWidth={false}
        caption={false}
      />

      <p>
        <strong>HUD and menu overhaul:</strong> Improved the navigation flow of
        the HUD, shop, main menu, and pause menu. Fixed scaling issues across
        screen sizes, refined button states, and improved the overall UX for
        core game systems.
      </p>

      <Video
        preload
        url="/Games/Unsent/UI UX.mp4"
        large
        fullWidth={false}
        caption={false}
      />

      <p>
        <strong>Character movement polish:</strong> Added coyote frames, jump
        buffering, and improved the main character's drop shadow to make
        platforming feel more responsive and readable.
      </p>

      <YoutubeEmbed
        center
        size="large"
        videoId="8zvCqtlA7U4"
        title="Unsent Launch Trailer"
      />
    </div>
  );
}

export type GameSlug = keyof typeof GAMES;

export function isValidGameSlug(slug: string): slug is GameSlug {
  return slug in GAMES;
}

function GameImage({ src }: { src: string }) {
  return <img src={src} className="max-w-[600px]" />;
}

// Content components for each game
function OuroborosContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-center">
        <YoutubeEmbed videoId="sPk8WOXO5pc" title="Trailer" size="full" />
      </div>
      <div className="mx-2 flex flex-wrap justify-around gap-4">
        <GameImage src="/Games/ouro-1.png" />
        <GameImage src="/Games/ouro-2.png" />
        <GameImage src="/Games/ouro-3.png" />
        <GameImage src="/Games/ouro-4.png" />
        <GameImage src="/Games/ouro-5.png" />
        <GameImage src="/Games/ouro-6.png" />
        <GameImage src="/Games/ouro-7.png" />
        <GameImage src="/Games/ouro-8.png" />
      </div>
      <p>
        Ouroboros is a first-person rogue-like shooter with a focus on fast
        movement. I'm building this game with my studio group at Clark
        University as part of my Masters.
      </p>
    </div>
  );
}

function ElsewhereContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        I built a 2D multiplayer web-based card game for{" "}
        <a href="https://www.elsewhere.zone/">Elsewhere Communities</a> from
        scratch, as a contracting job over the course of several months.
      </p>
      <p>The game is still in progress and is unreleased.</p>
    </div>
  );
}
