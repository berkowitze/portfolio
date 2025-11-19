import classNames from "classnames";
import { ReactNode } from "react";

export default function Video({
  url,
  caption,
  poster,
  autoPlay,
  loop,
  preload,
  large,
  fullWidth = true,
}: {
  url: string;
  poster?: string;
  caption: ReactNode;
  autoPlay?: boolean;
  preload?: boolean;
  loop?: boolean;
  large?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={classNames(
        "mb-4 flex justify-center text-center",
        fullWidth && "w-full"
      )}
    >
      <div className="flex flex-col gap-1">
        <video
          preload={preload || autoPlay ? "all" : "none"}
          src={url}
          className={classNames(
            "w-full",
            large ? (fullWidth ? "" : "max-w-[700px]") : "max-w-[500px]"
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
