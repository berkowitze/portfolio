import { CODE_PROJECTS, CodeSlug } from "./code-data";
import Card from "../Util/Card";
import { CardFooterStyle } from "../Util/CardFooterStyle";

export default function Code() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {(Object.keys(CODE_PROJECTS) as CodeSlug[]).map((slug) => (
        <CodeCard key={slug} slug={slug} />
      ))}
    </div>
  );
}

function CodeCard({ slug }: { slug: CodeSlug }) {
  const project = CODE_PROJECTS[slug];
  const isExternal = project.url && !project.url.startsWith("/");
  const hasTargetPage = Boolean(project.targetPageId);

  const description =
    typeof project.description === "string"
      ? project.description
      : "Click to learn more about this project";

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
