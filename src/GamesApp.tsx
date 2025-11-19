import { isValidGameSlug, GAMES } from "./sections/games-data";
import DetailPageLayout from "./Util/DetailPageLayout";

export default function GamesApp() {
  return (
    <DetailPageLayout
      items={GAMES}
      isValidSlug={isValidGameSlug}
      backUrl="/#games"
      renderContent={(game) => (
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between">
            <h2 className="text-2xl font-bold">{game.title}</h2>
            <a target="_self" href="/#games">
              Back
            </a>
          </div>
          {game.status && (
            <div className="text-sm italic text-gray-600">{game.status}</div>
          )}
          <hr className="my-2 shrink-0 border-t-2 border-gray-200" />
          <game.Content />
        </div>
      )}
    />
  );
}
