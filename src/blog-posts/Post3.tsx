import Song from "../Util/blog-components/Song";

export default function Post3() {
  return (
    <>
      <p>
        The second assignment for Music Composition for Games was to write a
        song using arpeggios and a bass line for an old snowboarding game using
        <a href="https://soundtrap.com">Soundtrap</a>. I started with a simple
        chord progression, added a bass line, then wrote a melody that builds on
        itself each set of measures. I ended up really liking the result!
      </p>
      <p>
        The song is supposed to loop smoothly, but I haven't figured out how to
        export it so that there's not a several-second fade-out at the end.
      </p>
      <div className="mx-auto my-4 flex w-full justify-center text-center">
        <Song src="/Music/Snowboard.mp3" />
      </div>
    </>
  );
}
