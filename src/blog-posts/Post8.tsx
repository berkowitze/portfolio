import ClickableGallery from "../Util/blog-components/ClickableGallery";
import Image from "../Util/blog-components/Image";
import { UnorderedList } from "../Util/blog-components/Markup";

export default function Post8() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        Progress has slowed down a good bit since I'm out of tutorial territory
        and squarely into "figure stuff out by yourself" territory. I still was
        able to make tangible progress though, which I'm happy about.
      </p>
      <p>
        I decided to use glTF instead of FBX or OBJ, partially because FBX is
        proprietary and OBJ is outdated. I also really like that glTF metadata
        files are very easily human readable (they're just JSON).
      </p>
      <p>
        After this, I spent a while reading about glTF, in particular reading
        through their{" "}
        <a href="https://www.khronos.org/files/gltf20-reference-guide.pdf">
          glTF - what the 🐤?
        </a>{" "}
        overview, then reading through the relevant parts of the 150+ page{" "}
        <a href="https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html">
          specification
        </a>
        . I can skip skinning and animation, but pretty much everything else is
        relevant.
      </p>
      <p>
        After a lot of reading, it was time to start coding! I found the{" "}
        <a href="https://github.com/syoyo/tinygltf">tinygltf</a> repo, which is
        essentially a JSON and binary file parser for glTF, and after some
        compilation issues got it set up.
      </p>
      <p>
        I had to go back to the specification for a while at this point, since I
        was expecting the library to do more of the work for me - but it really
        just reads in the files and lets you do whatever you want with them.
        That meant I actually needed to understand the full file format so that
        I could properly read in meshes, camera info, and material data.
      </p>
      <p>
        Eventually I got something working with a very basic scene exported from
        Blender while applying a default gray lambert within the raytracing
        code:
      </p>
      <Image
        src="/Blog/raytracer/31 - gltf meshes.png"
        altText="Rendered image of grey spheres"
      />
      <p>
        I added support for the color-only PBR materials, and here's my final
        image for this week!
      </p>
      <Image
        src="/Blog/raytracer/32 - gltf materials.png"
        altText="Rendered image of two colored spheres"
      />
      <p>Here's the Blender scene, for reference:</p>
      <Image
        src="/Blog/raytracer/33 - blender scene.png"
        altText="Blender scene with simply colored spheres"
      />
      <p>Here are some fails along the way:</p>
      <ClickableGallery
        min={1}
        max={4}
        pathTemplate="/Blog/raytracer-fails/fail-{}.png"
      />
      <p>The largest todos are:</p>
      <UnorderedList>
        <li>
          Support any transforms defined in glTF files. Right now, all
          transforms are applied in Blender since I don't have support for
          scaling or most rotations in my raytracer yet. This isn't a robust or
          scalable solution though, and it doesn't work for the camera.
        </li>
        <li>Further PBR material support</li>
        <li>Textures</li>
        <li>
          Remove some hardcoding as needed. My goal isn't to make a fully
          generic glTF raytracer, so I'll only make things generic as needed for
          my bookstore scene.
        </li>
      </UnorderedList>
    </div>
  );
}
