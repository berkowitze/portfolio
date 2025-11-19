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
    thumbnail: "/Games/ouro-logo.png",
    status: (
      <a href="https://nyan617.itch.io/ouroboros" target="_blank">
        Download on itch.io
      </a>
    ),
    contributions: [
      "Player and camera movement",
      "Weapon mechanics",
      "Upgrade system",
      "3D Props",
      "Bar and main menu UI/UX",
    ],
    tools: ["Godot", "C#", "Blender", "Substance Painter"],
    Content: OuroborosContent,
  },
  // elsewhere: {
  //   title: "Elsewhere Creatures",
  //   thumbnail: "/Games/Creatures/Creatures Logo.png",
  //   contributions: [
  //     "Built entire game from scratch",
  //     "Real-time multiplayer synchronization",
  //     "Game logic and card mechanics",
  //     "UI/UX design",
  //     "Database design and API development",
  //   ],
  //   tools: ["React", "PostgreSQL", "Colyseus"],
  //   Content: ElsewhereContent,
  // },
  cognitive: {
    title: "Cognitive",
    thumbnail: "/Games/Cognitive/Cognitive Logo.png",
    status: "In development",
    contributions: [
      "Lead developer, implementing all gameplay systems",
      "Producer, managing sprint planning and task allocation",
      "Developing pipelines to bring artists' assets into the game",
      "Mentoring people on the team in Unity and texturing development flows",
    ],
    tools: ["Unity", "C#", "Blender", "Substance Painter"],
    Content: CognitiveContent,
  },
};

function CognitiveContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        <b>Cognitive</b> is a 3D puzzle platformer set in a dystopian future. It
        is still in development as part of my Masters degree at Clark
        University.
      </p>
      <h3 className="underline">Contributions</h3>
      <p>
        <strong>Lead developer</strong>: I am in charge of all gameplay systems,
        including player movement, puzzle mechanics, interactions, cutscenes,
        UI/UX, and art pipelines.
      </p>
      <p>
        <strong>Producer</strong>: I manage the sprint planning and task
        allocation for the 8-person team.
      </p>
      <p>
        <strong>Mentoring</strong>: I mentor people on the team in use of Unity
        (setting up prefabs, materials, etc.) and texturing development flows
        using Substance Painter and Blender.
      </p>
      <div className="mx-2 flex flex-wrap justify-around gap-4">
        <GameImage src="/Games/Cognitive/Cognitive 01.png" />
        <GameImage src="/Games/Cognitive/Cognitive 02.png" />
        <GameImage src="/Games/Cognitive/Cognitive 03.png" />
        <GameImage src="/Games/Cognitive/Cognitive 04.png" />
        <GameImage src="/Games/Cognitive/Cognitive 05.png" />
        <GameImage src="/Games/Cognitive/Cognitive 06.png" />
      </div>
    </div>
  );
}

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
  return <img src={src} className="max-w-[400px]" />;
}

// Content components for each game
function OuroborosContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Set in a dark cyberpunk future, Ouroboros is a fast-paced roguelike
        shooter with a retro webcore style.
      </p>
      <p>It was built as part of a Game Studio course at Clark University.</p>
      <h3 className="underline">Contributions</h3>
      <p>
        <strong>Player and camera movement:</strong> I built the player and
        camera movement systems, including: WASD movement, crouching, dashing,
        jumping, wall slide/wall jump, and ground pound. I also added leniency
        mechanics like input buffering and coyote frames.
      </p>
      <p>
        <strong>Weapon mechanics:</strong> I built the weapon mechanics,
        including the ability to fire weapons and the ability to reload.
        Specific weapons I implemented were a "raycaster", katana, a shotgun, a
        grenade launcher, and a kunai. Each weapon has unique primary and
        secondary attacks.
      </p>
      <p>
        <b>Upgrade system:</b> Coworking with another student on the team, we
        built an upgrade system (bar drinks) with fun upgrades for each weapon
        and the player's stats. The upgrades can be purchased at the bar or at
        vending machines at the end of each level; I worked on the UI/UX for
        both of these.
      </p>
      <p>
        <b>Gameplay flow</b>: I worked on the overall flow of the game,
        including the main menu, tablet for viewing upgrades, player
        health/stamina/HUD, weapon swapping, item purchases, and more.
      </p>
      <div className="flex w-full justify-center">
        <YoutubeEmbed videoId="sPk8WOXO5pc" title="Trailer" size="large" />
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
    </div>
  );
}
