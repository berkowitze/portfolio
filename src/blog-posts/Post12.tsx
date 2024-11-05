import Image from "../Util/blog-components/Image";
import { OrderedList } from "../Util/blog-components/Markup";

export default function Post12() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I returned to my raytracer this week, with the goal of getting it ready
        to do a (low quality) render of my bookstore/library scene.
      </p>
      <p>
        <b>Step one</b>: fixing the coordinate system in my raytracer. The GLTF
        exports from Blender have a different coordinate system than me. The
        image below shows mesh arrows I made to help make sure I was loading the
        GLTFs correctly.
      </p>
      <Image
        src="/Blog/raytracer/34 - blender coords.png"
        altText="3-axis coordinate system modeled in blender"
      />
      <p>Here's what my raytracer was rendering for this GLTF:</p>
      <Image
        src="/Blog/raytracer/35 - coordinates v1.png"
        altText="3-axis coordinate system rendered in my raytracer, with mismatching directions."
      />
      <p>
        After a bunch of trial and error, I figured out that my raytracer's
        coordinate system is GLTF's (y, -x, z). So I just transform every vec3
        as I read it in from the GLTF accordingly.
      </p>
      <Image
        src="/Blog/raytracer/36 - coordinates v2.png"
        altText="3-axis coordinate system rendered in my raytracer, with matching directions."
      />
      <p>
        <b>Step 2</b>: make sure the camera faces the right way. Notice how the
        tip of the blue arrow isn't visible in my raytracer, but is in Blender?
        I wanted to fix that. It's a result of the camera always facing (0, 0,
        0) in my raytracer.
      </p>
      <p>
        The way a camera is defined in GLTF includes a translation and a
        rotation, represented as a quaternion. I was already respecting the
        translation, but ignoring the rotation since I didn't have quaternion
        support yet.
      </p>
      <p>
        In the spirit of coding from scratch, I followed{" "}
        <a href="https://www.haroldserrano.com/blog/developing-a-math-engine-in-c-implementing-quaternions">
          this tutorial
        </a>{" "}
        on implementing quaternions in C++. I was then able to apply the
        camera's rotation to figure out the actual point the camera is looking
        at. With that, my raytracer matches up to the Blender camera and scene
        correctly.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <Image
          src="/Blog/raytracer/34 - blender coords.png"
          altText="3-axis coordinate system modeled in blender"
        />
        <Image
          src="/Blog/raytracer/37 - camera rotation.png"
          altText="3-axis coordinate system with proper orientation and camera angle"
        />
      </div>
      <p>
        <b>Step 3</b>: Custom UVs. Right now, the UV of a point on a triangle is
        based on its relative position within the triangle. I need to support
        instead using user-defined UV coordinates.
      </p>
      <OrderedList>
        <li>
          Load in the UV coordinates from the GLTF.
          <br />
          Similar to the above issue, I had to do some tweaking to get the UV
          coordinates to match up with my raytracer's coordinate systems, by
          doing <code>my_uv.y = 1-gltf.y</code>. But otherwise, this was just
          like reading in the coordinates and normals.
        </li>
        <li>
          Update the triangle class to support defining a UV coordinate for each
          triangle vertex.
        </li>
        <li>
          When a ray hits a triangle, the resulting UV coordinate needs to be an
          interpolation of the 3 UV coordinates of the triangle's points. How
          much each point's UV contributes to the output UV is based on the
          points'{" "}
          <a href="https://en.wikipedia.org/wiki/Barycentric_coordinate_system">
            barycentric coordinates
          </a>
          , so if for example a ray hits very close to vertex 0, vertex 0's UV
          coordinate is the most influential in the resulting UV.
        </li>
        <li>Load the material's image textures from the GLTF files.</li>
        <li>
          And finally, when determining the color of a point based off its UV,
          the UV coordinate is used to index into the image data at the nearest
          pixel.
        </li>
      </OrderedList>
      <p>
        With all of this, I set up a tiny scene with a plane and a material with
        a color texture, to make sure everything was working correctly:
      </p>
      <Image
        large
        src="/Blog/raytracer/38 - uv texture.png"
        altText="Rendered image of a plane with a gradient"
      />
    </div>
  );
}
