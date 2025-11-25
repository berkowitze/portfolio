import classNames from "classnames";
import { useEffect } from "react";
import { POSTS, PostProps } from "./sections/posts";
import { useBlogFilter } from "./contexts/BlogFilterContext";
import { BlogFilterProvider } from "./contexts/BlogFilterContext";
import Card from "./Util/Card";
import { CardFooterStyle } from "./Util/CardFooterStyle";
import PageLayout from "./Util/PageLayout";

const TAGS = [
  "Coding",
  "Art",
  "Music",
  "C++ Raytracer",
  "C++ Rasterizer",
  "Houdini",
] as const satisfies ReadonlyArray<string>;
export type Tag = (typeof TAGS)[number];

function BlogPageContent() {
  const { filteredTags, setFilteredTags } = useBlogFilter();

  useEffect(() => {
    document.title = "Eli Berkowitz - Blog";
  }, []);

  return (
    <PageLayout title="Blog">
      <div className="mb-6 flex flex-wrap gap-4">
        {TAGS.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            isSelected={filteredTags.has(tag)}
            onSelect={() => {
              const newTags = new Set(filteredTags);
              if (newTags.has(tag)) {
                newTags.delete(tag);
              } else {
                newTags.add(tag);
              }
              setFilteredTags(newTags);
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(POSTS)
          .sort((p1, p2) => p2[1].date.getTime() - p1[1].date.getTime())
          .map(([slug, post]) => {
            if (
              filteredTags.size === 0 ||
              post.tags.some((tag) => filteredTags.has(tag))
            ) {
              return <Post key={post.title.toString()} {...post} slug={slug} />;
            } else {
              return null;
            }
          })}
      </div>
    </PageLayout>
  );
}

export default function BlogPage() {
  return (
    <BlogFilterProvider>
      <BlogPageContent />
    </BlogFilterProvider>
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
