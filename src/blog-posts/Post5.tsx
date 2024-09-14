import Image from "../Util/blog-components/Image";
import { OrderedList } from "../Util/blog-components/Markup";

export default function Post5() {
  return (
    <>
      <div>
        <p>
          <a href="https://github.com/berkowitze/raytracer">Code</a>
        </p>
        <p>
          I spent this week working on my C++ Raytracer. I finished the{" "}
          <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">
            Ray Tracing in One Weekend
          </a>{" "}
          book and moved on to{" "}
          <a href="https://raytracing.github.io/books/RayTracingTheNextWeek.html">
            Ray Tracing - The Next Week
          </a>
          .
        </p>
        <OrderedList>
          <li>
            Starting point:{" "}
            <Image
              src="/Blog/raytracer/07 - diffuse-good.png"
              altText="Rendered image of sphere with diffuse material"
            />
          </li>
          <li>
            Removing "shadow acne". When calculating where a ray intersects a
            surface, there is some floating point imprecision. So when the
            bounced ray finds its next intersection point, it might find the
            same surface as before since it's extremely close to it rather than
            exactly on it. The solution is to ignore ray intersections very
            close to the ray's origin.
            <Image
              src="/Blog/raytracer/08 - no acne.png"
              altText="Rendered image of sphere with diffuse material and no shadow acne"
            />
          </li>
          <li>
            True lambertian diffusion. Currently, the code for how light
            scatters when it hits the lambert surface is "any direction".
            However, it's more physically accurate to bias towards scattering
            light in the direction of the normal of the intersected surface.
            <Image
              src="/Blog/raytracer/09 - lambert.png"
              altText="Rendered image of sphere with proper lambertian diffusion"
            />
          </li>
          <li>
            Gamma correction. The material used so far should have a gray value
            of 50%, but it clearly looks much darker. That's because most image
            software expects pixel values to be gamma corrected, and right now
            my code does not gamma correct. I updated the code to do gamma
            correction to pixels before writing to the output.
            <Image
              src="/Blog/raytracer/10 - gamma.png"
              altText="Rendered image of sphere with gamma correction"
            />
          </li>
          <li>
            Metal material. While the lambert material diffuses light in mostly
            random directions, metals are far more likely to reflect light. I
            implemented a metal material which also supports "fuzziness", which
            impacts how mathematically pure the reflection is, with 0 being a
            full mirror and 1 being a fully diffuse metal. See{" "}
            <a href="https://raytracing.github.io/images/fig-1.16-reflect-fuzzy.jpg">
              this diagram
            </a>
            .
            <Image
              src="/Blog/raytracer/11 - metal.png"
              altText="Rendered image of diffuse sphere, fully reflective metal sphere, and slightly fuzzy metal sphere"
            />
          </li>
          <li>
            Dielectric material. Dielectric materials, such as glass and water,
            cause incoming light to both reflect and transmit while refracting
            according to Snell's Law. I won't go into too much detail about it
            here - see the{" "}
            <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics">
              relevant chapter of the book
            </a>{" "}
            for a good explanation. I will note one of my favorite parts of
            material shading is covered in this chapter, which is the{" "}
            <a href="https://www.google.com/search?q=fresnel+effect">
              fresnel effect
            </a>
            . In this raytracer, it's approximated using the{" "}
            <a href="https://en.wikipedia.org/wiki/Schlick%27s_approximation">
              Schlick Approximation
            </a>
            .
            <Image
              src="/Blog/raytracer/12 - dielectric.png"
              altText="Rendered image of a glass sphere and a water sphere next to a diffuse sphere"
            />
          </li>
          <li>
            Readjustable camera location. So far, every image has been rendered
            with the camera at the origin, looking towards z=-1. Some extra math
            and logic allows for positioning the camera anywhere and looking
            towards any point.
            <Image
              src="/Blog/raytracer/13 - moveable camera.png"
              altText="Rendered image of spheres from a different angle than previously"
            />
          </li>
          <li>
            Depth of field. So far, all rays for a pixel have been cast from the
            same point. This gives the output images perfect sharpness. However,
            to emulate how the lens in a camera works and get a depth of field
            blurring effect, rays can be cast from slightly different locations.
            <Image
              src="/Blog/raytracer/14 - depth of field.png"
              altText="Image of 3 spheres, with one in focus and the others blurred due to depth of field"
            />
          </li>
          <li>
            To close out the "Raytracing in One Weekend" book, I created a scene
            with a bunch of spheres with randomly generated positions, radii,
            and materials. With a big reflective metal sphere in the middle of
            the sphere, it's pretty satisfying to see! I cranked up the render
            settings and generated a 1920x1080 image.
            <Image
              large
              src="/Blog/raytracer/15 - book 1 done.png"
              altText="Image of a bunch of spheres with a big reflective metal sphere in the middle"
            />
          </li>
          <li>
            The first part of the next book,{" "}
            <a href="https://raytracing.github.io/books/RayTracingTheNextWeek.html">
              <cite>Ray Tracing: The Next Week</cite>
            </a>
            , is implementing motion blur. The approach taken in this book is to
            have each sample cast out at a slightly different time, and have
            each object move over time. The result is that you get blurry
            spheres since each sample sees the sphere in a slightly different
            location, then all samples are averaged together.
            <Image
              src="/Blog/raytracer/16 - motion blur.png"
              altText="Image of spheres some of which have motion blur"
            />
          </li>
          <li>
            <p>
              BVH. The performance of the raytracer is pretty awful right now.
              For a 400x225 image with 75 samples per pixel and a maximum bounce
              depth of 30, the sphere scene takes 7 minutes and 40 seconds to
              render.
            </p>
            <p>
              The reason for this bad performance is largely due to each ray
              having to check every single sphere in the scene for a collision.
              There are a few hundred spheres, and the collision check requires
              some square roots and the like. This adds up across the hundreds
              of millions of ray traversals.
            </p>
            <p>
              The solution is to use a BVH - I highly recommend{" "}
              <a href="https://www.youtube.com/clip/UgkxjqJcMcP2htOeSIKfB5g8fkhhX0mFEDIU">
                this video
              </a>{" "}
              for a wonderful visualization and explanation!
            </p>
            <p>
              With this optimization, the same scene takes 1 minute 56 seconds
              to render, a 4x improvement!
            </p>
          </li>
        </OrderedList>
      </div>
    </>
  );
}
