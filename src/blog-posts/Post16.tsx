import Image from "../Util/blog-components/Image";
import { UnorderedList } from "../Util/blog-components/Markup";

export default function Post14() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        This week, I got through{" "}
        <a href="https://github.com/ssloy/tinyrenderer/wiki/Lesson-1:-Bresenham%E2%80%99s-Line-Drawing-Algorithm">
          Lessons 1 and 2
        </a>{" "}
        in the software rendering "course" I'm following.
      </p>
      <p>
        First up was setting up the code and a small amount of boilerplate to
        make writing images easier. My repo is up on{" "}
        <a href="https://github.com/berkowitze/cpp-software-renderer">Github</a>
        .
      </p>
      <p>
        Then, the first significant task was to write a function that can draw a
        line between two 2-dimensional integer points. Easier said than done -
        there's a bunch of cases to consider:
        <UnorderedList>
          <li>Vertical lines</li>
          <li>Drawing left to right/right to left based on order of points</li>
          <li>Points exceed the bounds of the image</li>
          <li>
            Performance - since I'm trying to emulate a renderer, I want it to
            be as fast as possible while not using the GPU. Luckily, this course
            seems to pay close attention to performance. In this case, it means
            filling as few pixels on the output image as possible, since each
            one takes some time.
          </li>
        </UnorderedList>
      </p>
      <p>
        The algorithm used is a simple but fast one called{" "}
        <a href="https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm">
          Bresenham's line algorithm
        </a>
        . The main drawback is aliasing, but otherwise it's great.
      </p>
      <p>
        I got stuck trying to get vertical lines to work, and after a bunch of
        debugging think it was actually an issue with the small amount of source
        code provided by the course. I opened an{" "}
        <a href="https://github.com/ssloy/tinyrenderer/issues/147">
          Issue on Github
        </a>
        , maybe it'll get fixed or I'm missing something.
      </p>
      <p>Eventually it started working, and I was left with this image:</p>
      <Image
        src="/Blog/cpp-rasterizer/lines.png"
        altText="Rasterized image of some test lines"
        pixelated
      />
      <p>
        Next up: using this functionality to draw wireframes. The main todo here
        is to be able to parse a 3D model (for this course, OBJ files), and
        convert its 3D face/vertex information into a list of lines to draw for
        the wireframe based on the edges of the triangles.
      </p>
      <p>
        Parsing files in C++ isn't something I've done before, so I learned a
        lot writing this parser. For now, I'm ignoring the z-coordinate of the
        model, so just doing a front view of the model.
      </p>
      <Image
        src="/Blog/cpp-rasterizer/wireframe.png"
        altText="Wireframe raster of a head"
        pixelated
      />
      <p>
        Sweet. Next up, filling those triangles in. There's a few ways to do
        this, and the course went over 2 of them. The first essentially entails
        splitting the triangle in half and filling each half individually by
        drawing subsequently higher and higher horizontal lines that are bounded
        by the edges of the triangle.
      </p>
      <p>
        This works, but isn't actually how GPUs do things because they're able
        to parallelize. Instead, GPUs calculating the screen space bounding box
        of the triangle, and just iterate over every pixel in the triangle,
        asking "is this point inside the triangle? If so, fill it in".
      </p>
      <Image
        src="/Blog/cpp-rasterizer/filled-triangles.png"
        altText="Raster of some filled test triangles"
        pixelated
      />
      <p>
        Finally, applying this to the head model from above. To make this look
        decent and not just a silhouette, I needed some very basic shading, so I
        applied a very simple lambert with a directional light, to color each
        triangle according to how much its normal aligns with the directional
        light.
      </p>
      <Image
        src="/Blog/cpp-rasterizer/filled-head.png"
        altText="Raster of the head from above but with simple shading"
        pixelated
      />
      <p>
        There are some pretty glaring issues with this. In particular, some
        triangles are rendered on top of other triangles even though they are
        physically behind. That's just because they got rendered later in the
        loop than the earlier ones. The solution to this is to use a z-buffer,
        which will be next weeks task!
      </p>
    </div>
  );
}
