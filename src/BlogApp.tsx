import { isValidSlugName, POSTS } from "./sections/posts";
import DetailPageLayout from "./Util/DetailPageLayout";

export default function BlogApp() {
  return (
    <DetailPageLayout
      items={POSTS}
      isValidSlug={isValidSlugName}
      backUrl="/#blog"
      renderContent={(post) => (
        <div>
          <div className="flex w-full justify-between">
            <h2 className="text-2xl">{post.title}</h2>
            <a target="_self" href="/#blog">
              Back
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">
              {post.date.toDateString()}
            </div>
          </div>
          <hr className="my-2 shrink-0 border-t-2 border-gray-200 " />
          <post.Content />
        </div>
      )}
    />
  );
}
