import { useState } from "react";

export default function Section({
  initiallyOpen = false,
  isCollapsible = true,
  title,
  children,
}: {
  initiallyOpen?: boolean;
  isCollapsible?: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  // If not collapsible, always show content
  const [isOpen, setIsOpen] = useState(isCollapsible ? initiallyOpen : true);

  return (
    <section className="flex flex-col gap-3">
      {title && (
        <h3
          className={`flex items-center gap-2 text-xl font-semibold ${
            isCollapsible
              ? "cursor-pointer select-none transition-opacity hover:opacity-80"
              : ""
          }`}
          onClick={() => isCollapsible && setIsOpen(!isOpen)}
        >
          {isCollapsible && (
            <span
              className={`inline-block transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
          )}
          {title}
        </h3>
      )}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[12000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 pt-0">{children}</div>
      </div>
    </section>
  );
}
