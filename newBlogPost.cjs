// Tasks: Run Task > New Blog Post

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const TEMPLATE = `import { Header2, UnorderedList } from "../Util/blog-components/Markup";

export default function Post14() {
  return (
    <div className="flex flex-col gap-2"></div>
  );
}
`;

const BLOG_POSTS_DIR = path.join(__dirname, "src", "blog-posts");
const POSTS_SECTION_PATH = path.join(__dirname, "src", "sections", "posts.tsx");

function createNewBlogPost() {
  if (!fs.existsSync(BLOG_POSTS_DIR)) {
    console.error(`Blog posts directory does not exist: ${BLOG_POSTS_DIR}`);
    return;
  }

  // Find the highest Post[n].tsx
  const files = fs.readdirSync(BLOG_POSTS_DIR);
  const postNumbers = files
    .map((file) => {
      const match = file.match(/^Post(\d+)\.tsx$/);
      return match ? parseInt(match[1], 10) : null;
    })
    .filter((n) => n !== null);

  const nextPostNumber = postNumbers.length ? Math.max(...postNumbers) + 1 : 1;
  const newPostFileName = `Post${nextPostNumber}.tsx`;
  const newPostPath = path.join(BLOG_POSTS_DIR, newPostFileName);

  // Create the new file
  fs.writeFileSync(newPostPath, TEMPLATE);

  console.log(`Created: ${newPostPath}`);
  console.log(`Opening: ${POSTS_SECTION_PATH}`);
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const newObject = `"TODO: SLUG": {
    title: "TODO: TITLE",
    summary:
      "TODO: SUMMARY",
    Content: Post${nextPostNumber},
    date: new Date("${date}"),
    tags: ["Coding", "Art"],
  }`;

  // Find line in posts.tsx that is equal to "} as const satisfies Record<string, PostProps>;"
  const postsSection = fs.readFileSync(POSTS_SECTION_PATH, "utf8");
  const line = postsSection
    .split("\n")
    .find((line) =>
      line.includes("} as const satisfies Record<string, PostProps>")
    );
  const index = postsSection.indexOf(line);
  const newPostsSection =
    postsSection.slice(0, index) + newObject + postsSection.slice(index);
  fs.writeFileSync(POSTS_SECTION_PATH, newPostsSection);

  // Open posts.tsx (requires 'code' command installed)
  exec(`code ${POSTS_SECTION_PATH}`, (err) => {
    if (err) {
      console.error("Failed to open posts.tsx:", err);
    }
  });
}

createNewBlogPost();
