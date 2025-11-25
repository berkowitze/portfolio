import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
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
        <div className="mx-auto my-0 h-full max-w-[1200px] overflow-auto rounded-md bg-gray-50 p-4 shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
