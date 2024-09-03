import classNames from "classnames";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YoutubeEmbed({
  videoId,
  size = "large",
}: {
  videoId: string;
  size?: "small" | "large";
}) {
  return (
    <div
      className={classNames(
        "w-full mb-1",
        size == "small" ? "max-w-[400px]" : "max-w-[500px]"
      )}
    >
      <LiteYouTubeEmbed id={videoId} title="hi" />
    </div>
  );
}
