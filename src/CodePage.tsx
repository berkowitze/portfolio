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
  const hasContent = Boolean(project.Content);

  const description =
    typeof project.description === "string"
      ? project.description
      : "Click to learn more about this project";

  // Determine href and footer style based on project properties
  let href: string | undefined;
  let cardFooterStyle: CardFooterStyle;

  if (hasContent) {
    href = `/code/${slug}`;
    cardFooterStyle = CardFooterStyle.SEE_MORE;
  } else if (isExternal) {
    href = project.url;
    cardFooterStyle = CardFooterStyle.OPEN_SITE;
  } else if (project.targetPageId) {
    href = `/#${project.targetPageId}`;
    cardFooterStyle = CardFooterStyle.SEE_MORE;
  } else {
    // No link available
    href = undefined;
    cardFooterStyle = CardFooterStyle.NONE;
  }

  return (
    <Card
      href={href}
      thumbnail={project.thumbnail}
      title={project.title}
      tags={project.stack}
      description={description}
      contributions={project.contributions}
      cardFooterStyle={cardFooterStyle}
    />
  );
}
