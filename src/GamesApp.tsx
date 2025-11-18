import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isValidGameSlug, GAMES } from "./sections/games-data";

export default function GamesApp() {
  const slug = useParams().slug;
  useEffect(() => {
    if (slug == null || !isValidGameSlug(slug)) {
      location.href = "/#games";
    }
  }, [slug]);

  const game = slug && isValidGameSlug(slug) ? GAMES[slug] : null;

  useEffect(() => {
    if (game) {
      document.title = `Eli Berkowitz - ${game.title}`;
    }
  }, [game]);

  return (
    <div className="flex h-full flex-col gap-4">
      <a
        href="/"
        target="_self"
        className="title no-underline-ani grow-0 text-4xl"
      >
        ELI BERKOWITZ
      </a>
      <div className="grow overflow-y-auto text-lg">
        <div className="mx-auto my-0 h-full max-w-[1000px] overflow-auto rounded-md bg-gray-50 p-4 shadow-md">
          {game && (
            <div className="flex flex-col gap-4">
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-bold">{game.title}</h2>
                <a target="_self" href="/#games">
                  Back
                </a>
              </div>
              {game.status && (
                <div className="text-sm italic text-gray-600">
                  {game.status}
                </div>
              )}
              <hr className="my-2 shrink-0 border-t-2 border-gray-200" />
              <game.Content />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
