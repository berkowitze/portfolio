import ClickableGallery from "../Util/blog-components/ClickableGallery";
import Image from "../Util/blog-components/Image";
import { Header2, OrderedList } from "../Util/blog-components/Markup";
import Video from "../Util/blog-components/Video";

export default function Post6() {
  return (
    <>
      <div>
        <Header2>Geometry nodes</Header2>I followed a few{" "}
        <a href="https://www.youtube.com/watch?v=DBDJQfLjVAk">Youtube videos</a>{" "}
        to create a procedural bookshelf. The videos only talked about creating
        a single shelf of untextured books; from there, I added a new node to
        create a vertically stacked bookshelf, and also handled giving random
        colors to each book's cover. I also reorganized significantly to use
        Repeat nodes rather than Simulation nodes, so that a shelf could be
        generated without having to play the timeline.
        <OrderedList>
          <li>
            The first step was procedurally creating a book.
            <ClickableGallery
              pathTemplate="/Blog/blender-bookshelf/book-node/step {}.jpeg"
              min={1}
              max={9}
            />
          </li>
          <li>
            Next, use a Repeat zone and some RNG to add multiple books into a
            single shelf. Once the books overflow the parameterized shelf width,
            stop adding new books.
            <ClickableGallery
              pathTemplate="/Blog/blender-bookshelf/shelf-node/step {}.jpeg"
              min={1}
              max={5}
            />
          </li>
          <li>
            Finally, use another Repeat zone to create a vertical stack of
            shelves and surrounding walls.
            <ClickableGallery
              pathTemplate="/Blog/blender-bookshelf/bookshelf-node/step {}.jpeg"
              min={1}
              max={5}
            />
          </li>
        </OrderedList>
        Final result:
        <Video
          url="/Blog/blender-bookshelf/bookshelf node.mp4"
          caption="Video of the bookshelf node in action"
          loop
          autoPlay
          large
        />
        <Header2>Raytracer</Header2>
        <p>
          <a href="https://github.com/berkowitze/raytracer">Code</a>
        </p>
        <OrderedList>
          <li>
            Starting point from{" "}
            <a href="/blog/seminar-project-milestone-one">last week</a>:{" "}
            <Image
              src="/Blog/raytracer/15 - book 1 done.png"
              altText="Image of a bunch of spheres with a big reflective metal sphere in the middle"
            />
          </li>
          <li>
            Much of Book 2 is about textures. The first texture is a
            checkerboard texture, where the color of a point hit by a ray of
            light is determined by the global position of that point. With some
            scaling constant, if the coordinate is even, it is colored one way,
            and if it's odd, another way.
            <Image
              src="/Blog/raytracer/17 - checker texture.png"
              altText="Sphere scene where the ground is checkered green and white"
            />
          </li>
          <li>
            Image textures. Here, rather than the color relying on the global
            position of the intersection location, it depends on the{" "}
            <a href="https://en.wikipedia.org/wiki/UV_mapping">UV coordinate</a>{" "}
            of the hit surface. For a sphere (the only shape I have right now),
            the UV coordinate can be calculated as the latitude and longitude,
            normalized from 0 to 1.
            <br />
            The 2D UV coordinate can then be used to look up the pixel value in
            a loaded image. I use the{" "}
            <a href="https://github.com/nothings/stb/blob/master/stb_image.h">
              stb_image
            </a>{" "}
            package to load images, and{" "}
            <a href="https://topps.diku.dk/torbenm/maps.msp">
              Planet Map Generator
            </a>{" "}
            to get a globe image texture.
            <Image
              src="/Blog/raytracer/18 - image textures.png"
              altText="Two spheres with fantasy globe textures next to each other"
            />
          </li>
          <li>
            Perlin noise textures. While an image texture could work here, it
            wouldn't tile that well and is less fun than writing a perlin noise
            generator from scratch! I won't go into too many details (see{" "}
            <a href="https://github.com/berkowitze/raytracer/blob/main/perlin.h">
              the code
            </a>
            ), but perlin noise is essentially smoothed out white noise.
            <Image
              src="/Blog/raytracer/19 - perlin texture.png"
              altText="Sphere with a perlin noise texture"
            />
          </li>
          <li>
            Quads. Finally a shape besides a sphere! There are some edge cases
            quads have that spheres don't (in particular because they are
            infinitely thin), but otherwise quads were pretty easy to implement.
            <Image
              src="/Blog/raytracer/21 - quads.png"
              altText="Rendered image of six spaced out quads"
            />
          </li>
          <li>
            Emissive materials. So far, when a ray hits a surface, it never
            gains "energy" (it either stays the same brightness or gets dimmer).
            Emissive materials allow a surface to add light to a ray, making it
            appear like that surface is glowing.
            <Image
              src="/Blog/raytracer/23 - emissives.png"
              altText="Rendered image of a sphere being lit by red, blue, and white lights on each side"
            />
          </li>
          <li>
            Translation and rotation transformations. Rather than having to move
            or rotate every single vertex in a mesh to put it in a new location
            in space (which could cause distortions, require normals to be
            recomputed, etc), it is far more efficient to transform the rays in
            the opposite direction so that they are in the object's transformed
            coordinate space. Then the same ray-object intersection test as
            before can be used.
            <br />
            With rotation and translation, making the famous{" "}
            <a href="https://en.wikipedia.org/wiki/Cornell_box">
              Cornell Box
            </a>{" "}
            is now possible in my raytracer!
            <Image
              src="/Blog/raytracer/24 - cornell box.png"
              altText="Rendered image of spheres from a different angle than previously"
            />
          </li>
          <li>
            Throughout this week, I spent a while making two large improvements
            to my raytracer that aren't covered in the Ray Tracing books.
            <br />
            First, I worked on allowing multiprocessing of an image. This is
            managed by a{" "}
            <a href="https://github.com/berkowitze/raytracer/blob/main/multiprocess.py">
              Python script
            </a>{" "}
            that renders chunks of the final image, then combines them all into
            a single image once each chunk is complete. Depending on hardware,
            this can lead to a large speedup (for me it tends to be a 4-8x
            speedup).
            <br />
            Second, I worked on a{" "}
            <a href="https://github.com/berkowitze/raytracer/blob/main/preview.py">
              preview script
            </a>{" "}
            that shows the render as it progresses, filling in black for
            incomplete sections. The preview live-updates, making it easy to see
            the progress of a render and abort it if it's not going in the right
            direction.
            <Image
              src="/Blog/raytracer/25 - previewing.png"
              altText="Image of a partially complete rendered image"
            />
          </li>
          <li>
            Returning to the book, the next material added is a volumetric
            object. With a volumetric, rays of light pass some distance through
            the object before scattering in a random direction.
            <Image
              lazy
              src="https://raytracing.github.io/images/fig-2.10-ray-vol.jpg"
              altText="Image from raytracing book showing how volumetrics work"
              captionSrc="https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums"
            />
            <Image
              lazy
              src="/Blog/raytracer/26 - volumetrics.png"
              altText="Cornell box with boxes replaced with volumetric fogs of different colors"
            />
          </li>
          <li>
            Book 2 complete! Here is the final image, at 1000x1000 resolution
            and 10,000 samples per pixel. It took 6.5 hours to render.
            <img
              loading="lazy"
              src="/Blog/raytracer/27 - book 2 done.png"
              className="mx-auto mt-2 h-[600px] text-center"
              alt="Rendered image with cubes, spheres with noise and image textures, motion blur, a light source, global fog, and a subsurface sphere emulated with a dielectric sphere surrounding a volumetric."
            />
          </li>
        </OrderedList>
      </div>
    </>
  );
}
