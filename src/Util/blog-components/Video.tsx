import classNames from "classnames";
import { ReactNode } from "react";

export default function Video({
  url,
  caption,
  poster,
  autoPlay,
  loop,
  preload,
  size = "medium",
}: {
  url: string;
  poster?: string;
  caption: ReactNode;
  autoPlay?: boolean;
  preload?: boolean;
  loop?: boolean;
  size?: "small" | "medium" | "large" | "full";
}) {
  return (
    <div
      className={classNames(
        "mb-4 flex justify-center text-center",
        size === "full" && "w-full"
      )}
    >
      <div className="flex flex-col gap-1">
        <video
          preload={preload || autoPlay ? "all" : "none"}
          src={url}
          className={classNames(
            "shrink-0 h-auto w-full",
            size === "full"
              ? "w-full"
              : size === "large"
              ? "max-w-[700px]"
              : size === "medium"
              ? "max-w-[500px]"
              : "max-w-[400px]"
          )}
          controls
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted
          playsInline
        />
        <div className="text-sm">{caption}</div>
      </div>
    </div>
  );
}
