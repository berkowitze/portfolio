import { useCallback, useState } from "react";
import range from "../range";

export default function ClickableGallery({
  pathTemplate,
  min,
  max,
}: {
  pathTemplate: string;
  min: number;
  max: number;
}): JSX.Element {
  const [imageIndex, setImageIndex] = useState(min);

  const increment = useCallback(() => {
    setImageIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > max) {
        newIndex = min;
      }
      return newIndex;
    });
  }, [min, max]);

  const decrement = useCallback(() => {
    setImageIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < min) {
        newIndex = max;
      }
      return newIndex;
    });
  }, [min, max]);

  // const handleKeydown = useCallback(
  //   (event: KeyboardEvent) => {
  //     if (event.key === "ArrowLeft") {
  //       decrement();
  //     } else if (event.key === "ArrowRight") {
  //       increment();
  //     }
  //   },
  //   [increment, decrement]
  // );

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeydown);
  //   return () => window.removeEventListener("keydown", handleKeydown);
  // }, [handleKeydown]);

  return (
    <div className="relative mx-auto max-w-[600px]">
      {/* Image Container */}
      <div className="flex h-[400px] items-center justify-center">
        <img
          className="h-full max-w-full object-contain"
          src={pathTemplate.replace("{}", imageIndex.toString())}
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 flex w-full flex-col">
        <div className="mb-2 flex items-center gap-2 self-center rounded-md bg-white/70 px-2 py-1">
          <button
            className="cursor-pointer rounded-full border border-none px-2 text-xl transition-colors"
            onClick={decrement}
          >
            &lt;
          </button>
          {range(max - min + 1).map((index) => (
            <div
              key={index + min}
              onClick={() => {
                setImageIndex(min + index);
              }}
              className={`size-3 shrink-0 grow-0 cursor-pointer rounded-full border border-gray-600 transition-colors ${
                min + index === imageIndex ? "bg-my-blue/60" : ""
              }`}
            />
          ))}

          <button
            className="cursor-pointer rounded-full border border-none px-2 text-xl transition-colors"
            onClick={increment}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
