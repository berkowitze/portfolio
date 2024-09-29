import Image from "../Util/blog-components/Image";
import { UnorderedList } from "../Util/blog-components/Markup";

export default function Post7() {
  return (
    <>
      <p>
        I skimmed through the final book in the Ray Tracing series,{" "}
        <a href="https://raytracing.github.io/books/RayTracingTheRestOfYourLife.html">
          <cite>Ray Tracing: The Rest of Your Life</cite>
        </a>
        . It's pretty math and statistics heavy, implementing importance
        sampling to attempt to reduce noise.
      </p>
      <br />
      <p>
        The general idea with the importance sampling is to favor sending rays
        towards light sources rather than in random directions. By itself, this
        would lead to samples being brighter than they should be since rays are
        too likely to hit a light source, so the bias introduced needs to be
        accounted for mathematically.
      </p>
      <br />
      <p>
        I was able to get most of the code working, but don't like the results
        for many of the scenes generated throughout the first two books, so I
        haven't merged the code into the main branch of my raytracer. Instead,
        it has its{" "}
        <a href="https://github.com/berkowitze/raytracer/tree/book-3">
          its own branch
        </a>
        .
      </p>
      <br />
      <p>
        However, the results for the Cornell Box are pretty good. Below are
        renders of the Cornell Box with only 100 samples, with the code from
        book 2 on the left, and after book 3 on the right. It's a huge
        improvement!
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <Image
          src="/Blog/raytracer/29 - book 3 cornell 100 samples.png"
          altText="Rendered Cornell box with 100 samples and a decent amount of noise"
        />
        <Image
          src="/Blog/raytracer/28 - book 2 cornell 100 samples.png"
          altText="Rendered Cornell box with less noise than previous image"
        />
      </div>
      <p>
        But below is the final scene from book 2 rendered with book 3 code.
        Despite being faster to render since less samples are required,
        everything (especially the subsurface scattering sphere) has become very
        desaturated and I'm not totally sure why.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <Image
          src="/Blog/raytracer/27 - book 2 done.png"
          altText="Book 2 final scene"
        />
        <Image
          src="/Blog/raytracer/30 - book 2 final image with book 3 code.png"
          altText="Book 2 final scene with book 3 code and desaturated subsurface sphere"
        />
      </div>
      <p>
        I did make some general performance improvements that I'll merge into
        the main branch at some point though.
      </p>
      <br />
      <p>
        The next thing I'll be working on for the Raytracer is importing an FBX
        file for rendering. This will entail a few steps:
        <UnorderedList>
          <li>Support rendering triangles</li>
          <li>Support rendering meshes</li>
          <li>Support rendering materials as defined in the FBX file</li>
        </UnorderedList>
        For the first two, I'm watching Youtube videos on how to import FBX in
        C++ (<a href="https://www.youtube.com/watch?v=oIKnBVP2Jgg">example</a>).
        For the last bullet, I'm starting to read the{" "}
        <a href="https://academysoftwarefoundation.github.io/OpenPBR/index.html">
          OpenPBR Whitepaper
        </a>
        . I definitely won't be implementing all of OpenPBR, but a small subset
        of it should be enough to do a rudimentary render of the bookstore with
        my raytracer.
      </p>
    </>
  );
}
