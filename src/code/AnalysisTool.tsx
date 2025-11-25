import Video from "../Util/blog-components/Video";
import CodePage from "./CodePage";
import Section from "../games/Section";

export default function AnalysisTool() {
  return (
    <CodePage>
      <Section isCollapsible={false}>
        <p className="text-lg">
          <strong>Benchling Analysis Tool</strong> is a no-code data analysis platform for Benchling customers to transform and analyze data without writing SQL.
        </p>
      </Section>

      <Section title="Contributions" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>Tool to create datasets with checkboxes, building GraphQL queries</li>
          <li>Data transformation tools (aggregations, filters)</li>
          <li>Product scaffolding and architecture</li>
        </ul>
      </Section>

      <Section title="Demo">
        <Video
          preload
          url="/Code/analysis-tool.mp4"
          size="large"
          caption="Analysis tool demo"
        />
      </Section>
    </CodePage>
  );
}

