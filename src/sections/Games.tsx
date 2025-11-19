import { useInView } from "react-intersection-observer";
import { GAMES, GameSlug } from "./games-data";

const NUM_CONTRIBUTIONS_TO_SHOW = 5;

export default function Games() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {(Object.keys(GAMES) as GameSlug[]).map((slug) => (
        <GameCard key={slug} slug={slug} />
      ))}
    </div>
  );
}

function GameCard({ slug }: { slug: GameSlug }) {
  const game = GAMES[slug];
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <a
      href={`/games/${slug}`}
      target="_self"
      className="no-underline-ani group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
    >
      <div
        ref={ref}
        className="relative aspect-video w-full overflow-hidden bg-gray-100"
      >
        {inView &&
          (game.thumbnail.endsWith(".mp4") ? (
            <video
              src={game.thumbnail}
              className="size-full object-cover transition-transform group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={game.thumbnail}
              alt={game.title as string}
              className="size-full object-cover transition-transform group-hover:scale-105"
            />
          ))}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-xl font-bold text-black">{game.title}</h3>
        {game.status && (
          <div className="text-sm italic text-gray-600">{game.status}</div>
        )}
        <div className="flex flex-wrap gap-1">
          {game.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-1">
          <div className="text-sm font-semibold text-gray-700">
            Contributions:
          </div>
          <ul className="mt-1 list-inside list-disc text-sm text-gray-600">
            {game.contributions
              .slice(0, NUM_CONTRIBUTIONS_TO_SHOW)
              .map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            {game.contributions.length > NUM_CONTRIBUTIONS_TO_SHOW && (
              <li className="text-gray-500">
                +{game.contributions.length - NUM_CONTRIBUTIONS_TO_SHOW} more...
              </li>
            )}
          </ul>
        </div>
        <div className="absolute bottom-0 right-0 p-4 text-right text-sm text-blue-600 transition-colors group-hover:text-blue-800">
          See more →
        </div>
      </div>
    </a>
  );
}
