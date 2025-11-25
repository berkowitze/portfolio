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
          <span className="whitespace-nowrap">
            <a
              href="https://benchling.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Benchling
            </a>
            ,
          </span>{" "}
          where I contributed to the development of a new data analytics product
          aimed at accelerating Biotech R&D.
        </p>
        <p>Other fun facts:</p>
        <ol className="ml-8 list-decimal">
          <li>I have a beautiful bearded dragon!</li>
          <li>I speak Portuguese and beginner level German.</li>
          <li>I enjoy hiking, rowing, and CrossFit.</li>
          <li>I play classical piano and flute.</li>
        </ol>
      </div>
      <div className="grow basis-80">
        <img className="w-96" src="/God.jpg" alt="Picture of me" />
      </div>
    </div>
  );
}
