import { createContext, useContext, useState, ReactNode } from "react";

type BlogFilterContextType = {
  filteredTags: Set<string>;
  setFilteredTags: (tags: Set<string>) => void;
};

const BlogFilterContext = createContext<BlogFilterContextType | undefined>(
  undefined
);

export function BlogFilterProvider({ children }: { children: ReactNode }) {
  const [filteredTags, setFilteredTags] = useState<Set<string>>(new Set());

  return (
    <BlogFilterContext.Provider value={{ filteredTags, setFilteredTags }}>
      {children}
    </BlogFilterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBlogFilter() {
  const context = useContext(BlogFilterContext);
  if (context === undefined) {
    throw new Error("useBlogFilter must be used within a BlogFilterProvider");
  }
  return context;
}
