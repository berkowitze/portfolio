import { ReactNode } from "react";

export default function Image({
  src,
  caption,
}: {
  src: string;
  caption?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-1">
      <div className="flex w-full justify-center">
        <img className="w-full max-w-[400px]" src={src} />
      </div>
      {caption && (
        <div className="text-center text-sm">
          <a href={src}>Image source</a>
        </div>
      )}
    </div>
  );
}
