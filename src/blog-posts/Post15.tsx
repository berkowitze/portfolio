import { Header2, UnorderedList } from "../Util/blog-components/Markup";
import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";

export default function Post15() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        After making a C++ raytracer last semester, I'm ready to switch gears to
        something a bit more relevant to the gaming industry (or at least,{" "}
        <a href="https://www.youtube.com/watch?v=U8z-1Bqn4Rs&t=240s">
          relevant to those who don't have a 5090 GPU
        </a>
        ).
      </p>
      <p>
        My project for this semester will be split into two separate pieces.
        There's a chance to combine them, but it depends how far I get.
      </p>
      <Header2>Part 1: OpenGL or Vulkan Rasterizer and Game Engine</Header2>
      <p>
        I want to learn how to program GPUs this semester. It's a critical skill
        for game programming, and it's also up my alley with a combination of
        math and coding.
      </p>
      <p>
        I'm planning on following some tutorials to get going with writing a
        rasterizer. First, I'll write a software rasterizer so I can learn the
        concepts, following{" "}
        <a href="https://github.com/ssloy/tinyrenderer/wiki/Lesson-0:-getting-started">
          this tutorial
        </a>
        . This starts from first principles and does not use a GPU, meaning you
        need to understand the concepts rather than relying on hardware to do
        the work for you.
      </p>
      <p>
        After that, I'll write a GPU-accelerated rasterizer using either Vulkan
        or OpenGL. I found{" "}
        <a href="https://vkguide.dev/docs/new_vkguide/chapter_0">
          this tutorial
        </a>{" "}
        for doing so with Vulkan, but we'll see how it goes especially if I do
        it on my Macbook.
      </p>
      <p>
        Then, time permitting, I'll embed my rasterizer into a GUI and try to
        make a very simple game engine. I'll use{" "}
        <a href="https://github.com/nicbarker/clay">Clay</a> and{" "}
        <a href="https://www.raylib.com/">Raylib</a> as building blocks.
      </p>
      <p>
        Finally, if things go well, I'll make a very small demo scene in my own
        game engine. This will probably just be a scene with first person
        movement controls and some boxes.
      </p>
      <Header2>Part 2: Shaders</Header2>
      <p>
        Combining my interests in math, art, and coding, I want to make some
        shaders in Godot. I'll use these for my studio project, but I'm not
        counting this towards the studio courseload.
      </p>
      <p>Some shaders I want to make:</p>
      <UnorderedList>
        <li>Grenade explosion</li>
        <li>Healing effect</li>
        <li>Fire</li>
        <li>Water</li>
        <li>Ice</li>
        <li>Electricity</li>
        <li>Damage indicator</li>
      </UnorderedList>
      <p>Some videos I've found that I'll start from:</p>
      <div className="flex flex-col items-center justify-center gap-4">
        <YoutubeEmbed
          title="Welcome to Shaderland - An introduction to shaders in Godot"
          videoId="nyFzPaWAzeQ"
        />
        <YoutubeEmbed
          title="GODOT 4 - Magic Area - Heal and Positive VFX Tutorial"
          videoId="txARe_jotfE"
        />
        <YoutubeEmbed
          title="Stylized explosion using visual shader | Godot 3.5"
          videoId="E-i3sZSXNMU"
        />
      </div>
    </div>
  );
}
