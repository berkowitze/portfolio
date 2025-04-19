import Image from "../Util/blog-components/Image";
import { OrderedList, UnorderedList } from "../Util/blog-components/Markup";
import Video from "../Util/blog-components/Video";

export default function Post26() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        A new project idea I have is to make a Rube Goldberg machine, combining
        several distinct VFX into a single sequence. Think{" "}
        <a href="https://www.youtube.com/watch?v=aoPsQgJgkgo">
          House of Dragons
        </a>{" "}
        intro sequence (but much shorter and a little more varied).
      </p>
      <p>There's a few advantages to doing a project like this:</p>
      <UnorderedList>
        <li>
          I can practice multiple different types of VFX but still have it be
          part of one sequence
        </li>
        <li>
          It's a lot easier to keep scope contained - a Rube Goldberg machine
          can be 5 seconds long, or 5 minutes long. That means I can add little
          bits at a time and stop whenever.
        </li>
      </UnorderedList>
      <p>
        So, how does the machine start? I'm thinking it'll start with a glass of
        water or sand falling, shattering, and the resulting spilled fluid/sand
        triggering whatever the next sequence is.
      </p>
      <p>
        So to start, I wanted to get just the glass shattering effect down. RBD
        fracture is new to me, so it took some fiddling.
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
            large
            autoPlay
            caption="The cup rolling off a table plane and smashing on the ground plane"
          />
          <p>
            <i>None</i> of this is final - camera angle, shatter style,
            materials, lighting, etc. This is more a proof of concept to myself
            that I can do this part of the Rube Goldberg machine and move on to
            the next visual effect. Eventually I'll have a bunch of different
            effects and can start to think about the artistic direction I want
            to go in for the sequence (which I'm also thinking about now).
          </p>
        </OrderedList>
      </p>
    </div>
  );
}
