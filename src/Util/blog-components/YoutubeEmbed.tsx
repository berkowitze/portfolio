import classNames from "classnames";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YoutubeEmbed({
  videoId,
  title,
  size = "large",
  center = false,
}: {
  videoId: string;
  title: string;
  size?: "small" | "large" | "full";
  center?: boolean;
}) {
  return (
    <div
      className={classNames(
        "w-full mb-1",
        center && "mx-auto",
        size == "full"
          ? "max-w-[1200px]"
          : size == "small"
          ? "max-w-[500px]"
          : "max-w-[700px]"
      )}
    >
      <LiteYouTubeEmbed id={videoId} title={title} />
    </div>
  );
}
