import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";
import GameImage from "./GameImage";
import ItemDetailLayout from "../Util/ItemDetailLayout";
import Section from "./Section";

export default function Ouroboros() {
  return (
    <ItemDetailLayout>
      <Section isCollapsible={false}>
        <p className="text-lg">
          Set in a dark cyberpunk future, <strong>Ouroboros</strong> is a
          fast-paced roguelike shooter with a retro webcore style. It was built
          as part of a Game Studio course at Clark University.
        </p>
      </Section>

      <Section title="Contributions" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>Player and camera movement</li>
          <li>Weapon mechanics</li>
          <li>Upgrade system</li>
          <li>3D Props</li>
          <li>Bar and main menu UI/UX</li>
        </ul>
      </Section>

      <Section title="Player and Camera Movement">
        <p>
          I built the player and camera movement systems, including: WASD
          movement, crouching, dashing, jumping, wall slide/wall jump, and
          ground pound. I also added leniency mechanics like input buffering and
          coyote frames.
        </p>
      </Section>

      <Section title="Weapon Mechanics">
        <p>
          I built the weapon mechanics, including the ability to fire weapons
          and the ability to reload. Specific weapons I implemented were a
          "raycaster", katana, a shotgun, a grenade launcher, and a kunai. Each
          weapon has unique primary and secondary attacks.
        </p>
      </Section>

      <Section title="Upgrade System">
        <p>
          Coworking with another student on the team, we built an upgrade system
          (bar drinks) with fun upgrades for each weapon and the player's stats.
          The upgrades can be purchased at the bar or at vending machines at the
          end of each level; I worked on the UI/UX for both of these.
        </p>
      </Section>

      <Section title="Gameplay Flow">
        <p>
          I worked on the overall flow of the game, including the main menu,
          tablet for viewing upgrades, player health/stamina/HUD, weapon
          swapping, and item purchases.
        </p>
      </Section>

      <Section title="Trailer">
        <YoutubeEmbed
          center
          videoId="sPk8WOXO5pc"
          title="Trailer"
          size="large"
        />
      </Section>

      <Section title="Gallery">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "ouro-1.png",
            "ouro-2.png",
            "ouro-3.png",
            "ouro-4.png",
            "ouro-5.png",
            "ouro-6.png",
            "ouro-7.png",
            "ouro-8.png",
          ].map((img) => (
            <GameImage key={img} src={`/Games/${img}`} />
          ))}
        </div>
      </Section>
    </ItemDetailLayout>
  );
}
