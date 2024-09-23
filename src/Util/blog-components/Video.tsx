import classNames from "classnames";
import { ReactNode } from "react";

export default function Video({
  url,
  caption,
  poster,
  autoPlay,
  loop,
  large,
}: {
  url: string;
  poster?: string;
  caption: ReactNode;
  autoPlay?: boolean;
  loop?: boolean;
  large?: boolean;
}) {
  return (
    <div className="mb-4 flex w-full justify-center text-center">
      <div className="flex flex-col gap-1">
        <video
          preload="none"
          src={url}
          className={classNames(
            "w-full",
            large ? "max-w-[700px]" : "max-w-[400px]"
          )}
          controls
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
        />
        <div className="text-sm">{caption}</div>
      </div>
    </div>
  );
}
