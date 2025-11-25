import { isValidGameSlug, GAMES } from "./sections/games-data";
import DetailPageLayout from "./Util/DetailPageLayout";

export default function GamesApp() {
  return (
    <DetailPageLayout
      items={GAMES}
      isValidSlug={isValidGameSlug}
      backUrl="/#games"
      getSubheader={(game) =>
        game.status ? (
          <div className="text-sm italic text-gray-600">{game.status}</div>
        ) : undefined
      }
      renderContent={(game) => <game.Content />}
    />
  );
}
