import { useInView } from "react-intersection-observer";
import { CODE_PROJECTS, CodeSlug } from "./code-data";
import { useBlogFilter } from "../contexts/BlogFilterContext";

const NUM_CONTRIBUTIONS_TO_SHOW = 4;

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
  const { ref, inView } = useInView({ triggerOnce: true });
  const { setFilteredTags } = useBlogFilter();
  const isExternal = project.url && !project.url.startsWith("/");
  const hasTargetPage = Boolean(project.targetPageId);

  const handleInternalNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    project.onClick?.(setFilteredTags);

    const element = document.getElementById(project.targetPageId!);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${project.targetPageId}`);
    }
  };

  const cardContent = (
    <>
      <div
        ref={ref}
        className="relative aspect-video w-full overflow-hidden bg-gray-100"
      >
        {inView && (
          <video
            src={project.thumbnail}
            className="size-full object-cover transition-transform group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          {project.company && (
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              {project.company}
            </span>
          )}
          <h3 className="text-xl font-bold text-black">{project.title}</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="line-clamp-3 text-sm text-gray-600">
          {typeof project.description === "string"
            ? project.description
            : "Click to learn more about this project"}
        </p>
        {project.contributions && (
          <div className="mt-1">
            <ul className="mt-1 list-inside list-disc text-sm text-gray-600">
              {project.contributions
                .slice(0, NUM_CONTRIBUTIONS_TO_SHOW)
                .map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              {project.contributions.length > NUM_CONTRIBUTIONS_TO_SHOW && (
                <li className="text-gray-500">
                  +{project.contributions.length - NUM_CONTRIBUTIONS_TO_SHOW}{" "}
                  more...
                </li>
              )}
            </ul>
          </div>
        )}
        {(isExternal || hasTargetPage) && (
          <div className="absolute bottom-0 right-0 p-4 text-right text-sm text-blue-600 transition-colors group-hover:text-blue-800">
            {hasTargetPage ? (
              "See more →"
            ) : (
              <>
                Visit site <span className="translate-y-0.5">&#8599;</span>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline-ani group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
      >
        {cardContent}
      </a>
    );
  }

  if (hasTargetPage) {
    return (
      <a
        href={`/#${project.targetPageId}`}
        target="_self"
        onClick={handleInternalNavClick}
        className="no-underline-ani group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      {cardContent}
    </div>
  );
}
