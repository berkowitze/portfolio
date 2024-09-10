import BlogPostLink from "../Util/blog-components/BlogPostLink";
import Image from "../Util/blog-components/Image";
import {
  Header2,
  OrderedList,
  UnorderedList,
} from "../Util/blog-components/Markup";

export default function Post4() {
  return (
    <>
      <div>
        <Header2>3D Modeling</Header2>
        <p>
          For the first week working on my{" "}
          <BlogPostLink slug="seminar-project" />, I did a bit of 3D modeling,
          making a bookshelf in Maya.
        </p>
        <Image
          src="/Blog/bookshelf.png"
          altText="Wireframe image of a 3D modeled bookshelf"
        />
        <p>
          Hand-placing books would probably look nicer but would be extremely
          tedious (to the point of being a waste of time for coursework) at the
          scale of a bookstore. So I next spent some time trying to figure out
          how to automate the process. Ideally, each book would have some
          randomized transformation, and eventually randomized textures so each
          looks unique.
        </p>
        <p>
          So I tried to take a book-shaped cube and populate it into the shelves
          of the bookcase, then add physics simulation so that they'd neatly
          fall into place.
        </p>
        <p>
          I tried several different approaches for this, and each failed (I'm
          sure it's possible I just couldn't figure it out).
        </p>
        <UnorderedList>
          <li>MASH network, with a Distribute node along a selection set</li>
          <li>
            MASH network, with a Distribute node using some sort of paint effect
          </li>
          <li>Bullet physics simulation (after duplicating the book a lot)</li>
          <li>nParticles simulation</li>
        </UnorderedList>
        <p>
          In each case, something bizarre happened with the simulation, or there
          was some distribution issue that made the books not populate in the
          right places, etc.
        </p>
        <p>
          I think it's a good excuse to just switch to Blender, though, where
          Geometry Nodes are seemingly a wonderful solution for this problem! So
          that'll be for next week. I'll probably start from scratch to get
          better at Blender modeling and also reduce the poly count.
        </p>
      </div>
      <br />
      <div>
        <Header2>Raytracer</Header2>
        <p>
          For the raytracer, I started going through the{" "}
          <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">
            Raytracer in a Weekend
          </a>{" "}
          book. I got through section 9.1, which feels great since it's my first
          ever C++ code.
        </p>
        <p>
          <a href="https://github.com/berkowitze/raytracer">Code</a>
        </p>
        <OrderedList>
          <li>
            Setup and rendering a placeholder image. A ray is cast for each
            pixel, from the origin towards the viewport (which in 3D space is a
            rectangle at z=-1). The color of that pixel is based on the
            y-coordinate of the ray direction, creating a vertical and
            horizontal gradient (since rays near the center are more y-dominated
            than rays near the edge).
            <Image
              src="/Blog/raytracer/01 - gradient.png"
              altText="Gradient image rendered by my raytracer"
            />
          </li>
          <li>
            Render a sphere by using a ray-sphere intersection formula. When a
            ray intersects the sphere, make the pixel red. Otherwise, use the
            same gradient as before.
            <Image
              src="/Blog/raytracer/02 - red sphere.png"
              altText="Solid red circle rendered by my raytracer"
            />
          </li>
          <li>
            Rather than making each pixel with an intersecting ray solid red,
            it's colored according to the normal vector of the point it
            intersects with. The normal is calculated by subtracting the ray
            intersection point from the sphere center, normalizing, and
            inverting this vector if the ray intersects the front face of the
            sphere, rather than the back face (if the ray comes from inside the
            sphere).
            <Image
              src="/Blog/raytracer/03 - normal sphere.png"
              altText="Sphere rendered with normal vectors as colors"
            />
          </li>
          <li>
            Since there's only one ray per pixel, that pixel is either a
            "sphere" pixel or a "background" pixel. This creates a stair effect
            (aliasing) at the edges of the sphere. To improve this, cast
            multiple rays per pixel in slightly different directions, and
            average together the results. The below is with 10 rays (samples)
            per pixel.
            <Image
              src="/Blog/raytracer/04 - antialias.png"
              altText="Sphere rendered with antialiasing"
            />
          </li>
          <li>
            A bunch of refactoring led to easily being able to add multiple
            spheres.
            <Image
              src="/Blog/raytracer/05 - multisphere.png"
              altText="Rendered image of two spheres"
            />
          </li>
          <li>
            Finally, I made the raytracer recursive. Rather than a ray hitting a
            sphere and stopping, it now bounces off of the sphere in a random
            direction away from the intersection point. It continues to do this
            until the ray doesn't intersect with anything, and therefore picks
            up the gradient color in the background. All the colors from these
            bounces are combined together into the final color for that sample.
            <Image
              src="/Blog/raytracer/06 - diffuse-bad.png"
              altText="Two spheres with diffuse material. Very noisy."
            />
          </li>
          <li>
            This has a lot of noise, which has various solutions, but the one I
            can easily tweak right now is number of samples. Here's the same
            scene with 1000 samples.
            <Image
              src="/Blog/raytracer/07 - diffuse-good.png"
              altText="Two spheres with diffuse material. Less noise than previous image."
            />
          </li>
        </OrderedList>
      </div>
    </>
  );
}
