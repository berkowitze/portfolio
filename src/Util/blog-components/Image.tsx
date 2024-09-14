import classNames from "classnames";
import { ReactNode } from "react";

export default function Image({
  src,
  caption,
  altText,
  large,
}: {
  src: string;
  caption?: ReactNode;
  altText: string;
  large?: boolean;
}) {
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-1">
      <div className="flex w-full justify-center">
        <img
          alt={altText}
          className={classNames(
            "w-full",
            large ? "max-w-[1000px]" : "max-w-[400px]"
          )}
          src={src}
        />
      </div>
      {caption && (
        <div className="text-center text-sm">
          <a href={src}>Image source</a>
        </div>
      )}
    </div>
  );
}
