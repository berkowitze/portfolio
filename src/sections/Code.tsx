import { CODE_PROJECTS, CodeSlug } from "./code-data";
import Card from "../Util/Card";
import { CardFooterStyle } from "../Util/CardFooterStyle";

export default function Code() {
  // Show only the first 3 projects: raytracer, downup, analysis-tool
  const highlightedProjectSlugs: CodeSlug[] = [
    "raytracer",
    "downup",
    "analysis-tool",
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlightedProjectSlugs.map((slug) => (
          <CodeCard key={slug} slug={slug} />
        ))}
      </div>
      <div className="mt-6">
        <a
          href="/code"
          target="_self"
          className="no-underline-ani text-lg text-blue-600 hover:text-blue-800 hover:underline"
        >
          See all code projects →
        </a>
      </div>
    </>
  );
}

function CodeCard({ slug }: { slug: CodeSlug }) {
  const project = CODE_PROJECTS[slug];
  const isExternal = project.url && !project.url.startsWith("/");
  const hasTargetPage = Boolean(project.targetPageId);
  const hasContent = Boolean(project.Content);

  const description =
    typeof project.description === "string"
      ? project.description
      : "Click to learn more about this project";

  // If project has Content component, link to individual page
  if (hasContent) {
    return (
      <Card
        href={`/code/${slug}`}
        thumbnail={project.thumbnail}
        title={project.title}
        tags={project.stack}
        description={description}
        contributions={project.contributions}
        cardFooterStyle={CardFooterStyle.SEE_MORE}
      />
    );
  }

  if (isExternal) {
    return (
      <Card
        href={project.url}
        thumbnail={project.thumbnail}
        title={project.title}
        tags={project.stack}
        description={description}
        contributions={project.contributions}
        cardFooterStyle={CardFooterStyle.OPEN_SITE}
      />
    );
  }

  if (hasTargetPage) {
    return (
      <Card
        href={`/#${project.targetPageId}`}
        thumbnail={project.thumbnail}
        title={project.title}
        tags={project.stack}
        description={description}
        contributions={project.contributions}
        cardFooterStyle={CardFooterStyle.SEE_MORE}
      />
    );
  }

  return (
    <Card
      thumbnail={project.thumbnail}
      title={project.title}
      tags={project.stack}
      description={description}
      contributions={project.contributions}
      cardFooterStyle={CardFooterStyle.SEE_MORE}
    />
  );
}
