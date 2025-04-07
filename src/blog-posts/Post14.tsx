import { Header2, UnorderedList } from "../Util/blog-components/Markup";

export default function Post14() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        It's time to reflect on the last few months of work, take a look at what
        my goals were, which of them I've accomplished, what more there is to
        learn, and think about what I want to do next semester to further build
        my skills.
      </p>
      <Header2>Goals</Header2>
      <p>
        My project was split into two streams of work:
        <UnorderedList>
          <li>✅ 3D Model - model a scene in Maya and/or Blender</li>
          <UnorderedList>
            <li>⛔️ Use a distinctive art style, not necessarily realism.</li>
          </UnorderedList>
          <li>
            ✅ C++ Raytracer - render the above scene using a handwritten
            raytracer.
          </li>
          <UnorderedList>
            <li>✅ Diffuse and Specular reflections</li>
            <li>✅ Transmission and refraction</li>
            <li>✅ At least two different types of light source</li>
            <li>✅ Depth of field</li>
            <li>
              ✅ Use of textures and UVs for controlling these properties at an
              object level
            </li>
            <li>
              ✅ An easy way to render a scene exported from Maya or Blender -
              used GLTF
            </li>
            <li>
              ⚠️ Catmull Clark Smoothing. Implemented smooth-shading via normal
              interpolation instead.
            </li>
            <li>✅ BVH - Algorithmic speed improvement</li>
            <li>
              ⛔️ GPU raytracing instead of CPU raytracing - Hardware speed
              improvement
            </li>
          </UnorderedList>
        </UnorderedList>
      </p>
      <p>
        I'm really happy how many of the goals here I hit, and I also hit
        several more which I'll go into later. Regarding the ones I did not
        accomplish:
      </p>
      <UnorderedList>
        <li>
          <b>My final scene did not have a distinctive art style.</b>
          <br />
          The art side of my project took a backseat for much of the semester,
          and by the time I started focusing on it, I no longer really had time
          to develop a distinctive aesthetic.
          <br />
          Art taking a backseat was partially due to a lack of motivation, and
          partially due to me being sucked into the technical side of the
          project. This is a balance I have not yet figured out, and I don't
          really expect to (at least no time soon). Maybe I won't ever have to
          figure it out if I go down the "Technical Artist" career path.
          <br />
          However, I do want to put more explicit effort into the art side,
          because I enjoy it and want to get better at it. I'm hoping to take
          Procedural Art next semester will help me in that regard. I'm also
          considering auditing Environment Art.
        </li>
        <li>
          <b>GPU raytracing instead of CPU raytracing</b>
          <br />
          Switching to GPU raytracing would have required completely rewriting
          my entire raytracer, with very little of the algorithm remaining the
          same. I decided to prioritize raytracer features over speed, and so
          did not go down this path. It's something I'd consider doing next
          semester.
        </li>
      </UnorderedList>
      <p>
        In addition to my goals, I ended up implementing a lot of other features
        into the raytracer:
      </p>
      <UnorderedList>
        <li>Emissives</li>
        <li>Multiprocessing (speed improvement)</li>
        <li>
          A preview feature, which is a web server/page showing the current
          progress of the render
        </li>
        <li>HDRI lighting</li>
        <li>Vertex color attributes</li>
        <li>Alpha transparency</li>
        <li>Material roughness</li>
        <li>
          Several concepts from the Raytracer series that I didn't expect to get
          to
        </li>
      </UnorderedList>
      <p>
        Some things I want to learn about now that I've gone through this
        project:
      </p>
      <UnorderedList>
        <li>Generic material rendering, following the OpenPBR model</li>
        <li>
          Different raytracing approaches, like Global Illumination/Indirect
          Illumination, and forward path tracing for point lights.
        </li>
        <li>Shaders</li>
        <li>GPU Rasterization (alternative rendering technique)</li>
        <li>Importance sampling (a technique to speed up raytracing)</li>
      </UnorderedList>
      <p>
        So, what's up next semester? I haven't decided yet but here's some
        ideas:
      </p>
      <UnorderedList>
        <li>Become a Blender open-source contributor.</li>
        <li>
          Build a rasterizing renderer. I think it'd be really nice to work with
          code that runs in milliseconds rather than hours. And rasterization is
          way more relevant to video games, though I haven't fully decided
          between film art/programming and video game art/programming yet.
        </li>
        <li>Shaders/VFX deepdive.</li>
        <li>GPU raytracer using GI/II rather than tons of samples.</li>
        <li>Focus only on 3D modeling/art.</li>
      </UnorderedList>
    </div>
  );
}
