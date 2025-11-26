import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { CardFooterStyle } from "./CardFooterStyle";

interface CardProps {
  href?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tags?: string[];
  description?: ReactNode;
  contributions?: string[];
  cardFooterStyle: CardFooterStyle;
}

export default function Card({
  href,
  thumbnail,
  thumbnailAlt,
  title,
  subtitle,
  tags,
  description,
  contributions,
  cardFooterStyle = CardFooterStyle.NONE,
}: CardProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const isVideo =
    thumbnail && (thumbnail.endsWith(".mp4") || thumbnail.endsWith(".m4a"));

  const cardContent = (
    <>
      {thumbnail && (
        <div
          ref={ref}
          className="relative aspect-video w-full overflow-hidden bg-gray-100"
        >
          {inView &&
            (isVideo ? (
              <video
                src={thumbnail}
                className="size-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={thumbnail}
                alt={
                  thumbnailAlt ||
                  (typeof title === "string" ? title : "Card thumbnail")
                }
                className="size-full object-cover"
              />
            ))}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          {subtitle && (
            <div className="text-sm italic text-gray-600">{subtitle}</div>
          )}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {description && (
          <div className="line-clamp-3 text-sm text-gray-600">
            {description}
          </div>
        )}
        {contributions && contributions.length > 0 && (
          <div className="mt-1">
            {/* <div className="text-sm font-semibold text-gray-700">
              Highlights
            </div> */}
            <ul className="mt-1 list-inside list-disc text-sm text-gray-600">
              {contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {cardFooterStyle !== CardFooterStyle.NONE && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden">
            <div className="translate-y-full whitespace-nowrap rounded-t-md bg-gray-800/50 px-2 py-px text-lg font-bold text-white backdrop-blur-sm transition-transform duration-300 ease-out [font-variant:small-caps] group-hover:translate-y-0">
              {cardFooterStyle === CardFooterStyle.SEE_MORE
                ? "see more"
                : "open site"}
            </div>
          </div>
        </>
      )}
    </>
  );

  const cardClassName =
    "no-underline-ani group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md";

  if (href) {
    const isInternal = href.startsWith("/");
    return (
      <a
        href={href}
        target={isInternal ? "_self" : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className={cardClassName}
      >
        {cardContent}
      </a>
    );
  }

  return <div className={cardClassName}>{cardContent}</div>;
}
