import Video from "../Util/blog-components/Video";
import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";

export default function Post22() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        This week I took a break from my spaghetti sim to follow this tutorial
        on making a Patronus effect:
      </p>
      <div className="flex justify-center">
        <YoutubeEmbed
          videoId="Su_wt3kmliI"
          title="Harry Potter Patronus Spell - Houdini & Nuke Tutorial"
        />
      </div>
      <p>
        It's a 2.5 hour video and goes <i>very</i> fast, so I didn't finish yet
        - that'll happen next week.
      </p>
      <p>Here's the progress thus far though.</p>
      <p>
        The tutorial starts by providing an Alembic file of a low-poly stag with
        a simple animation:
      </p>
      <Video
        preload
        loop
        url="/Blog/stag/stag-base.mp4"
        caption="Low-poly animation of a stag loaded into Houdini"
      />
      <p>
        The first step was to retopologize the stag to be higher res and uniform
        polygon sizing. This is best practice in VFX before doing effects, for
        consistency.
      </p>
      <p>
        There's some cool tricks here to get a robust mesh that deforms with
        animation properly. In particular, I learned more about VDBs, and
        learned the <code>xyzdist</code> and <code>uvprim</code> functions. This
        tutorial was extremely helpful for understanding these functions:
      </p>
      <div className="flex justify-center">
        <YoutubeEmbed
          videoId="ZPAeqtiDoqY"
          title="VFX Essentials - XYZDist & PrimUV Explained - Houdini Tutorial"
        />
      </div>
      <p>Here's the result:</p>
      <Video
        preload
        loop
        url="/Blog/stag/stag-retopo.mp4"
        caption="High-poly retopoligized animation of a stag loaded into Houdini"
      />
      <p>
        The nice thing is that this is fully procedural, meaning I can reuse the
        same exact network (with some small tweaks) if I want to swap out the
        stag for a different animal. For example, I'd love to replace it with an
        animation of a bearded dragon!
      </p>
      <p>
        The next step is running a particle simulation (using POP/VOP networks
        and a bunch of noise nodes). Again using the xyzdist/uvprim functions
        keeps the particles stuck to the stag's body. The below video isn't the
        final render, just a playblast:
      </p>
      <Video
        preload
        loop
        url="/Blog/stag/body-particles.mp4"
        caption="Particles swimming along the body of the stag - playblast"
      />
      <p>
        Next up, a smoke simulation contained in the center of the stag. This
        uses the pyro solver nodes in Houdini (another new tool for me):
      </p>
      <Video
        preload
        loop
        url="/Blog/stag/core-smoke.mp4"
        caption="Smoke simulation near the core of the stag - playblast"
      />
      <p>
        And finally for this week, a cool particle effect also for the interior
        of the stag. I messed up here and had 10x too many particles, leading to
        a 160GB cache directory and crashing Houdini, but eventually got it
        working!
      </p>
      <Video
        preload
        loop
        url="/Blog/stag/core-particles.mp4"
        caption="Particle simulation near the core of the stag - playblast"
      />
      <p>
        Next week, I'll finish up this project by adding some ambient smoke as a
        final particle effect, then rendering out the different effects to
        different output files and compositing them together in Nuke (a totally
        new program to me, but one covered in this same tutorial).
      </p>
    </div>
  );
}
