export default function DetailPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 px-4">{children}</div>
  );
}
