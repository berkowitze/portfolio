import { UnorderedList } from "../Util/blog-components/Markup";
import Video from "../Util/blog-components/Video";

export default function Post25() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        This week I started a{" "}
        <a href="https://www.udemy.com/course/unreal-engine-fx/">
          Udemy course
        </a>{" "}
        on Niagara VFX in Unreal Engine. The course starts off talking about the
        basics of particle systems. The first lesson resulted in this "rocket"
        effect:
      </p>
      <Video
        url="/Blog/niagara-rocket.mp4"
        size="large"
        autoPlay
        caption="A rocket effect created in Unreal Engine using Niagara VFX"
      />
      <p>
        After that I wanted to apply the knowledge, so I made a simple fireworks
        effect:
      </p>
      <Video
        url="/Blog/niagara-fireworks.mp4"
        size="large"
        autoPlay
        caption="A fireworks effect created in Unreal Engine using Niagara VFX"
      />
      <p>
        It's not perfect but it's a good start to something I'd put on my
        portfolio. Todos are:
      </p>
      <UnorderedList>
        <li>Smoke trail effect</li>
        <li>
          Each firework has preset colors and shapes, and variation within a
          small amount from those baselines
        </li>
        <li>
          Make the firework rocket shape more interesting (just an oval right
          now)
        </li>
        <li>Hook emission up to gameplay logic</li>
      </UnorderedList>
      <p>
        That's all for now - it took a while to get Unreal set up and learn the
        fundamentals of Niagara, and I'm looking forward to doing more.
      </p>
    </div>
  );
}
