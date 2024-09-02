import classNames from "classnames";
import { ReactNode, useState } from "react";
import Post1 from "./blog-posts/Post1";

const TAGS = [
  "Coding",
  "Art",
  "Music",
] as const satisfies ReadonlyArray<string>;
type Tag = (typeof TAGS)[number];

interface PostProps {
  title: ReactNode;
  Content: React.FC;
  date: Date;
  tags: Tag[];
}

const POSTS = [
  {
    title: "Seminar Project",
    Content: Post1,
    date: new Date("2024-09-2"),
    tags: ["Coding"],
  },
] as const satisfies ReadonlyArray<PostProps>;

export default function Blog() {
  const [filteredTags, setFilteredTags] = useState<Set<string>>(new Set());

  return (
    <>
      <div>
        As I start my Masters in Fine Arts at Clark University, I will be
        posting progress and project updates on this blog, roughly once a week.
      </div>
      <hr className="my-4" />
      <div className="flex gap-4">
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
        {POSTS.map((post) => {
          if (
            filteredTags.size === 0 ||
            post.tags.some((tag) => filteredTags.has(tag))
          ) {
            return <Post key={post.title.toString()} {...post} />;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

function Post({ title, Content, tags, date }: PostProps) {
  return (
    <div className="my-4">
      <h2 className="text-2xl">{title}</h2>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500">{date.toDateString()}</div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <SmallTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

interface TagProps {
  tag: Tag;
  isSelected: boolean;
  onSelect: () => void;
}

function Tag({ tag, isSelected, onSelect }: TagProps) {
  return (
    <div
      className={classNames(
        "cursor-pointer select-none rounded-full px-2 py-0.5 text-sm text-white transition-colors hover:bg-blue-600",
        isSelected ? "bg-blue-600" : "bg-blue-400"
      )}
      onClick={onSelect}
    >
      {tag}
    </div>
  );
}

function SmallTag({ tag }: { tag: string }) {
  return (
    <div
      className={classNames(
        "cursor-pointer select-none rounded-full px-2 py-0.5 text-sm transition-colors bg-blue-100 hover:bg-blue-300"
      )}
    >
      {tag}
    </div>
  );
}
