import { useEffect, ReactNode } from "react";
import { useParams } from "react-router-dom";

interface DetailPageLayoutProps<
  T extends { title: ReactNode; Content: React.ComponentType }
> {
  items: Record<string, T>;
  isValidSlug: (slug: string) => boolean;
  backUrl: string;
  renderContent: (item: T) => React.ReactNode;
}

export default function DetailPageLayout<
  T extends { title: ReactNode; Content: React.ComponentType }
>({ items, isValidSlug, backUrl, renderContent }: DetailPageLayoutProps<T>) {
  const slug = useParams().slug;

  useEffect(() => {
    if (slug == null || !isValidSlug(slug)) {
      location.href = backUrl;
    }
  }, [slug, isValidSlug, backUrl]);

  const item = slug && isValidSlug(slug) ? items[slug] : null;

  useEffect(() => {
    if (item) {
      const titleText =
        typeof item.title === "string" ? item.title : "Portfolio";
      document.title = `Eli Berkowitz - ${titleText}`;
    }
  }, [item]);

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
          {item && renderContent(item)}
        </div>
      </div>
    </div>
  );
}
