export default function GameImage({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <div
      style={{ maxWidth: "min(400px, 100%)" }}
      className="flex shrink-0 flex-col items-center gap-1"
    >
      <img src={src} className="h-auto" />
      {caption && <p className="text-center text-sm">{caption}</p>}
    </div>
  );
}
