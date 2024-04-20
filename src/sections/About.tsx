export default function About(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-6 text-lg">
      <div className="flex grow basis-2/3 flex-col gap-4">
        <p>
          I am a full stack web developer with a passion for making beautiful
          and engaging user experiences. At this stage of my life, I'm exploring
          careers in forestry, 3D modeling, and software engineering.
        </p>
        <p>
          I'm currently on a break from software, getting some outside time as
          an assistant arborist at the Newton Cemetery &amp; Arboretum.
        </p>
        <p>
          I previously worked at <a href="https://benchling.com">Benchling</a>{" "}
          on the team implementing a new data analytics product for Biotech
          R&amp;D acceleration.
        </p>
        <p>
          I received a Bachelor of Science in Applied Mathematics from Brown
          University in May 2019.
        </p>
        <p>Other fun facts:</p>
        <ol className="ml-8 list-decimal">
          <li>I own a bearded dragon!</li>
          <li>I speak Portuguese and beginner level German</li>
          <li>I enjoy hiking, hiking, and backpacking.</li>
          <li>I play classical piano and flute.</li>
        </ol>
        <p>Please hire me.</p>
      </div>
      <div className="grow basis-80">
        <img className="w-96" src="/God.jpg" alt="Picture of me" />
      </div>
    </div>
  );
}
