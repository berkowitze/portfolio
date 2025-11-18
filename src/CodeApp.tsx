import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isValidCodeSlug, CODE_PROJECTS } from "./sections/code-data";

export default function CodeApp() {
  const slug = useParams().slug;
  useEffect(() => {
    if (slug == null || !isValidCodeSlug(slug)) {
      location.href = "/#code";
    }
  }, [slug]);

  const project = slug && isValidCodeSlug(slug) ? CODE_PROJECTS[slug] : null;

  useEffect(() => {
    if (project) {
      document.title = `Eli Berkowitz - ${project.title}`;
    }
  }, [project]);

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
          {project && (
            <div className="flex flex-col gap-4">
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-bold">
                  {project.company && (
                    <span className="text-lg font-normal text-gray-600">
                      {project.company} -{" "}
                    </span>
                  )}
                  {project.title}
                </h2>
                <a target="_self" href="/#code">
                  Back
                </a>
              </div>
              <hr className="my-2 shrink-0 border-t-2 border-gray-200" />
              
              <div className="mb-4 flex justify-center">
                <video
                  src={project.thumbnail}
                  className="w-full max-w-[800px] rounded-md"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>

              <project.Content />

              {project.url && !project.url.startsWith("/") && (
                <div className="mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-100 px-4 py-2 transition-colors hover:bg-blue-200"
                  >
                    Visit Project <span>&#8599;</span>
                  </a>
                </div>
              )}

              <div className="mt-4 flex flex-col gap-4">
                {project.contributions && project.contributions.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold">My contributions:</h3>
                    <ul className="list-inside list-disc pl-4">
                      {project.contributions.map((contribution, index) => (
                        <li key={index}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold">Tech stack:</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

