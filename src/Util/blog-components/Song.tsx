function stopProp(e: React.MouseEvent) {
  e.stopPropagation();
}

export default function Song({ src }: { src: string }) {
  return (
    <audio
      controls
      loop
      onMouseDown={stopProp}
      onClick={stopProp}
      src={src}
      preload="none"
      controlsList="nodownload"
    />
  );
}
