import Image from "../Util/blog-components/Image";

export default function Post10() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I did a couple models last week, though forgot to post the blog on
        Wednesday.
      </p>
      <p>
        First up is an armchair. Still going to play with the color once I have
        some other assets, and the texture could use some work, but I'm mostly
        alright with where it's at. Used Maya and Arnold to render (a few things
        needed before I use my raytracer for rendering).
      </p>
      <Image large src="/Blog/armchair.jpg" altText="Armchair" />
      <p>
        Next I modeled a lamp. I'm pretty happy with how it turned out, though
        there's some weird artifacts going on. Colors also TBD.
      </p>
      <Image large src="/Blog/lamp.jpg" altText="Lamp" />
      <p>
        That's all for this week. It's not much, but I was sick for a few days
        and a bit overwhelmed by work on a few other days, so I feel like I have
        maybe broken the mental block a bit and can do some more modeling next
        week. Next model planned is a little table.
      </p>
    </div>
  );
}
