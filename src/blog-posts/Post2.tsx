import Song from "../Util/blog-components/Song";

export default function Post2() {
  return (
    <>
      <p>
        The first assignment for Music Composition for Games was to come up with
        a short chord progression using{" "}
        <a href="https://www.onemotion.com/chord-player/">
          OneMotion Chord Player
        </a>
        . I ended up using E minor.
      </p>
      <p>
        I figured out how to export it to GarageBand where I added a melody.
      </p>
      <p>I'm pretty happy with where it ended up!</p>
      <div className="mx-auto my-4 flex w-full justify-center text-center">
        <Song src="/Music/Song 1.m4a" />
      </div>
    </>
  );
}
