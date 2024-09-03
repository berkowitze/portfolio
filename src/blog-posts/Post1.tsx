import { ReactNode } from "react";

function OrderedList({
  children,
}: {
  children: Array<ReactNode>;
}): JSX.Element {
  return <ol className="mb-4 ml-6 list-decimal sm:ml-10">{children}</ol>;
}

function UnorderedList({
  children,
}: {
  children: Array<ReactNode>;
}): JSX.Element {
  return <ul className="mb-4 ml-6 list-disc sm:ml-10">{children}</ul>;
}

function Header2({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 text-xl">{children}</h2>;
}

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
          <Image src="/Art/teashop.jpg" />
        </li>
        <li>
          <p className="mb-4">
            Turn the Puzzle project that I made in my first Maya class into a
            trippy 3d portal where you can go into the puzzle box and enter a
            world made of mushrooms. Use of darker tones and organic shapes.
          </p>
          <Image src="/Art/puzzle.jpg" />
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
          <Image
            caption={
              <a href="https://www.paulkipnes.com/do-it-in-the-sukkah-sukkah-activities/">
                Image source
              </a>
            }
            src="https://www.ou.org/holidays/files/Sukkah-Decorations-e1470737398703.jpg"
          />
          <Image
            caption={
              <a href="https://www.ou.org/holidays/decorations_of_the_sukkah_noy_sukkah/">
                Image source
              </a>
            }
            src="https://www.paulkipnes.com/wp-content/uploads/o-SUKKAH-570.jpg"
          />
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
            caption={<a href="https://www.tbzbrookline.org/">Image source</a>}
          />
          <Image
            src="https://cdn.jewishboston.com/uploads/2019/08/19274838-729x486.jpg"
            caption={<a href="https://www.tbzbrookline.org/">Image source</a>}
          />
          <Image
            src="/TBZ.png"
            caption={
              <a href="https://www.youtube.com/watch?v=EzByNbfOD_4">
                Image source
              </a>
            }
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
      />
      <Header2>Raytracer</Header2>
      <p>Conceptual background videos that I found incredibly instructive:</p>
      <div className="my-1 flex flex-wrap justify-center gap-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iOlehM5kNSk?si=3O9D8Pdmyfddoz8E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C8YtdC8mxTU?si=YL4KV_dcgCj9SUHM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/C1H4zIiCOaI?si=VACMn-rjX1MRmWTJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
        <p></p>
      </OrderedList>
    </div>
  );
}

function Image({ src, caption }: { src: string; caption?: ReactNode }) {
  return (
    <div className="mb-4 flex w-full flex-col gap-1">
      <div className="flex w-full justify-center">
        <img className="w-full max-w-[400px]" src={src} />
      </div>
      {caption && (
        <div className="text-center text-sm">
          <a href={src}>Image source</a>
        </div>
      )}
    </div>
  );
}

function Video({ url, caption }: { url: string; caption: ReactNode }) {
  return (
    <div className="mb-4 flex w-full justify-center text-center">
      <div className="flex flex-col gap-1">
        <video src={url} className="w-full max-w-[400px]" controls autoPlay />
        <div className="text-sm">{caption}</div>
      </div>
    </div>
  );
}
