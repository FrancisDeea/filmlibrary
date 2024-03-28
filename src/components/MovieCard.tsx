/* eslint-disable @next/next/no-img-element */

import type { Movie, MovieCard } from "@/utils/definitions";

export default function MovieCard(props: Movie) {
  const {
    title,
    release_date: year,
    genre_ids: genres,
    poster_path,
    vote_average: rating,
  } = props;
  const formattedYear = year.slice(0, 4);
  const formattedRating = rating.toFixed(1);

  return (
    <article className="aspect-auto w-60 rounded-lg overflow-hidden relative grow cursor-pointer transition-all hover:scale-105 hover:saturate-150">
      <div className="absolute top-0 bottom-0 h-full w-full bg-gradient-to-b from-transparent from-50% via-black/60 to-black/80"></div>
      <div className="absolute top-2 left-2 bg-black rounded-md px-3 py-1">
        {formattedRating}
      </div>
      <img
        src={poster_path}
        alt={`poster of ${title} movie`}
        className="object-cover object-center bg-gradient-to-t bg-black"
      />
      <div className="absolute z-10 bottom-2 left-2">
        <span className="text-2xl font-semibold">{title}</span>
        <div className="flex flex-row gap-2">
          <span>{formattedYear}</span>
          <span>{genres}</span>
        </div>
      </div>
    </article>
  );
}
