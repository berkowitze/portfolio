import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isValidSlugName, POSTS } from "./sections/posts";

export default function BlogApp() {
  const slug = useParams().slug;
  useEffect(() => {
    if (slug == null || !isValidSlugName(slug)) {
      location.href = "/#blog";
    }
  }, [slug]);

  const post = slug && isValidSlugName(slug) ? POSTS[slug] : null;

  useEffect(() => {
    if (post) {
      document.title = `Eli Berkowitz - ${post.title}`;
    }
  }, [post]);

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
          {post && (
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
        </div>
      </div>
    </div>
  );
}
