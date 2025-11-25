import classNames from "classnames";
import { POSTS, PostProps } from "./posts";
import Card from "../Util/Card";
import { CardFooterStyle } from "../Util/CardFooterStyle";

const TAGS = [
  "Coding",
  "Art",
  "Music",
  "C++ Raytracer",
  "C++ Rasterizer",
  "Houdini",
] as const satisfies ReadonlyArray<string>;
export type Tag = (typeof TAGS)[number];

export default function Blog() {
  // Select specific highlighted posts: raytracer, rasterizer, and houdini
  const highlightedPostSlugs = [
    "seminar-project-final", // Raytracer
    "semester-2-week-4", // Rasterizer
    "shattering-glass", // Houdini
  ] as const;

  const highlightedPosts = highlightedPostSlugs
    .map((slug) => [slug, POSTS[slug]] as const)
    .filter(([, post]) => post !== undefined);

  return (
    <>
      {/* <div>
        This is the blog of my progress and projects while at the Clark
        University MFA program.
      </div> */}
      {/* <hr className="my-4" /> */}
      {/* <h3 className="mb-4 text-xl font-semibold">Highlighted Blog Posts</h3> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlightedPosts.map(([slug, post]) => (
          <Post key={post.title.toString()} {...post} slug={slug} />
        ))}
      </div>
      <div className="mt-6">
        <a
          href="/blog"
          target="_self"
          className="no-underline-ani text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline"
        >
          View all blog posts →
        </a>
      </div>
    </>
  );
}

function Post({
  title,
  slug,
  tags,
  date,
  summary,
  thumbnail,
}: PostProps & { slug: string }) {
  return (
    <Card
      href={`/blog/${slug}`}
      thumbnail={thumbnail}
      thumbnailAlt={typeof title === "string" ? title : "Blog post thumbnail"}
      title={title}
      subtitle={date.toDateString()}
      tags={tags}
      description={summary}
      cardFooterStyle={CardFooterStyle.SEE_MORE}
    />
  );
}

interface TagProps {
  tag: Tag;
  isSelected: boolean;
  onSelect: () => void;
}

export function Tag({ tag, isSelected, onSelect }: TagProps) {
  return (
    <button
      className={classNames(
        "cursor-pointer select-none rounded-full px-2 py-0.5 text-sm text-white transition-colors hover:bg-blue-600 whitespace-nowrap",
        isSelected ? "bg-blue-600" : "bg-blue-400"
      )}
      onClick={onSelect}
    >
      {tag}
    </button>
  );
}
