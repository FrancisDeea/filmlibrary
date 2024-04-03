/* eslint-disable @next/next/no-img-element */

import type { Movie, MovieCard } from "@/lib/definitions";
import { categoryDictionary } from "@/lib/utils";

export default function MovieCard(props: Movie) {
  const basePathImages = "https://image.tmdb.org/t/p/w500";
  const {
    title,
    release_date: year,
    genre_ids,
    poster_path,
    vote_average: rating,
  } = props;
  const formattedYear = year.slice(0, 4);
  const formattedRating = rating.toFixed(1);
  const genres = genre_ids.slice(0, 2);

  return (
    <article className="bg-pink-400 w-full max-w-64 max-sm:max-w-max rounded-lg overflow-hidden relative cursor-pointer transition-all hover:scale-95 hover:saturate-150">
      <div className="absolute top-0 bottom-0 h-full w-full bg-gradient-to-b from-transparent from-50% via-black/60 to-black/80"></div>
      <div className="absolute top-2 left-2 bg-black rounded-md px-3 py-1">
        {formattedRating}
      </div>
      <img
        src={`${basePathImages}${poster_path}`}
        alt={`poster of ${title} movie`}
        className="aspect-auto object-cover object-center bg-gradient-to-t bg-black"
        loading="lazy"
      />
      <div className="absolute z-10 bottom-2 left-2 flex flex-col gap-1">
        <div className="flex gap-2 text-sm">
          {genres.map((genre) => (
            <span key={genre} className="bg-red-600 px-2 rounded-xl">
              {categoryDictionary[genre]}
            </span>
          ))}
        </div>
        <span className="text-2xl font-semibold">{title}</span>
        <div className="flex flex-row gap-2">
          <span>{formattedYear}</span>
        </div>
      </div>
    </article>
  );
}
