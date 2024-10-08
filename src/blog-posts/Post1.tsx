import Image from "../Util/blog-components/Image";
import YoutubeEmbed from "../Util/blog-components/YoutubeEmbed";
import Video from "../Util/blog-components/Video";
import {
  Header2,
  OrderedList,
  UnorderedList,
} from "../Util/blog-components/Markup";

export default function Post1() {
  return (
    <div>
      <p>
        For the Seminar class, I will work on a project that combines my art and
        programming interests. It will be split into two streams of work:
      </p>
      <OrderedList>
        <li>
          <b>3D Model</b> - Using Maya or Blender, model a 3D scene with a
          distinct art style, not necessarily realism.
        </li>
        <li>
          <b>Raytracer</b> - Using C++ or C#, write a raytracer to render the 3D
          scene created in (1).
        </li>
      </OrderedList>
      <Header2>3D Model</Header2>
      <p className="mb-4">
        The 3D scene I create should be simple enough that my raytracer can
        render it, though if this becomes too much of an issue I will divorce
        the two goals from each other and just render the scene using Maya or
        Blender's builtin raytracers.
      </p>
      <p>A few ideas that I have:</p>
      <UnorderedList>
        <li>
          <p>
            A maximalist bookstore with plush seating, tea, and puzzles strewn
            about. Somewhat similar to my Teashop project from my first Maya
            class. Use of vibrant colors and patterns.
          </p>
          <Image src="/Art/teashop.jpg" altText="Rendered image of a teashop" />
        </li>
        <li>
          <p className="mb-4">
            Turn the Puzzle project that I made in my first Maya class into a
            trippy 3d portal where you can go into the puzzle box and enter a
            world made of mushrooms. Use of darker tones and organic shapes.
          </p>
          <Image
            src="/Art/puzzle.jpg"
            altText="Rendered image of a puzzle box surrounded by puzzle pieces"
          />
        </li>
        <li>
          <p>
            A <a href="https://en.wikipedia.org/wiki/Sukkah">Sukkah</a>. Sukkahs
            are temporary shelters made by Jews during Sukkot, a fall harvest
            holiday. Their decorations can range from simple to maximal.
            <br />A Sukkah lit by string lights would be an interesting
            optimization challenge for the raytracer, where the number of light
            sources significantly impacts performance.
          </p>
          <div className="flex flex-wrap gap-8">
            <Image
              captionSrc="https://www.paulkipnes.com/do-it-in-the-sukkah-sukkah-activities/"
              altText="External image of a decorated Sukkah"
              src="https://www.ou.org/holidays/files/Sukkah-Decorations-e1470737398703.jpg"
            />
            <Image
              captionSrc="https://www.ou.org/holidays/decorations_of_the_sukkah_noy_sukkah/"
              altText="External image of a decorated Sukkah"
              src="https://www.paulkipnes.com/wp-content/uploads/o-SUKKAH-570.jpg"
            />
          </div>
        </li>
        <li>
          <p>
            A <a href="https://en.wikipedia.org/wiki/Synagogue">synagogue</a>.
            There are a lot of beautiful synagogues in the world, though one I'm
            particularly inspired by is Temple Beth Zion in Brookline MA (see
            images below).
            <br />A synagogue offers opportunities to model exterior and
            interior design, interesting lighting, organic modeling for flowers,
            cloth physics for the Torah, etc. It also is a good way to try to
            make a space have a "feeling" - my goal would be to create a joyful
            synagogue.
          </p>
          <Image
            src="https://www.tbzbrookline.org/wp-content/uploads/2020/10/12-We-are-TBZ.jpg"
            captionSrc="https://www.tbzbrookline.org/"
            altText="External image of the interior of Temple Beth Zion"
          />
          <Image
            src="https://cdn.jewishboston.com/uploads/2019/08/19274838-729x486.jpg"
            captionSrc="https://www.tbzbrookline.org/"
            altText="External image of the interior of Temple Beth Zion"
          />
          <Image
            src="/TBZ.png"
            captionSrc="https://www.youtube.com/watch?v=EzByNbfOD_4"
            altText="External image of the interior of Temple Beth Zion"
          />
        </li>
        <li>Several of these depending on how quickly they go!</li>
        <li>
          An animated version of one of these, also depending on how long that
          takes and if I can raytrace an animation.
        </li>
      </UnorderedList>
      An artist that I'm inspired by is Nina Klos. For example, here is one of
      her pieces:
      <Video
        url="https://cdn.artstation.com/p/video_sources/000/901/501/2022-08-07-11-38-55.mp4"
        caption={
          <a href="https://www.artstation.com/artwork/LeXmLk">
            Jellyfish Shrine by Nina Klos
          </a>
        }
        poster="https://cdnb.artstation.com/p/assets/images/images/052/460/763/large/nina-klos-1.jpg?1659867841"
      />
      <Header2>Raytracer</Header2>
      <p>Conceptual background videos that I found incredibly instructive:</p>
      <div className="my-1 flex flex-wrap justify-center gap-8">
        <YoutubeEmbed
          videoId="iOlehM5kNSk"
          size="small"
          title="How does Ray Tracing Work in Video Games and Movies?"
        />
        <YoutubeEmbed
          videoId="C8YtdC8mxTU"
          size="small"
          title="How do Video Game Graphics Work?"
        />
      </div>
      <p>Eventually, I want the raytracer to support:</p>
      <UnorderedList>
        <li>Diffuse and Specular reflections</li>
        <li>Transmission and refraction</li>
        <li>At least two different types of light source</li>
        <li>Depth of field</li>
        <li>
          Use of textures and UVs for controlling these properties at an object
          level
        </li>
        <li>
          An easy way to render a scene exported from Maya or Blender (exact
          format tbd)
        </li>
      </UnorderedList>
      <p>Major milestones:</p>
      <OrderedList>
        <li>
          I will start off by writing a simple CPU raytracer in C++, following
          the{" "}
          <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">
            Ray Tracing in One Weekend tutorial
          </a>
          . This should get me warmed up with the relevant math and algorithm
          concepts.
        </li>
        <li>
          Optimize the raytracer using a BVH, using the below Youtube video and{" "}
          <a href="https://jacco.ompf2.com/2022/04/18/how-to-build-a-bvh-part-2-faster-rays/">
            this article
          </a>{" "}
          as inspiration.
          <div className="mt-1 flex w-full justify-center">
            <YoutubeEmbed
              videoId="C1H4zIiCOaI"
              title="Coding Adventure: Optimizing a Ray Tracer (by building a BVH)"
            />
          </div>
        </li>
        <li>Implement raytracing scenes from Maya or Blender</li>
        <li>
          Explore GPU raytracing as an option, for example using{" "}
          <a href="https://jacco.ompf2.com/2022/06/03/how-to-build-a-bvh-part-9a-to-the-gpu/">
            this article
          </a>
          . Other resource on basic GLSL shading{" "}
          <a href="https://www.cs.princeton.edu/courses/archive/spring19/cos426/precepts/07-glsl.pdf">
            here
          </a>
          .
        </li>
      </OrderedList>
    </div>
  );
}
