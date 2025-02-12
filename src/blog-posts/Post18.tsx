import Image from "../Util/blog-components/Image";
import { Header2, UnorderedList } from "../Util/blog-components/Markup";

export default function Post14() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I spent most of this week trying to understand the matrix math going
        into the renderer, and think I have a good grasp on it now. This
        included understanding the math for the new camera transformation code
        that I wrote.
      </p>
      <p>
        Codewise, there were a few features added. First up, I combined the UV
        texturing with the normals-based lighting to get a nicer-looking result.
        This required reading in the normal vectors from the OBJ file and
        interpolating them based on the barycentric coordinates of the current
        pixel (same as for UVs).
      </p>
      <div className="flex flex-wrap gap-8">
        <Image
          caption="Last week's final render"
          altText="Renderer progress from last week"
          src="/Blog/cpp-rasterizer/07 - perspective.png"
        />
        <Image
          caption="This week's render, with lighting and texturing"
          altText="Renderer progress from this week"
          src="/Blog/cpp-rasterizer/08 - lighting.png"
        />
      </div>
      <p>
        Then, the bulk of this week, I worked on getting the camera and model
        transform matrices working. I learned that renderers tend to always have
        the "camera" be on a fixed axis, and do an inverse transform on all
        rendered objects to get them looking like they're in the right place in
        3d space. The result is a "moveable" camera!
      </p>
      <Image
        caption="The camera can be moved around, and the model will stay in the right place"
        altText="Camera movement"
        src="/Blog/cpp-rasterizer/09 - moveable camera.png"
      />
      <p>
        Finally, I spent some time seeing how well I'd be able to use my
        renderer for new OBJ exports from Blender, not just the same head I've
        been using from this tutorial. It took some fiddling and bugfixes, but I
        got it working:
      </p>
      <div className="flex flex-wrap gap-8">
        <Image
          caption="Rendered with my software rasterizer, exported from Blender"
          altText="New OBJ model"
          src="/Blog/cpp-rasterizer/10 - blender exports.png"
        />
        <Image
          caption="Screenshot from Blender of the same model"
          altText="Blender comparison screenshot"
          src="/Blog/cpp-rasterizer/11 - blender comp.png"
        />
      </div>
    </div>
  );
}
