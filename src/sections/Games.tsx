import { GAMES, GameSlug } from "./games-data";
import Card from "../Util/Card";
import { CardFooterStyle } from "../Util/CardFooterStyle";

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

  return (
    <Card
      href={`/games/${slug}`}
      thumbnail={game.thumbnail}
      thumbnailAlt={game.title as string}
      title={game.title}
      subtitle={game.status}
      tags={game.tools}
      contributions={game.contributions}
      cardFooterStyle={CardFooterStyle.SEE_MORE}
    />
  );
}
