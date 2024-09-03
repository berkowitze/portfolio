import { ReactNode } from "react";

export default function Video({
  url,
  caption,
  poster,
}: {
  url: string;
  poster?: string;
  caption: ReactNode;
}) {
  return (
    <div className="mb-4 flex w-full justify-center text-center">
      <div className="flex flex-col gap-1">
        <video
          preload="none"
          src={url}
          className="w-full max-w-[400px]"
          controls
          poster={poster}
        />
        <div className="text-sm">{caption}</div>
      </div>
    </div>
  );
}
