export default function GameImage({ src }: { src: string }) {
  return <img src={src} className="aspect-auto h-fit max-w-[400px]" />;
}
