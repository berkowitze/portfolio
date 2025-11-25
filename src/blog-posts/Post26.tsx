import Image from "../Util/blog-components/Image";
import { OrderedList } from "../Util/blog-components/Markup";
import Video from "../Util/blog-components/Video";

export default function Post26() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        To start exploring Houdini in more depth, I wanted to work on a glass
        rolling off a table and shattering.
      </p>
      <p>First off, modeling a cup with some placeholder water in Maya:</p>
      <Image
        src="/Blog/rube/glass.png"
        altText="A glass cup with water in it"
      />
      <p>
        Then I imported it into Houdini, added a temporary "table" for the cup
        to roll off of, a floor for it to smash on, and used the RBD fracture
        node to break it:
      </p>
      <Image
        src="/Blog/rube/glass-rbd.png"
        altText="The RBD fracture node in Houdini"
      />
      <p>
        There were two main issues I had to deal with:
        <OrderedList>
          <li>
            The fractures show up before the cup hits the ground:
            <Image
              src="/Blog/rube/prebroken-glass.png"
              altText="The cup before it hits the ground"
            />
            Swapping out unfractured geometry for the fractured geometry at just
            the right moment is probably an option, but since the unfractured
            geometry is simulated and moves, it's not completely straightforward
            to match up the two pieces of geometry at the moment of impact.
            <br />
            So instead, I found the RBDConnectedFaces and RBDDisonnectedFaces
            SOPs which after some tweaking worked like a charm:
            <Image
              src="/Blog/rube/fixed-prebroken-glass.png"
              altText="The cup before it hits the table, with the fractures fixed"
            />
          </li>
          <li>
            The cup shatters just when hitting the table even though it's going
            slowly. I only want it to break when it hits the ground.
            <br />
            My idea for this was to animate the glue strength, starting high at
            the beginning of the animation and declining once the cup falls off
            the table. It took an infuriatingly long time to figure out that the
            RBD Bullet Solver was only using the glue constraint on the first
            frame. Luckily, under Constraints &gt; Override Attributes, adding
            the <code>strength</code> attribute did the trick!
          </li>
          <p>With those solved, I did a quick render:</p>
          <Video
            url="/Blog/rube/glass-shatter.mp4"
            size="large"
            autoPlay
            caption="The cup rolling off a table plane and smashing on the ground plane"
          />
        </OrderedList>
      </p>
    </div>
  );
}
