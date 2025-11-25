import Video from "../Util/blog-components/Video";
import CodePage from "./CodePage";
import Section from "../games/Section";

export default function Downup() {
  return (
    <CodePage>
      <Section isCollapsible={false}>
        <p className="text-lg">
          <strong>Downup</strong> is a hobby website for small communities to do goal-oriented challenges together, like monthly pushup challenges.
        </p>
        <p className="mt-2">
          <a
            href="https://downup.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Visit Downup →
          </a>
        </p>
      </Section>

      <Section title="Contributions" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>Full-stack development</li>
          <li>SMS integration with Twilio</li>
          <li>Real-time progress tracking</li>
          <li>Community challenge management</li>
        </ul>
      </Section>

      <Section title="Demo">
        <Video
          preload
          url="/Code/downup.mp4"
          size="large"
          caption="Downup demo"
        />
      </Section>
    </CodePage>
  );
}

