import { POSTS, SlugName } from "../../sections/posts";

export default function BlogPostLink({
  slug,
  titleOverride,
}: {
  slug: SlugName;
  titleOverride?: string;
}) {
  return (
    <a
      className="no-underline-ani text-my-blue transition-colors hover:text-black"
      href={`/blog/${slug}`}
    >
      {titleOverride ?? POSTS[slug].title}
    </a>
  );
}
