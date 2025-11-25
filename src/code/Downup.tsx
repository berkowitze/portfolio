import Video from "../Util/blog-components/Video";
import CodePage from "./CodePage";
import Section from "../games/Section";
import Image from "../Util/blog-components/Image";

export default function Downup() {
  return (
    <CodePage>
      <Section isCollapsible={false}>
        <p className="text-lg">
          Downup is a hobby website for small communities to do goal-oriented
          challenges together, like monthly pushup challenges.
        </p>
        <p className="mt-2">
          <a
            href="https://downup.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Visit Downup →
          </a>
        </p>
      </Section>

      <Section title="About" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Downup provides a gamified and community-oriented interface for
            tracking progress in month-long challenges.
          </li>
          <li>
            Built with Next.js (React), Twilio, Redis, Postgres, Railway, and
            Upstash.
          </li>
          <li>Uses Twilio to send optional daily reminder notifications.</li>
        </ul>
      </Section>

      <div className="flex flex-wrap justify-center gap-4">
        <Video
          preload
          url="/Code/downup.mp4"
          size="medium"
          caption="Homepage"
        />
        <Image
          src="/Code/downup/Personal Dashboard.png"
          altText="Personal Dashboard"
          caption="Personal Dashboard"
        />
        <Image
          src="/Code/downup/Community Dashboard.png"
          altText="Community Dashboard"
          caption="Community Dashboard"
        />
        <Image
          src="/Code/downup/Settings Dashboard.png"
          altText="Settings Dashboard"
          caption="Settings Dashboard"
        />
      </div>
    </CodePage>
  );
}
