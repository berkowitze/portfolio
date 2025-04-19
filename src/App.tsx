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
    id: "games",
    name: "Games",
    color: "red",
    bg: "bg-my-red",
    Page: Games,
  },
  {
    id: "art-vfx",
    name: "Art & VFX",
    color: "orange",
    bg: "bg-my-orange",
    Page: Art,
  },
  {
    id: "code",
    name: "Code",
    color: "blue",
    bg: "bg-my-blue",
    Page: Code,
  },
  {
    id: "about",
    name: "About",
    color: "purple",
    bg: "bg-my-purple",
    Page: About,
  },
  {
    id: "blog",
    name: "Blog",
    color: "pink",
    bg: "bg-my-pink",
    Page: Blog,
  },
  {
    id: "resume",
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
  id: string;
  name: string;
  color: string;
  bg: string;
  Page: React.FC;
}>;

export type Section = (typeof ORDERED_SECTIONS)[number];
type SectionId = Section["id"];

const SECTION_ID_TO_SECTION = Object.fromEntries(
  ORDERED_SECTIONS.map((section) => [section.id, section])
) as Record<SectionId, Section>;

function isValidSectionId(s: string): s is SectionId {
  return s in SECTION_ID_TO_SECTION;
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
  const initialSectionId = useMemo(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    return isValidSectionId(hash) ? hash : ORDERED_SECTIONS[0].id;
  }, []);

  const [selectedSectionId, setSelectedSectionId] =
    useState<SectionId>(initialSectionId);

  // Scroll to the initial selected section on mount
  useEffect(() => {
    const element = document.getElementById(selectedSectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "instant",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mostVisibleElement = useMostVisibleElement(
    ORDERED_SECTIONS.map((section) => `#${section.id}`),
    "#page-content"
  );

  useEffect(() => {
    if (mostVisibleElement) {
      setSelectedSectionId(mostVisibleElement.id.replace("#", "") as SectionId);
    }
  }, [mostVisibleElement]);

  function handleChangeSectionId(
    newSectionId: SectionId,
    scroll: boolean
  ): void {
    setSelectedSectionId(newSectionId);
    history.replaceState(null, "", `#${newSectionId}`);
    // Scroll to `#${newSectionId}`
    if (!scroll) return;
    const element = document.getElementById(newSectionId);
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
          Full stack engineer turned video game developer
        </span>
      </div>

      <Nav
        selectedSection={SECTION_ID_TO_SECTION[selectedSectionId]}
        onChangeSelectedSection={(newSectionId) => {
          handleChangeSectionId(newSectionId, true);
        }}
      />
      <MainContent selectedSection={SECTION_ID_TO_SECTION[selectedSectionId]} />
    </div>
  );
}

function Nav({
  selectedSection,
  onChangeSelectedSection,
}: {
  selectedSection: Section;
  onChangeSelectedSection: (newSectionId: SectionId) => void;
}) {
  return (
    <div className="nav hidden grow-0 flex-col gap-4 md:flex">
      {ORDERED_SECTIONS.map(({ id, name, color }) => (
        <div
          className="sliding-u-l-r-parent cursor-pointer"
          onClick={() => {
            onChangeSelectedSection(id);
          }}
          key={id}
        >
          <div
            className={classNames(
              "text-2xl sliding-u-l-r w-fit nav-link",
              color,
              selectedSection.id == id && "selected"
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
          id={section.id}
          key={section.id}
          className={classNames("grow-1 w-full")}
        >
          <div
            className={classNames(
              "text-white left-0 text-sm py-1 px-2 rounded-t-md w-fit relative top-1 shadow-md",
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
