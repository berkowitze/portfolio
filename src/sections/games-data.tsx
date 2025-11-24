/* eslint-disable react-refresh/only-export-components */
import { lazy, ReactNode } from "react";

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
    Content: lazy(() => import("../games/Unsent")),
  },
  cognitive: {
    title: "Cognitive",
    thumbnail: "/Games/Cognitive/Cognitive Logo.png",
    status: (
      <p>
        In Development -{" "}
        <a href="https://eberkowitz.itch.io/cognitive" target="_blank">
          Download Demo on itch.io
        </a>
      </p>
    ),
    contributions: [
      "Lead developer, implementing all gameplay systems",
      "Producer, managing sprint planning and task allocation",
      "Developing pipelines to bring artists' assets into the game",
      "Mentoring people on the team in Unity and texturing development flows",
    ],
    tools: ["Unity", "C#", "Blender", "Substance Painter"],
    links: [
      {
        label: "Download on itch.io",
        href: "https://eberkowitz.itch.io/cognitive",
      },
    ],
    Content: lazy(() => import("../games/Cognitive")),
  },
  ouroboros: {
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
    Content: lazy(() => import("../games/Ouroboros")),
  },
};

export type GameSlug = keyof typeof GAMES;

export function isValidGameSlug(slug: string): slug is GameSlug {
  return slug in GAMES;
}
