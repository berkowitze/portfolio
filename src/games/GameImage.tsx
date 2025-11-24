export default function GameImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      className="h-auto max-w-[400px]"
      style={{ maxWidth: "min(400px, 100%)" }}
    />
  );
}
