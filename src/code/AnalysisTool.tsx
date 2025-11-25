import Video from "../Util/blog-components/Video";
import CodeDetailLayout from "./CodeDetailLayout";
import Section from "../games/Section";

export default function AnalysisTool() {
  return (
    <CodeDetailLayout>
      <Section isCollapsible={false}>
        <p className="text-lg">
          <strong>Benchling Insights</strong> is a no-code data analysis
          platform for Benchling customers to transform and analyze their data
          without needing SQL knowledge. I worked with designers and product
          managers to help build this tool from the ground up.
        </p>
      </Section>

      <Section title="Contributions" isCollapsible={false}>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            <b>Data querying: </b>Each Benchling customer can build a unique
            data schema. I worked on a UI tool to allow customers to easily
            query those data and build datasets for further analysis.
            <br />
            Under the hood, Benchling constructs a GraphQL schema for each
            customer. Using{" "}
            <a href="https://graphql.org/learn/introspection/">
              GraphQL introspection
            </a>
            , it is then possible to construct a UI for building a GraphQL query
            at runtime. That query can be executed and denormalized into tabular
            data.
          </li>
          <li>
            <b>Data transformation pipeline:</b> The Insights tool allows
            customers to run arbitrary sequences of transformations and analyses
            on their data. I worked on this pipeline tool and the supporting
            UI/UX.
          </li>
          <li>
            See more about Benchling Insights{" "}
            <a
              href="https://www.benchling.com/insights"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </li>
        </ul>
        <Video
          preload
          url="/Code/analysis-tool.mp4"
          size="large"
          caption="Insights demo"
        />
      </Section>
    </CodeDetailLayout>
  );
}
