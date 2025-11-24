import Video from "../Util/blog-components/Video";
import GameImage from "./GameImage";
import GamePage from "./GamePage";
import Section from "./Section";

export default function Cognitive() {
  return (
    <GamePage>
      {/* Hero / Intro */}
      <Section isCollapsible={false}>
        <p className="text-lg">
          <strong>Cognitive</strong> is a 3D puzzle-platformer set in a
          dystopian future, currently in active development as part of my
          Master's program at Clark University.
        </p>
      </Section>

      {/* Roles & Contributions */}
      <Section title="Roles & Contributions" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>Lead Developer: gameplay systems, tools, UI/UX, and pipelines</li>
          <li>Tools Programmer: writer/designer tooling, documentation</li>
          <li>
            Producer: sprint planning and task management for an 8-person team
          </li>
        </ul>
      </Section>

      {/* Dialog System */}
      <Section title="Dialog System">
        <p>
          I am developing a dialog system that enables writers and designers to
          quickly write, organize, and test dialog lines in-engine. The system
          supports various triggers types (entry/exit zones, item interactions)
          and includes prefab components and setup documentation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <GameImage src="/Games/Cognitive/Dialog Lines.png" />
            <p className="text-center text-sm">Dialog Lines Editor</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <GameImage src="/Games/Cognitive/Dialog Documentation.png" />
            <p className="text-center text-sm">
              Writer and Designer Documentation
            </p>
          </div>
        </div>
      </Section>

      {/* Pickup and Breakable Objects */}
      <Section title="Pickup & Breakable Objects">
        <p>
          I am implementing systems for item pickups and breakable objects to
          support puzzle mechanics and environmental interactions. I wrote a
          custom tool script to facilitate setup for designers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Video
            url="/Games/Cognitive/pickup.mp4"
            preload
            size="small"
            caption="Pickup Objects"
          />
          <Video
            url="/Games/Cognitive/break.mp4"
            preload
            size="small"
            caption="Breakable Objects"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <GameImage src="/Games/Cognitive/Pickup Breakable Inspector.png" />
            <p className="text-center text-sm">Inspector Tools</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <GameImage src="/Games/Cognitive/Pickup documentation.png" />
            <p className="text-center text-sm">Pickup Setup Documentation</p>
          </div>
        </div>
      </Section>

      {/* Player Movement */}
      <Section title="Player Movement">
        <p>
          I am building a responsive movement system supporting WASD navigation,
          crouching, dashing, and double-jumping. This includes leniency
          mechanics such as coyote time and input buffering.
        </p>
        <Video
          url="/Games/Cognitive/movement.mp4"
          preload
          caption="Player Movement"
        />
      </Section>
      <Section title="UI/UX">
        <p>
          I built the UI/UX for the game, including the animated main and pause
          menus. The settings menu is a work in progress.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Video
            url="/Games/Cognitive/mainmenu.mp4"
            preload
            size="small"
            caption="Main Menu"
          />
          <Video
            url="/Games/Cognitive/pause.mp4"
            preload
            size="small"
            caption="Pause Menu"
          />
        </div>
      </Section>

      {/* Production Work */}
      <Section title="Production">
        <p>
          As producer, I coordinate sprint planning, task assignment, and
          regular check-ins with teammates. After experimenting with Linear, the
          team switched to Google Docs for planning due to familiarity and ease
          of use.
        </p>
        <div className="flex flex-col items-center gap-2">
          <GameImage src="/Games/Cognitive/Task List.png" />
          <p className="text-center text-sm">Team Task List</p>
        </div>
      </Section>

      {/* Gallery */}
      <Section title="Gallery">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Cognitive 01.png",
            "Cognitive 02.png",
            "Cognitive 03.png",
            "Cognitive 04.png",
            "Cognitive 05.png",
            "Cognitive 06.png",
          ].map((img) => (
            <GameImage key={img} src={`/Games/Cognitive/${img}`} />
          ))}
        </div>
      </Section>
    </GamePage>
  );
}
