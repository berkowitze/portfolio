import {
  isValidCodeSlug,
  CODE_PROJECTS,
  CodeProjectInfo,
} from "./sections/code-data";
import DetailPageLayout from "./Util/DetailPageLayout";
import { ComponentType } from "react";

// Create a type that satisfies DetailPageLayout's requirements
type CodeProjectWithContent = CodeProjectInfo & {
  Content: ComponentType;
};

export default function CodeApp() {
  return (
    <DetailPageLayout
      items={CODE_PROJECTS as Record<string, CodeProjectWithContent>}
      isValidSlug={isValidCodeSlug}
      backUrl="/#code"
      renderContent={(project) => {
        if (!project.Content) {
          return (
            <div className="flex flex-col gap-4">
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <a target="_self" href="/#code">
                  Back
                </a>
              </div>
              <hr className="my-2 shrink-0 border-t-2 border-gray-200" />
              <p>No detailed page available for this project.</p>
            </div>
          );
        }
        return (
          <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <a target="_self" href="/#code">
                Back
              </a>
            </div>
            <hr className="my-2 shrink-0 border-t-2 border-gray-200" />
            <project.Content />
          </div>
        );
      }}
    />
  );
}
