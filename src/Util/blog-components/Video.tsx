import { ReactNode } from "react";

export default function Video({
  url,
  caption,
}: {
  url: string;
  caption: ReactNode;
}) {
  return (
    <div className="mb-4 flex w-full justify-center text-center">
      <div className="flex flex-col gap-1">
        <video src={url} className="w-full max-w-[400px]" controls autoPlay />
        <div className="text-sm">{caption}</div>
      </div>
    </div>
  );
}
