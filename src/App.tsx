import classNames from "classnames";
import "./App.css";
import { useEffect, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";

const ORDERED_SECTIONS = [
  { name: "About", color: "red", Page: About },
  { name: "Resume", color: "green", Page: About },
  { name: "Code", color: "blue", Page: About },
  { name: "Art", color: "orange", Page: About },
  { name: "Contact", color: "purple", Page: Contact },
] as const satisfies ReadonlyArray<{
  name: string;
  color: string;
  Page: React.FC;
}>;

const SECTION_NAME_TO_SECTION = Object.fromEntries(
  ORDERED_SECTIONS.map((section) => [section.name, section])
) as Record<SectionName, Section>;

type Section = (typeof ORDERED_SECTIONS)[number];
type SectionName = Section["name"];

export default function App() {
  const [selectedSectionName, setSelectedSectionName] =
    useState<SectionName>("About");
  return (
    <>
      <div className="text-4xl title flex-grow-0">ELI BERKOWITZ</div>
      <Nav
        selectedSection={SECTION_NAME_TO_SECTION[selectedSectionName]}
        onChangeSelectedSection={setSelectedSectionName}
      />
      <MainContent
        selectedSection={SECTION_NAME_TO_SECTION[selectedSectionName]}
      />
    </>
  );
}

function Nav({
  selectedSection,
  onChangeSelectedSection,
}: {
  selectedSection: Section;
  onChangeSelectedSection: (newSectionName: SectionName) => void;
}) {
  return (
    <div className="nav flex grow-0 flex-col gap-4">
      {ORDERED_SECTIONS.map(({ name, color }) => (
        <div
          className="sliding-u-l-r-parent cursor-pointer"
          onClick={() => {
            onChangeSelectedSection(name);
          }}
          key={name}
        >
          <div
            className={classNames(
              "text-2xl sliding-u-l-r w-fit nav-link",
              color,
              selectedSection.name == name && "selected"
            )}
          >
            {name}
          </div>
        </div>
      ))}
    </div>
  );
}

function MainContent({ selectedSection }: { selectedSection: Section }) {
  useEffect(() => {
    document.title = `Eli Berkowitz - ${selectedSection.name}`;
  }, [selectedSection.name]);

  const selectedSectionIndex = ORDERED_SECTIONS.findIndex(
    (section) => section.name == selectedSection.name
  );

  return (
    <div className="content gap-8 flex grow-1 flex-col overflow-hidden no-scrollbar relative">
      {ORDERED_SECTIONS.map((section, index) => (
        <>
          <div
            id={section.name}
            className={classNames(
              "grow-1 bg-white w-full h-fit p-4 rounded-sm shadow-md border-t-4",
              "content-top-border transition-all duration-1000 absolute inset-0",
              section.color,
              selectedSection.name == section.name
                ? "opacity-100"
                : "opacity-0",
              index < selectedSectionIndex
                ? "-translate-y-[100vh]"
                : index > selectedSectionIndex
                ? "translate-y-[100vh]"
                : undefined
            )}
          >
            <section.Page />
          </div>
        </>
      ))}
      <div className="h-full shrink-0" />
    </div>
  );
}
