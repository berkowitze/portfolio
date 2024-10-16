import Image from "../Util/blog-components/Image";
import { UnorderedList } from "../Util/blog-components/Markup";

export default function Post9() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I've been struggling with getting tangible 3D modeling progress. I'm
        having a hard time just getting going with the bookstore, and starting
        somewhere. This is when I wish I had a PM, but I suppose I'm my own PM
        for this.
      </p>
      <p>
        I did start modeling an armchair, though I've ended up not really liking
        the design. That's pretty much my only actual "progress".
      </p>
      <Image
        src="/Blog/armchair start.png"
        altText="Incomplete 3D model of an armchair"
      />
      <p>
        I also did some research on different architectural styles, trying to
        find inspiration for a bookstore or library to model. I haven't found
        anything I want to replicate or even use as very clear inspiration so
        far, which is frustrating. Especially since I think designing something
        from scratch is going to be even more mentally overwhelming, and it'd be
        better for me to have something concrete to model off of.
      </p>
      <p>
        So I have some plans for the next few weeks to try to unblock myself:
      </p>
      <UnorderedList>
        <li>
          Model one simple thing every day, without thinking too much about
          style and how it'll fit into the bookstore. Ideas: Desk, chair,
          puzzle, light fixtures, windows.
        </li>
        <li>
          No coding for the next week. I'm comfortable with the coding to the
          point that I'm using it as a way to procrastinate.
        </li>
      </UnorderedList>
    </div>
  );
}
