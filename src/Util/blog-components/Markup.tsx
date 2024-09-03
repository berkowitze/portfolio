import { ReactNode } from "react";

export function OrderedList({
  children,
}: {
  children: Array<ReactNode> | ReactNode;
}): JSX.Element {
  return <ol className="mb-4 ml-6 list-decimal sm:ml-10">{children}</ol>;
}

export function UnorderedList({
  children,
}: {
  children: Array<ReactNode> | ReactNode;
}): JSX.Element {
  return <ul className="mb-4 ml-6 list-disc sm:ml-10">{children}</ul>;
}

export function Header2({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 text-xl">{children}</h2>;
}
