import Image from "../Util/blog-components/Image";
import Video from "../Util/blog-components/Video";
import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";

export default function Post21() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I spent a lot of this week learning new Houdini concepts (POPs, VOPs,
        DOPs, Solaris, materials, Karma). This meant a <i>lot</i> of tutorials.
      </p>
      <p>
        This was mostly with a goal in mind: an animation of spaghetti falling
        into a bowl, and eventually having my fork from last week interact with
        the spaghetti. I wanted to do the full end-to-end flow in Houdini,
        including rendering using their new-ish Karma raytracer.
      </p>
      <p>
        Here are some of the tutorials I went through (I didn't finish or follow
        all of them, but picked up a lot of concepts):
      </p>
      <div className="flex justify-center gap-2">
        <YoutubeEmbed
          videoId="3BX97YIQERE"
          title="Intro To Houdini Solaris - Full Beginner Course"
        />
        <YoutubeEmbed
          videoId="JS3rw7W1gN4"
          title="Houdini Tutorial: Abstract Particle Flow"
        />
        <YoutubeEmbed
          videoId="RyA7JboNTT0"
          title="Simple Rope Tool || Houdini Tutorial"
        />
      </div>
      <p>
        First up was placing and growing the spaghetti (treating them somewhat
        like hairs, which is what Houdini Vellum is specialized for).
      </p>
      <div className="flex items-start justify-center gap-8">
        <Image
          src="/Blog/spaghetti-grow-network.png"
          altText="Network of growing spaghetti"
        />
        <Image
          src="/Blog/spaghetti-grow.png"
          altText="Initial spaghetti strands"
        />
      </div>
      <p>
        Then, I made a Vellum simulation with gravity force and a bowl collider.
        Getting the parameters right for this is really hard, and I'm still not
        very happy with where it ended up (in the final video, you'll see the
        spaghetti wriggling around even after they should have settled into the
        bowl). But hey, it's a first shot. Either something with velocity
        damping or sleeping will probably help, I just haven't figured it out
        yet.
      </p>
      <div className="flex items-start justify-center gap-8">
        <Image
          src="/Blog/spaghetti-hair-network.png"
          altText="Vellum network for simulating spaghetti"
        />
        <Video
          size="large"
          url="/Blog/spaghetti-hair.mp4"
          caption="Video of simulated spaghetti falling into a bowl"
          preload
        />
      </div>
      <p>
        It's also pretty springy, maybe the strands have too much mass. More
        iteration to come!
      </p>
      <p>
        Finally, I worked on getting this to render by putting the scene into a
        LOP network/Solaris (still figuring out the difference). This involved
        adding lighting, a camera, and materials for the bowl and the pasta, as
        well as setting up render output and raytracing settings.
      </p>
      <div className="flex items-start justify-center gap-8">
        <Image
          src="/Blog/spaghetti-lop.png"
          altText="LOP network of render settings"
        />
        <Image
          src="/Blog/spaghetti-render-preview.png"
          altText="Render preview of spaghetti in bowl"
        />
      </div>
      <p>
        Finally, rendering 96 frames and combining them into an mp4 using ffmpeg
        yields my final progress for the week:
      </p>
      <div className="h-96 w-full">
        <Video
          url="/Blog/spaghetti-1.mp4"
          caption="Video of spaghetti falling into a bowl"
          size="large"
          preload
          loop
        />
      </div>
    </div>
  );
}
