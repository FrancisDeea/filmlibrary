/* eslint-disable @next/next/no-img-element */

import type { Movie, MovieCard } from "@/lib/definitions";
import { categoryDictionary, getSlug } from "@/lib/utils";
import Link from "next/link";

export default function MovieCard(props: Movie) {
  // Base path from api to get movie images. Add poster_path prop to complete each link to the image.
  const basePathApiImages = "https://image.tmdb.org/t/p/w500";
  // Get data movie from its props and formate to show them
  const {
    title,
    release_date: year,
    genre_ids,
    poster_path,
    vote_average: rating,
  } = props;

  // This util function take a movie title and returns a slug to link to its dynamic [title] page
  const slug = getSlug(title);
  const genres = genre_ids.slice(0, 2);
  const formattedYear = year.slice(0, 4);
  const formattedRating = Number(rating.toFixed(1));

  const ratingBackground =
    formattedRating < 6
      ? "bg-red-600"
      : formattedRating > 5 && formattedRating < 7.5
      ? "bg-orange-400"
      : "bg-green-600";

  return (
    <Link href={`/${slug}`} className="flex-[18%] basis-52">
      <article className="w-full rounded-lg overflow-hidden relative cursor-pointer transition-all hover:scale-95 hover:saturate-150">
        {/* Add a dark gradient across a div to improve info visibility */}
        <div className="movie-gradient"></div>
        <div
          className={`absolute top-2 left-2 ${ratingBackground} text-white font-semibold rounded-md px-3 py-1`}
        >
          {formattedRating}
        </div>

        <img
          src={`${basePathApiImages}${poster_path}`}
          alt={`poster of ${title} movie`}
          className="w-full aspect-[1/1.5] object-cover object-center"
          loading="lazy"
        />

        <div className="absolute z-10 bottom-2 left-2 flex flex-col gap-1">
          <div className="flex gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="bg-red-900 px-2 rounded-xl text-sm text-white font-medium"
              >
                {categoryDictionary[genre]}
              </span>
            ))}
          </div>
          <span className="text-xl font-semibold text-white">{title}</span>
          <span className="font-medium text-white">{formattedYear}</span>
        </div>
      </article>
    </Link>
  );
}
