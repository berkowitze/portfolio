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
          return <p>No detailed page available for this project.</p>;
        }
        return <project.Content />;
      }}
    />
  );
}
