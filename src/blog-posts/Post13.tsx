import ClickableGallery from "../Util/blog-components/ClickableGallery";
import Image from "../Util/blog-components/Image";
import { UnorderedList } from "../Util/blog-components/Markup";

export default function Post13() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        For the last two weeks, I worked on wrapping up my seminar project. This
        involved a combination of adding features to the raytracer, doing some
        more 3D models, porting over a bunch of models I made last year, and
        composing it all into a final scene.
      </p>
      <p>Starting with the raytracer, I added a bunch of features:</p>
      <UnorderedList>
        <li>
          Smooth shading, by interpolating normal vectors between the triangle's
          vertex normals, rather than using face-perpendicular normals.
        </li>
        <li>
          Alpha transparency, so that rays have <code>alpha</code> probability
          of not hitting objects.
        </li>
        <li>
          Directional lighting. When determining the color at a ray-triangle
          intersection point, cast an additional ray in the negative directional
          light direction. If this ray does not hit anything, it is not
          obscured, so add the directional light to the resulting color.
        </li>
        <li>Emissive materials, which I use to implement area lights.</li>
        <li>sRGB color correction when reading in image textures.</li>
        <li>
          Supporting mixtures of transmissive, metallic, and rough materials.
        </li>
        <li>
          Importing materials from glTF files, including transmissives with IOR,
          metallics, and diffuse materials.
        </li>
        <li>Supporting HDRI environment lighting.</li>
        <li>
          Reading vertex colors from the glTF file to allow for one material
          with multiple colors depending on the color attribute of the vertices.
        </li>
      </UnorderedList>
      <p>
        Here are some progress images while implementing the above, using some
        scenes I modeled last year to test my raytracer.
        <ClickableGallery
          min={1}
          max={10}
          pathTemplate="/Blog/raytracer-final-progress/final-{}.png"
        />
      </p>
      <p>
        After getting the raytracer working, I started to assemble a final scene
        to render with it. I wanted to make sure to use all the features I've
        built into the raytracer for this, so I modeled some extra props and
        pulled some in from previous projects.
      </p>
      <p>Here are some of the new props:</p>
      <Image src="/Blog/Props - ImageFrame.png" altText="Image frame prop" />
      <Image
        src="/Blog/Props - Bookend and Snowglobe.png"
        altText="Bookend and snowglobe props"
      />
      <Image src="/Blog/Props - Globe.png" altText="Globe prop" />
      <p>
        Composing these props, the bookcase from earlier this semester (with
        some heavy editing), and some lighting, then exporting to GLTF, I
        produced a final render:
      </p>
      <Image
        large
        src="/Blog/Final Render - My Raytracer.png"
        caption="Final render of the reading nook, rendered with my raytracer"
        altText="Final render of the reading nook, rendered with my raytracer"
      />
      Here's the same scene rendered in Blender for comparison:
      <Image
        large
        src="/Blog/Final Render - Blender.png"
        caption="Final render of the reading nook, rendered with Blender"
        altText="Final render of the reading nook, rendered with Blender"
      />
      <p>
        My render is noisier, took far longer to render, and the floor's color
        is messed up for some reason. But I'm really happy with how well it
        turned out!
      </p>
    </div>
  );
}
