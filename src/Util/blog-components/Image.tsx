import classNames from "classnames";
import { ReactNode } from "react";

export default function Image({
  src,
  captionSrc,
  altText,
  large,
  caption,
  lazy = false,
  pixelated,
}: {
  src: string;
  captionSrc?: string;
  altText: string;
  large?: boolean;
  caption?: ReactNode;
  lazy?: boolean;
  pixelated?: boolean;
}) {
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-1">
      <div className="flex w-full justify-center">
        <img
          alt={altText}
          className={classNames(
            "w-full",
            pixelated && "pixelated",
            large ? "max-w-[1000px]" : "max-w-[400px]"
          )}
          loading={lazy ? "lazy" : "eager"}
          src={src}
        />
      </div>
      {(captionSrc || caption) && (
        <div className="text-center text-sm">
          {caption != null ? caption : <a href={captionSrc}>Image source</a>}
        </div>
      )}
    </div>
  );
}
