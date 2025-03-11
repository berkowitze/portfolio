import Image from "../Util/blog-components/Image";
import { OrderedList } from "../Util/blog-components/Markup";

export default function Post17() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        First up is fixing the triangle ordering issue by implementing a{" "}
        <a href="https://en.wikipedia.org/wiki/Z-buffering">z-buffer</a>.
      </p>
      <Image
        src="/Blog/cpp-rasterizer/05 - zbuffer.png"
        altText="Render with z-buffer enabled"
        pixelated
      />
      <p>
        Next: Getting a texture onto the head. This wasn't covered in the
        tutorial, so I had to figure it out - but it wasn't that bad.
      </p>
      <OrderedList>
        <li>Update the OBJ parser to read in vertex UV values</li>
        <li>
          Update the renderer to interpolate those UVs based on the barycentric
          coordinates of the point being rendered
        </li>
        <li>
          Use that UV to figure out the resulting albedo from the image texture.
        </li>
      </OrderedList>
      <Image
        src="/Blog/cpp-rasterizer/06 - orthographic textured.png"
        altText="Render with orthographic projection and texturing"
        pixelated
      />
      <p>
        Finally for this week, I worked on getting perspective projection
        working (thus far, everything has been orthographic). For now, the
        camera is at a fixed location on the z-axis. After watching a bunch of{" "}
        <a href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">
          linear algebra review videos
        </a>{" "}
        and{" "}
        <a href="https://www.youtube.com/watch?v=Do_vEjd6gF0">
          game dev math videos
        </a>
        , I was able to get this working!
      </p>
      <Image
        src="/Blog/cpp-rasterizer/07 - perspective.png"
        altText="Render with perspective projection"
        pixelated
      />
      <p>Next week, I'll work on moving the camera around.</p>
    </div>
  );
}
