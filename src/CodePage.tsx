import { CODE_PROJECTS, CodeSlug } from "./sections/code-data";
import Card from "./Util/Card";
import { CardFooterStyle } from "./Util/CardFooterStyle";

export default function CodePage() {
  return (
    <div className="flex h-full flex-col gap-4">
      <a
        href="/"
        target="_self"
        className="title no-underline-ani grow-0 text-4xl"
      >
        ELI BERKOWITZ
      </a>
      <div className="grow overflow-y-auto text-lg">
        <div className="mx-auto my-0 h-full max-w-[1000px] overflow-auto rounded-md bg-gray-50 p-4 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Code Projects</h2>
            <a href="/" target="_self" className="text-gray-500">
              Back
            </a>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(Object.keys(CODE_PROJECTS) as CodeSlug[]).map((slug) => (
              <CodeCard key={slug} slug={slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
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

