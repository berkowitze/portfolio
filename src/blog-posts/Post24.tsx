import Image from "../Util/blog-components/Image";
import { UnorderedList } from "../Util/blog-components/Markup";
import Video from "../Util/blog-components/Video";

export default function Post14() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        This week, I prepared a few pieces for my portfolio, taking unrendered
        procedural models from my Procedural Art class and turning them into
        more finalized pieces (more tweaking in the future to come, of course).
        This was a great opportunity to learn some more Houdini animation and
        Redshift rendering techniques.
      </p>

      <p>
        I started with my ladder (which has parameters for number of rungs, fold
        angle, width, height, etc.):
      </p>
      <Image altText="Ladder in Houdini" src="/Blog/ladder-base.jpeg" />
      <p>
        I added a simple animation, lighting, and background, and rendered it
        using Redshift, using ffmpeg to combine it into an mp4:
      </p>
      <Video
        url="/Art/ladder.mp4"
        caption="Rendered ladder animation"
        loop
        fullWidth
        large
        autoPlay
      />
      <p>
        Next, I did the same process with my industrial table, starting with
        this procedural model (which has parameters for width, height, gear
        progress, etc.):
      </p>
      <Image
        altText="Industrial table in Houdini"
        src="/Blog/table-base.jpeg"
      />
      <p>
        After table & camera animation and adding some lighting and a basic
        material, this is resulting final render:
      </p>
      <Video
        url="/Art/table-anim.mp4"
        caption="Rendered table animation"
        autoPlay
        loop
        fullWidth
        large
      />
      <p>There's a few things I'll clean up on the next pass:</p>
      <UnorderedList>
        <li>
          More realistic "cast iron" material, which will require some actual
          texture maps.
        </li>
        <li>Better lighting</li>
        <li>
          Right now the handle clips through the tabletop for a few frames
        </li>
      </UnorderedList>
      <p>
        Finally, I started enhancing my bike assignment (parameters include
        number and diameter of front/back wheels; handlebar and seat styles;
        rotation of all parts; low/high poly modes; etc). It already has
        materials and a Redshift setup:
      </p>
      <Image large altText="Bike without rockets" src="/Blog/bike-base.jpeg" />
      <p>
        I added some rockets to the bike (a nice quick exercise in 3d modeling
        and texturing in Substance Painter), and started doing a rocket fire
        fluid sim in Houdini. This is my first pyro sim, so it's taking some
        time to get right, but here's my progress right now:
      </p>
      <Image
        large
        altText="Bike with rockets and a fire sim"
        src="/Blog/bike-rockets.jpeg"
      />
      <p>
        I used to do rocketry, so I'm kind of curious to take this a bit further
        - for example, I'd love to see what happens if I 3d model a simple
        nozzle and see how the fluid sim reacts to it.
      </p>
    </div>
  );
}
