import { useInView } from "react-intersection-observer";
import { CODE_PROJECTS, CodeSlug } from "./code-data";

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
  const isExternal = !project.url.startsWith("/");

  return (
    <a
      href={isExternal ? project.url : `/code/${slug}`}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="no-underline-ani group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
    >
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
        <h3 className="text-xl font-bold text-black">
          {project.company && (
            <span className="text-base font-normal text-gray-600">
              {project.company} -{" "}
            </span>
          )}
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800"
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
            <div className="text-sm font-semibold text-gray-700">
              Contributions:
            </div>
            <ul className="mt-1 list-inside list-disc text-sm text-gray-600">
              {project.contributions.slice(0, 2).map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
              {project.contributions.length > 2 && (
                <li className="text-gray-500">
                  +{project.contributions.length - 2} more...
                </li>
              )}
            </ul>
          </div>
        )}
        <div className="mt-auto pt-2 text-right text-sm text-blue-600 transition-colors group-hover:text-blue-800">
          {isExternal ? (
            <>
              Visit site <span className="translate-y-0.5">&#8599;</span>
            </>
          ) : (
            "See more →"
          )}
        </div>
      </div>
    </a>
  );
}
