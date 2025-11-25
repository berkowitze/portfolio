import { useEffect, ReactNode } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "./PageLayout";

interface DetailPageLayoutProps<
  T extends { title: ReactNode; Content: React.ComponentType }
> {
  items: Record<string, T>;
  isValidSlug: (slug: string) => boolean;
  backUrl: string;
  renderContent: (item: T) => React.ReactNode;
  getSubheader?: (item: T) => ReactNode;
}

export default function DetailPageLayout<
  T extends { title: ReactNode; Content: React.ComponentType }
>({
  items,
  isValidSlug,
  backUrl,
  renderContent,
  getSubheader,
}: DetailPageLayoutProps<T>) {
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

  const pageTitle = item
    ? typeof item.title === "string"
      ? item.title
      : "Portfolio"
    : "Portfolio";

  const subheader = item && getSubheader ? getSubheader(item) : undefined;

  return (
    <PageLayout title={pageTitle} subheader={subheader}>
      {item && renderContent(item)}
    </PageLayout>
  );
}
