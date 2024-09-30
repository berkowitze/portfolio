export default function About(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex grow basis-2/3 flex-col gap-4">
        <p>
          I am a video game and full stack web developer with a passion for
          making beautiful and engaging user experiences. In September 2024, I
          began pursuing my Master of Fine Arts in Interactive Media at Clark
          University.
        </p>
        <p>
          After receiving a Bachelor of Science in Applied Mathematics from
          Brown University in 2019, I joined{" "}
          <a href="https://benchling.com">Benchling</a>, where I contributed to
          the development of a new data analytics product aimed at accelerating
          Biotech R&D.
        </p>
        <p>Other fun facts:</p>
        <ol className="ml-8 list-decimal">
          <li>I own a bearded dragon!</li>
          <li>I speak Portuguese and beginner level German.</li>
          <li>I enjoy hiking, biking, and backpacking.</li>
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
