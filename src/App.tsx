import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import About from "./sections/About";
// import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import Art from "./sections/Art";
import Code from "./sections/Code";
import Blog from "./sections/Blog";
import Games from "./sections/Games";

const ORDERED_SECTIONS = [
  {
    name: "Games",
    color: "red",
    bg: "bg-my-red",
    Page: Games,
  },
  {
    name: "Code",
    color: "blue",
    bg: "bg-my-blue",
    Page: Code,
  },
  {
    name: "3D Art",
    color: "orange",
    bg: "bg-my-orange",
    Page: Art,
  },
  {
    name: "About",
    color: "purple",
    bg: "bg-my-purple",
    Page: About,
  },
  {
    name: "Blog",
    color: "pink",
    bg: "bg-my-pink",
    Page: Blog,
  },
  {
    name: "Resume",
    color: "green",
    bg: "bg-my-green",
    Page: Resume,
  },
  // {
  //   name: "Contact",
  //   color: "purple",
  //   bg: "bg-my-purple",
  //   Page: Contact,
  //   fullScreen: false,
  // },
] as const satisfies ReadonlyArray<{
  name: string;
  color: string;
  bg: string;
  Page: React.FC;
}>;

export type Section = (typeof ORDERED_SECTIONS)[number];
type SectionName = Section["name"];

const SECTION_NAME_TO_SECTION = Object.fromEntries(
  ORDERED_SECTIONS.map((section) => [section.name, section])
) as Record<SectionName, Section>;

function capitalize(s: string): string {
  return (s[0]?.toUpperCase() ?? "") + s.slice(1);
}

function isValidSectionName(s: string): s is SectionName {
  return s in SECTION_NAME_TO_SECTION;
}

function useMostVisibleElement(
  selectors: string[],
  rootSelector: string
): HTMLElement | null {
  const [mostVisible, setMostVisible] = useState<HTMLElement | null>(null);

  useEffect(() => {
    function getMostVisibleElement() {
      const elements = document.querySelectorAll(selectors.join(","));
      let maxVisibleArea = 0;
      let mostVisibleElement = null;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const visibleWidth = Math.max(
          0,
          Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0)
        );
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        );
        const visibleArea = visibleWidth * visibleHeight;

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          mostVisibleElement = el;
        }
      });

      setMostVisible(mostVisibleElement);
    }

    const root = document.querySelector(rootSelector);
    if (!root) return;

    root.addEventListener("scroll", getMostVisibleElement);
    root.addEventListener("resize", getMostVisibleElement);
    getMostVisibleElement(); // Initial check

    return () => {
      root.removeEventListener("scroll", getMostVisibleElement);
      root.removeEventListener("resize", getMostVisibleElement);
    };
  }, [selectors, rootSelector]);

  return mostVisible;
}

export default function App() {
  const initialSectionName = useMemo(() => {
    const hash = capitalize(window.location.hash.replace("#", ""));
    return isValidSectionName(hash) ? hash : "Games";
  }, []);

  const [selectedSectionName, setSelectedSectionName] =
    useState<SectionName>(initialSectionName);

  const mostVisibleElement = useMostVisibleElement(
    ORDERED_SECTIONS.map((section) => `#${section.name}`),
    "#page-content"
  );

  useEffect(() => {
    if (mostVisibleElement) {
      setSelectedSectionName(
        mostVisibleElement.id.replace("#", "") as SectionName
      );
    }
  }, [mostVisibleElement]);

  function handleChangeSectionName(
    newSectionName: SectionName,
    scroll: boolean
  ): void {
    setSelectedSectionName(newSectionName);
    history.replaceState(null, "", `#${newSectionName}`);
    // Scroll to `#${newSectionName}`
    if (!scroll) return;
    const element = document.getElementById(newSectionName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="app-root" className="grid h-full gap-4">
      <div className="title grow-0 text-4xl leading-7">
        ELI BERKOWITZ
        <br />
        <span className="text-lg italic text-gray-600">
          Full stack engineer turned video game artist
        </span>
      </div>

      <Nav
        selectedSection={SECTION_NAME_TO_SECTION[selectedSectionName]}
        onChangeSelectedSection={(newSectionName) => {
          handleChangeSectionName(newSectionName, true);
        }}
      />
      <MainContent
        selectedSection={SECTION_NAME_TO_SECTION[selectedSectionName]}
      />
    </div>
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
    <div className="nav hidden grow-0 flex-col gap-4 md:flex">
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

  return (
    <div
      className="content no-scrollbar flex grow flex-col gap-8 overflow-visible overflow-y-auto text-lg"
      id="page-content"
    >
      {ORDERED_SECTIONS.map((section) => (
        <div
          id={section.name}
          key={section.name}
          className={classNames("grow-1 w-full shadow-md")}
        >
          <div
            className={classNames(
              "text-white left-0 text-sm py-1 px-2 rounded-t-md w-fit relative top-1",
              section.bg
            )}
          >
            {section.name}
          </div>
          <div
            className={classNames(
              "content-top-border bg-white p-2 sm:p-6 rounded-[4px] border-t-4",
              section.color
            )}
          >
            <div className="flex h-fit gap-2">
              <div
                className={classNames(
                  "h-[initial] border-r-2 content-top-border",
                  section.color
                )}
              />
              <div>
                <section.Page />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
