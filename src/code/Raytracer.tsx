import { ReactNode } from "react";
import Image from "../Util/blog-components/Image";
import Video from "../Util/blog-components/Video";
import CodePage from "./CodePage";
import Section from "../games/Section";

function MediaGallery({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 flex flex-wrap justify-center gap-2">{children}</div>
  );
}

export default function Raytracer() {
  return (
    <CodePage>
      <Section isCollapsible={false}>
        <p className="text-lg">
          I wrote a C++ raytracer during my MFA at Clark University. I initially
          followed the{" "}
          <a
            href="https://raytracing.github.io/books/RayTracingInOneWeekend.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ray Tracing in One Weekend
          </a>{" "}
          series and then extended it with additional features (normal
          interpolation, vertex colors, HDRI lighting, GLTF import, etc.) in
          order to render a scene I modeled in Blender and exported as GLTF.
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/berkowitze/raytracer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>
      </Section>

      <Section title="Features" initiallyOpen>
        <ul className="flex list-inside list-disc flex-col gap-4">
          <li>
            Basic raytracing with sphere and quad primitives, antialiasing, and
            support for multiple primitives.
            <MediaGallery>
              <Image
                src="/Blog/raytracer/01 - gradient.png"
                altText="Gradient image rendered by my raytracer"
              />
              <Image
                src="/Blog/raytracer/02 - red sphere.png"
                altText="Solid red circle rendered by my raytracer"
              />
              <Image
                src="/Blog/raytracer/03 - normal sphere.png"
                altText="Sphere rendered with normal vectors as colors"
              />
              <Image
                src="/Blog/raytracer/04 - antialias.png"
                altText="Sphere rendered with antialiasing"
              />
              <Image
                src="/Blog/raytracer/05 - multisphere.png"
                altText="Rendered image of two spheres"
              />
              <Image
                src="/Blog/raytracer/21 - quads.png"
                altText="Rendered image of six spaced out quads"
              />
            </MediaGallery>
          </li>
          <li>
            Material support: diffuse (Lambertian), metallic (with fuzziness),
            dielectric (glass/water with Fresnel effect), volumetric, and
            emissive
            <MediaGallery>
              <Image
                src="/Blog/raytracer/07 - diffuse-good.png"
                altText="Two spheres with diffuse material"
              />
              <Image
                src="/Blog/raytracer/08 - no acne.png"
                altText="Rendered image of sphere with diffuse material and no shadow acne"
              />
              <Image
                src="/Blog/raytracer/09 - lambert.png"
                altText="Rendered image of sphere with proper lambertian diffusion"
              />
              <Image
                src="/Blog/raytracer/11 - metal.png"
                altText="Rendered image of diffuse sphere, fully reflective metal sphere, and slightly fuzzy metal sphere"
              />
              <Image
                src="/Blog/raytracer/12 - dielectric.png"
                altText="Rendered image of a glass sphere and a water sphere next to a diffuse sphere"
              />
              <Image
                src="/Blog/raytracer/23 - emissives.png"
                altText="Rendered image of a sphere being lit by red, blue, and white lights on each side"
              />
              <Image
                src="/Blog/raytracer/26 - volumetrics.png"
                altText="Cornell box with boxes replaced with volumetric fogs of different colors"
              />
            </MediaGallery>
          </li>
          <li>
            Textures: checkerboard, image textures with UV mapping, and Perlin
            noise
            <MediaGallery>
              <Image
                src="/Blog/raytracer/17 - checker texture.png"
                altText="Sphere scene where the ground is checkered green and white"
              />
              <Image
                src="/Blog/raytracer/18 - image textures.png"
                altText="Two spheres with fantasy globe textures next to each other"
              />
              <Image
                src="/Blog/raytracer/19 - perlin texture.png"
                altText="Sphere with a perlin noise texture"
              />
            </MediaGallery>
          </li>
          <li>
            Camera features: adjustable position/orientation, depth of field,
            and motion blur
            <MediaGallery>
              <Image
                src="/Blog/raytracer/13 - moveable camera.png"
                altText="Rendered image of spheres from a different angle than previously"
              />
              <Image
                src="/Blog/raytracer/14 - depth of field.png"
                altText="Image of 3 spheres, with one in focus and the others blurred due to depth of field"
              />
              <Image
                src="/Blog/raytracer/16 - motion blur.png"
                altText="Image of spheres some of which have motion blur"
              />
            </MediaGallery>
          </li>
          <li>
            Triangle primitive and GLTF import support with materials, textures,
            and vertex colors
            <MediaGallery>
              <Image
                src="/Blog/raytracer/38 - uv texture.png"
                altText="Rendered image of a plane with a gradient"
              />
            </MediaGallery>
          </li>
          <li>
            Smooth shading via normal interpolation
            <MediaGallery>
              <Image
                src="/Blog/raytracer-final-progress/final-2.png"
                altText="Normal interpolation on snowman scene"
              />
            </MediaGallery>
          </li>
          <li>
            Alpha transparency
            <MediaGallery>
              <Image
                src="/Blog/raytracer-final-progress/final-3.png"
                altText="Alpha transparency on ice in snowman scene"
              />
            </MediaGallery>
          </li>
          <li>
            Directional and area lighting
            <MediaGallery>
              <Image
                src="/Blog/raytracer-final-progress/final-4.png"
                altText="Directional and area lighting"
              />
            </MediaGallery>
          </li>
          <li>
            HDRI environment lighting
            <MediaGallery>
              <Image
                src="/Blog/raytracer-final-progress/final-8.png"
                altText="HDRI environment lighting"
              />
            </MediaGallery>
          </li>
          <li>
            BVH (Bounding Volume Hierarchy) optimization for faster rendering
          </li>
          <li>
            Multiprocessing support for parallel rendering
            <MediaGallery>
              <Video
                preload
                url="/Code/raytracer.mp4"
                size="large"
                caption="Raytracer rendering demo"
              />
            </MediaGallery>
          </li>
          <li>Live preview rendering with web-based progress viewer</li>
          <li>
            Gamma correction and sRGB color correction
            <MediaGallery>
              <Image
                src="/Blog/raytracer/10 - gamma.png"
                altText="Rendered image of sphere with gamma correction"
              />
            </MediaGallery>
          </li>
          <li>
            Translation and rotation transformations
            <MediaGallery>
              <Image
                src="/Blog/raytracer/24 - cornell box.png"
                altText="Rendered Cornell box"
              />
            </MediaGallery>
          </li>
        </ul>
      </Section>

      <Section title="Final Scene">
        <p className="mt-4">
          The scene was modeled in Blender, exported as GLTF, and rendered with
          my raytracer. Here is a comparison of the renders in Blender vs my
          raytracer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="min-w-[300px] flex-1">
            <Image
              src="/Blog/Final Render - My Raytracer.png"
              altText="Final render of the reading nook, rendered with my raytracer"
              large
            />
            <p className="mt-2 text-center text-sm">My Raytracer</p>
          </div>
          <div className="min-w-[300px] flex-1">
            <Image
              src="/Blog/Final Render - Blender.png"
              altText="Final render of the reading nook, rendered with Blender"
              large
            />
            <p className="mt-2 text-center text-sm">Blender</p>
          </div>
        </div>
      </Section>
    </CodePage>
  );
}
