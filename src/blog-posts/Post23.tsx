import Video from "../Util/blog-components/Video";
import Image from "../Util/blog-components/Image";

export default function Post23() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        This week I finished up the Patronus tutorial, adding a smoke
        simulation, rendering out the different effects with varying AOVs, and
        compositing everything together in Nuke for a final render!
      </p>
      <p>
        Despite only having an hour or so left in the tutorial, it took me way
        longer to implement everything. Not only did simulations and rendering
        take quite a while (4-6 hours in some cases), but I had to install
        Redshift and Nuke and learn them for the first time.
      </p>
      <p>
        The next step was running a smoke simulation around the stag to add some
        dramatic effect.
      </p>
      <Video
        preload
        loop
        url="/Blog/stag/outer-smoke.mp4"
        caption="Smoke swirling around the stag - playblast"
      />
      <p>
        There's also an additional smoke sim inside the stag to help reinforce
        its 3D shape but I won't show it here for brevity and because it's a
        very minor effect.
      </p>
      <p>
        After adding a simple camera animation, it's ready to start with the
        render process. After installing Redshift, I set up materials for the
        smoke and particles (using emission for the latter). Then I set up AOVs
        so that the different effects can be composited together in Nuke.
      </p>
      <p>Here are sample frames from the different render layers:</p>
      <div className="flex flex-wrap justify-center gap-2">
        <AOVImage
          src="/Blog/stag/render-passes/body_emission.jpg"
          layerName="Body Particles - Emission"
        />
        <AOVImage
          src="/Blog/stag/render-passes/body_gi.jpg"
          layerName="Body Particles - GI (Global Illumination)"
        />
        <AOVImage
          src="/Blog/stag/render-passes/body_reflection.jpg"
          layerName="Body Particles - Reflection"
        />
        <AOVImage
          src="/Blog/stag/render-passes/core_emission.jpg"
          layerName="Core Particles - Emission"
        />
        <AOVImage
          src="/Blog/stag/render-passes/body_smoke.jpg"
          layerName="Smoke"
        />
        <AOVImage
          src="/Blog/stag/render-passes/mesh_fresnel.jpg"
          layerName="Fresnel"
        />
        <AOVImage
          src="/Blog/stag/render-passes/body_ao.jpg"
          layerName="AO (Ambient Occlusion)"
        />
        <AOVImage src="/Blog/stag/render-passes/mesh_uv.jpg" layerName="UVs" />
      </div>
      <p>
        The fresnel, AO, and UV layers can be used to highlight one part of the
        stag more than the other. For example, combining the fresnel and body
        particle emission effects can make the rim of the stag more pronounced
        than the interior, making its shape somewhat more defined.
      </p>
      <p>
        Next up was compositing in Nuke. After a somewhat annoying install
        process, I got it up and running and started poking around. I won't go
        into too much detail, but here's the node network I ended up with:
      </p>
      <Image
        src="/Blog/stag/nuke-network.png"
        altText="Nuke node network"
        large
      />
      <p>
        Essentially, there's a lot of grade nodes to change color balances, as
        well as some nodes to add distortion, blur, glow, and noise by combining
        the different AOVs. And here is the result!
      </p>
      <Video
        preload
        fullWidth
        large
        loop
        url="/Blog/stag/final-render.mp4"
        caption="Final render of the stag with all effects composited together"
      />
      <p>
        This isn't perfect. If I were to improve it, I'd bring the camera
        closer, and make sure the core particles have a reflection AOV (they
        don't right now so they don't show up on the ground, oops). I'd also
        play with the colors. But since I made it by following a tutorial and
        won't be putting it on my portfolio, I'm not going to spend more time
        making these tweaks. Instead I'll move on to my next VFX effects next
        week.
      </p>
    </div>
  );
}

function AOVImage({ src, layerName }: { src: string; layerName: string }) {
  return (
    <div className="relative shrink-0 basis-96">
      <img
        className="object-cover"
        src={src}
        alt={layerName}
        title={layerName}
      />
      <div className="absolute bottom-1 left-1 text-sm text-white">
        {layerName}
      </div>
    </div>
  );
}
