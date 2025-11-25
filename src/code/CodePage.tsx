export default function CodePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4">
      {children}
    </div>
  );
}
