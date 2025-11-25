import { CODE_PROJECTS, CodeSlug } from "./sections/code-data";
import Card from "./Util/Card";
import { CardFooterStyle } from "./Util/CardFooterStyle";
import PageLayout from "./Util/PageLayout";

export default function CodePage() {
  return (
    <PageLayout title="Code Projects">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(Object.keys(CODE_PROJECTS) as CodeSlug[]).map((slug) => (
          <CodeCard key={slug} slug={slug} />
        ))}
      </div>
    </PageLayout>
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

  // For entity-diagram, don't show "See more" since it doesn't have a page
  const isEntityDiagram = slug === "entity-diagram";
  
  return (
    <Card
      thumbnail={project.thumbnail}
      title={project.title}
      tags={project.stack}
      description={description}
      contributions={project.contributions}
      cardFooterStyle={isEntityDiagram ? CardFooterStyle.NONE : CardFooterStyle.SEE_MORE}
    />
  );
}

