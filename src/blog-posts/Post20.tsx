import Image from "../Util/blog-components/Image";

export default function Post14() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I'm a bit burnt out on coding right now (with 2 coding classes + 2
        coding jobs), so I changed things up this week and didn't code much for
        seminar. Instead, I started learning about OpenGL by reading{" "}
        <a href="https://registry.khronos.org/OpenGL/specs/gl/glspec33.core.pdf">
          the spec
        </a>
        .
      </p>
      <p>
        After that, I wanted to switch to some quick modeling to try to get some
        motivation back, so I made a quick fork in Maya and added some dramatic
        lighting for an Arnold render.
      </p>
      <p>
        <Image src="/Blog/fork.jpg" altText="Rendered image of a fork" large />
      </p>
      <p>
        Not the most productive week, but I'm hoping spring break will help
        unclog my creative pores!
      </p>
    </div>
  );
}
