import { useState } from "react";

interface GameInfo {
  id: string;
  borderColor: string;
  Content: React.ComponentType;
}

const GAMES: ReadonlyArray<GameInfo> = [
  {
    id: "ouro",
    borderColor: "border-my-red",
    Content: Ouroboros,
  },
  {
    id: "ew",
    borderColor: "border-my-red",
    Content: Elsewhere,
  },
  {
    id: "logger",
    borderColor: "border-my-red",
    Content: LoggerLasher,
  },
];

export default function Games() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {GAMES.map((game) => (
        <div key={game.id} className="">
          <div className={`border-l-2 ${game.borderColor} pl-2`}>
            <game.Content />
          </div>
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
}

function Ouroboros() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <h2 className="text-2xl font-bold">Ouroboros</h2>
      <div>
        <i>In progress</i>
      </div>
      <GameVideo src="/Games/ouroboros.mp4" autoplay />
      <p>
        A first-person rogue-like shooter with a focus on fast movement. I'm
        building this game with my studio group at Clark University as part of
        my Masters.
      </p>
      <div className="flex gap-2">
        <a href="https://drive.google.com/file/d/1ZsuYAtQDfuTU5nztH2XwTf_SyHrOcFin/view?usp=drive_link">
          <div className="flex w-full items-center gap-1">
            <img src="/windows-logo.png" className="size-4" />
            Download (Windows)
          </div>
        </a>
        <span className="mx-2">•</span>
        <a href="https://drive.google.com/file/d/1Z90QSXis96q8WgWkGxi4k6y3cV3_m98-/view?usp=drive_link">
          <div className="flex items-center gap-1">
            <img src="/mac-logo.png" className="size-4" />
            Download (Mac)
          </div>
        </a>
      </div>
      <a
        onClick={() => {
          setExpanded((prev) => !prev);
        }}
        className="cursor-pointer italic !text-black"
      >
        Show {expanded ? "less" : "more"}
      </a>
      {expanded && (
        <div className="mt-4 flex flex-col gap-2">
          <p>
            <b>Personal contributions:</b>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>Player and camera movement</li>
            <li>Weapon mechanics</li>
            <li>Upgrade system</li>
            <li>VFX</li>
            <li>3D Props</li>
            <li>UI/UX</li>
          </ul>
          <p>
            <b>Tools used:</b>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>Godot</li>
            <li>C#</li>
            <li>Blender</li>
            <li>Substance Painter</li>
          </ul>
          <div className="flex flex-wrap justify-around gap-4">
            <GameImage src="/Games/ouro-1.png" />
            <GameImage src="/Games/ouro-2.png" />
            <GameImage src="/Games/ouro-3.png" />
          </div>
        </div>
      )}
    </div>
  );
}

function Elsewhere() {
  return (
    <div>
      <img src="/Games/elsewhere-logo.png" className="h-12" />
      <span className="text-2xl font-bold">Elsewhere Creatures</span>
      <p>
        <i>Unreleased</i>
      </p>
      <p>
        I built a 2D multiplayer web-based card game for{" "}
        <a href="https://www.elsewhere.zone/">Elsewhere Communities</a> from
        scratch, as a contracting job over the course of several months.
      </p>
      <p>The game is still in progress and is unreleased.</p>
      <p>
        <b>Tools:</b>
      </p>
      <ul className="list-inside list-disc pl-4">
        <li>React</li>
        <li>PostgreSQL</li>
        <li>
          <a href="https://colyseus.io/" className="no-underline">
            Colyseus
          </a>
        </li>
      </ul>
    </div>
  );
}

function LoggerLasher() {
  return (
    <div>
      <div className="text-2xl font-bold">Logger Lasher</div>

      <GameVideo src="/Games/loggerlasher.mp4" />
      <p>
        My first ever video game! Built with Unity, with some assets created in
        Maya.
      </p>
      <p>
        <a href="https://logger-lasher.netlify.app/">Play online</a>
      </p>
    </div>
  );
}

function GameImage({ src }: { src: string }) {
  return <img src={src} className="max-w-[400px]" />;
}

function GameVideo({ src, autoplay }: { src: string; autoplay?: boolean }) {
  return (
    <div className="mb-2 flex justify-center">
      <video
        controls
        className="w-full max-w-[800px]"
        src={src}
        autoPlay={autoplay}
      />
    </div>
  );
}
