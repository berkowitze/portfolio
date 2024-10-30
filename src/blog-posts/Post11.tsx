import Image from "../Util/blog-components/Image";

export default function Post11() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I did two more models this week, but each required a bit more work than
        those from last week (though neither is absurdly complex by any means).
      </p>
      <p>
        First is a table, on which I'll put a lamp, books, and a plant if
        there's space. For this model, I learned how to use Substance Painter to
        get a better looking wood texture. I feel like I only scratched the
        surface with Substance Painter, and would love to learn more (for
        example, overlaying different textures), but I'm happy with this as a
        starting point. Getting the whole workflow of importing the model and
        exporting the textures, then importing those back into Maya took some
        time.
      </p>
      <Image
        large
        src="/Blog/Table.jpg"
        altText="Rendered image of a small wood table"
      />
      <p>
        Next up was modeling a two-sided leaf in Blender following a tutorial I
        found on{" "}
        <a href="https://www.textures.com/tutorials/double-sided-leaves-modelling">
          textures.com
        </a>
        . This was my first significant model in Blender, so it took a bit to
        get used to the interface and doing UVs. The concepts are all the same
        in Maya, so it wasn't that bad.
      </p>
      <p>
        The textures come from a Peace Lily, with images taken from a{" "}
        <a href="https://www.textures.com/download/3d-scanned-peace-lily-atlas-1/143487">
          textures.com Atlas
        </a>
        .
      </p>
      <Image large src="/Blog/Leaf.jpg" altText="Rendered image of a leaf" />
    </div>
  );
}
