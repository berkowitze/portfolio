import Image from "../Util/blog-components/Image";
import Video from "../Util/blog-components/Video";
import ClickableGallery from "../Util/blog-components/ClickableGallery";
import CodePage from "./CodePage";
import Section from "../games/Section";

export default function Raytracer() {
  return (
    <CodePage>
      <Section isCollapsible={false}>
        <p className="text-lg">
          <strong>C++ Raytracer</strong> is a raytracer written in C++ during my MFA at Clark University. 
          I followed the <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html" target="_blank" rel="noopener noreferrer">Ray Tracing in One Weekend</a> series 
          and extended it with additional features including GLTF import, multiprocessing, and live preview rendering.
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/berkowitze/raytracer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            View on GitHub →
          </a>
        </p>
      </Section>

      <Section title="Features" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>Basic raytracing with sphere and quad primitives</li>
          <li>Material support: diffuse (Lambertian), metallic (with fuzziness), dielectric (glass/water with Fresnel effect), volumetric, and emissive</li>
          <li>Textures: checkerboard, image textures with UV mapping, and Perlin noise</li>
          <li>Camera features: adjustable position/orientation, depth of field, and motion blur</li>
          <li>GLTF/glTF import support with materials, textures, and vertex colors</li>
          <li>Smooth shading via normal interpolation</li>
          <li>Alpha transparency</li>
          <li>Directional and area lighting</li>
          <li>HDRI environment lighting</li>
          <li>BVH (Bounding Volume Hierarchy) optimization for faster rendering</li>
          <li>Multiprocessing support for parallel rendering</li>
          <li>Live preview rendering with web-based progress viewer</li>
          <li>Gamma correction and sRGB color correction</li>
          <li>Translation and rotation transformations</li>
        </ul>
      </Section>

      <Section title="Development Progress">
        <p>
          The raytracer was developed over the course of a semester, starting with basic sphere rendering 
          and gradually adding more advanced features. Here's a gallery showing the progression:
        </p>
        <ClickableGallery
          min={1}
          max={10}
          pathTemplate="/Blog/raytracer-final-progress/final-{}.png"
        />
      </Section>

      <Section title="Early Development">
        <p>Starting from the basics - gradient rendering, sphere intersection, normal mapping, antialiasing, and diffuse materials:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image src="/Blog/raytracer/01 - gradient.png" altText="Gradient image rendered by my raytracer" />
          <Image src="/Blog/raytracer/02 - red sphere.png" altText="Solid red circle rendered by my raytracer" />
          <Image src="/Blog/raytracer/03 - normal sphere.png" altText="Sphere rendered with normal vectors as colors" />
          <Image src="/Blog/raytracer/04 - antialias.png" altText="Sphere rendered with antialiasing" />
          <Image src="/Blog/raytracer/07 - diffuse-good.png" altText="Two spheres with diffuse material" />
        </div>
      </Section>

      <Section title="Materials and Lighting">
        <p>Implementing various material types and lighting features:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image src="/Blog/raytracer/08 - no acne.png" altText="Rendered image of sphere with diffuse material and no shadow acne" />
          <Image src="/Blog/raytracer/09 - lambert.png" altText="Rendered image of sphere with proper lambertian diffusion" />
          <Image src="/Blog/raytracer/10 - gamma.png" altText="Rendered image of sphere with gamma correction" />
          <Image src="/Blog/raytracer/11 - metal.png" altText="Rendered image of diffuse sphere, fully reflective metal sphere, and slightly fuzzy metal sphere" />
          <Image src="/Blog/raytracer/12 - dielectric.png" altText="Rendered image of a glass sphere and a water sphere next to a diffuse sphere" />
          <Image src="/Blog/raytracer/14 - depth of field.png" altText="Image of 3 spheres, with one in focus and the others blurred due to depth of field" />
          <Image src="/Blog/raytracer/16 - motion blur.png" altText="Image of spheres some of which have motion blur" />
          <Image src="/Blog/raytracer/23 - emissives.png" altText="Rendered image of a sphere being lit by red, blue, and white lights on each side" />
        </div>
      </Section>

      <Section title="Textures and Advanced Features">
        <p>Adding texture support and more complex scenes:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image src="/Blog/raytracer/17 - checker texture.png" altText="Sphere scene where the ground is checkered green and white" />
          <Image src="/Blog/raytracer/18 - image textures.png" altText="Two spheres with fantasy globe textures next to each other" />
          <Image src="/Blog/raytracer/19 - perlin texture.png" altText="Sphere with a perlin noise texture" />
          <Image src="/Blog/raytracer/21 - quads.png" altText="Rendered image of six spaced out quads" />
          <Image src="/Blog/raytracer/24 - cornell box.png" altText="Rendered Cornell box" />
          <Image src="/Blog/raytracer/26 - volumetrics.png" altText="Cornell box with boxes replaced with volumetric fogs of different colors" />
        </div>
      </Section>

      <Section title="GLTF Import and Final Scene">
        <p>Implementing GLTF import support and creating the final scene:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image src="/Blog/raytracer/34 - blender coords.png" altText="3-axis coordinate system modeled in blender" />
          <Image src="/Blog/raytracer/37 - camera rotation.png" altText="3-axis coordinate system with proper orientation and camera angle" />
          <Image src="/Blog/raytracer/38 - uv texture.png" altText="Rendered image of a plane with a gradient" large />
        </div>
        <p className="mt-4">Final scene props:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image src="/Blog/Props - ImageFrame.png" altText="Image frame prop" />
          <Image src="/Blog/Props - Bookend and Snowglobe.png" altText="Bookend and snowglobe props" />
          <Image src="/Blog/Props - Globe.png" altText="Globe prop" />
        </div>
        <p className="mt-4">Final render comparison:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image 
            src="/Blog/Final Render - My Raytracer.png" 
            altText="Final render of the reading nook, rendered with my raytracer" 
            large
          />
          <Image 
            src="/Blog/Final Render - Blender.png" 
            altText="Final render of the reading nook, rendered with Blender" 
            large
          />
        </div>
      </Section>

      <Section title="Demo">
        <Video
          preload
          url="/Code/raytracer.mp4"
          size="large"
          caption="Raytracer rendering demo"
        />
      </Section>
    </CodePage>
  );
}

