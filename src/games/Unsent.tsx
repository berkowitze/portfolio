import Video from "../Util/blog-components/Video";
import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";
import GameImage from "./GameImage";
import Section from "./Section";

export default function Unsent() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <Section isCollapsible={false}>
        <p className="text-lg">
          <strong>Unsent</strong> is a wacky 3D platformer set in a labyrinthine
          1970s-inspired post office. It released in Steam Early Access in
          October 2025.
        </p>
      </Section>

      <Section title="Contributions" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>Collectible system rewrite, VFX, UI/UX</li>
          <li>Overhaul of HUD, shop, and menus UI/UX</li>
          <li>Player movement improvements</li>
          <li>Dialog improvements</li>
          <li>VFX for character movement, enemies, and environment</li>
        </ul>
      </Section>

      <Section title="Collectible System Rewrite">
        <p>
          Stamp collectibles are a core mechanic in Unsent. I rebuilt the system
          from the ground up, creating a documented, designer-friendly workflow
          for adding and configuring stamps.
        </p>
        <p>
          <strong>Stamp gates:</strong> Designed and implemented the gameplay
          logic and VFX for "stamp gates" that block progression until the
          player has collected enough stamps to pass.
        </p>
        <p>
          <strong>Stamp binder UI:</strong> Fully revamped the stamp binder,
          adding page navigation, zoom controls, and support for level-specific
          stamp pages.
        </p>
        <Video
          preload
          url="/Games/Unsent/Stamps.mp4"
          size="large"
          caption="Stamp system in action"
        />
        <div className="flex flex-col items-center gap-1">
          <GameImage src="/Games/Unsent/Stamp-Docs.png" />
          <p className="text-center text-sm">Stamp Documentation</p>
        </div>
      </Section>

      <Section title="HUD and Menu Overhaul">
        <p>
          I improved the navigation flow of the HUD, shop, main menu, and pause
          menu. I also fixed scaling issues across screen sizes, refined button
          states, and improved the overall UX for core game systems.
        </p>
        <Video
          preload
          url="/Games/Unsent/UI UX.mp4"
          size="large"
          caption="HUD and menu overhaul"
        />
      </Section>

      <Section title="Character Movement">
        <p>
          I added coyote frames, jump buffering, and improved the main
          character's drop shadow to make platforming feel more responsive and
          readable.
        </p>
        <Video
          preload
          url="/Games/Unsent/Movement.mp4"
          size="large"
          caption="Character movement"
        />
      </Section>

      <Section title="Launch Trailer">
        <YoutubeEmbed
          center
          size="large"
          videoId="8zvCqtlA7U4"
          title="Unsent Launch Trailer"
        />
      </Section>
    </div>
  );
}
