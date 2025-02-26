import Image from "../Util/blog-components/Image";
import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";

export default function Post14() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I'm a bit burnt out on coding right now (with 2 coding classes + 2
        coding jobs), so I changed things up this week and didn't code much for
        seminar. Instead, I started learning about OpenGL by reading{" "}
        <a href="https://registry.khronos.org/OpenGL/specs/gl/glspec33.core.pdf">
          the spec
        </a>
        .
      </p>
      <p>
        After that, I wanted to switch to some quick modeling to try to get some
        motivation back, so I made a quick fork in Maya and added some dramatic
        lighting for an Arnold render.
      </p>
      <Image src="/Blog/fork.jpg" altText="Rendered image of a fork" large />
      <p>
        Next week I might use Houdini to make a simulation/animation of the fork
        moving through some spaghetti. I watched this Youtube video to start
        learning about Houdini particle systems.
      </p>
      <div className="flex justify-center">
        <YoutubeEmbed
          videoId="L2B6lGp7wBc"
          title="Houdini Tutorial | Noodle Simulation using Particle System"
        />
      </div>
    </div>
  );
}
