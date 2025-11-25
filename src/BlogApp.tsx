import { isValidSlugName, POSTS } from "./sections/posts";
import DetailPageLayout from "./Util/DetailPageLayout";

export default function BlogApp() {
  return (
    <DetailPageLayout
      items={POSTS}
      isValidSlug={isValidSlugName}
      backUrl="/blog"
      getSubheader={(post) => (
        <div className="text-sm text-gray-500">
          {post.date.toDateString()}
        </div>
      )}
      renderContent={(post) => <post.Content />}
    />
  );
}
