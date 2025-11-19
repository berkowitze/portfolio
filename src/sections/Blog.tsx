import classNames from "classnames";
import { POSTS, PostProps } from "./posts";
import { useBlogFilter } from "../contexts/BlogFilterContext";

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
  const { filteredTags, setFilteredTags } = useBlogFilter();

  return (
    <>
      <div>
        This is the blog of my progress and projects while at the Clark
        University MFA program. I add new posts a few times a week.
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-4">
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
      <div>
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
    </>
  );
}

function Post({
  title,
  slug,
  tags,
  date,
  summary,
}: PostProps & { slug: string }) {
  return (
    <a
      target="_self"
      href={`/blog/${slug}`}
      className="no-underline-ani my-4 block w-full rounded-sm p-4 transition-colors hover:bg-gray-100"
    >
      <h2 className="text-2xl">{title}</h2>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500">{date.toDateString()}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SmallTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <div>{summary}</div>
    </a>
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

function SmallTag({ tag }: { tag: string }) {
  return (
    <div
      className={classNames(
        "cursor-pointer select-none rounded-full px-2 py-0.5 text-sm transition-colors bg-blue-100 hover:bg-blue-300 whitespace-nowrap"
      )}
    >
      {tag}
    </div>
  );
}
