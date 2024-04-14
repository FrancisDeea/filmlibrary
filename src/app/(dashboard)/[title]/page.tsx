/* eslint-disable @next/next/no-img-element */
import { getMovieBySearch } from "@/lib/data";
import { categoryDictionary } from "@/lib/utils";

export default async function Page({ params }: { params: { title: string } }) {
  // Get movie from title typed in search input. Search component updates url
  const { results } = await getMovieBySearch(params.title);
  const movie = results[0];

  // Recover genres from ids categories
  const genres = movie.genre_ids
    .map((genre) => categoryDictionary[genre])
    .join(", ");

  const year = new Date(movie.release_date).getFullYear();

  const formattedRating = Number(movie.vote_average.toFixed(1));
  const ratingBackground =
    formattedRating < 6
      ? "bg-red-600"
      : formattedRating > 5 && formattedRating < 7.5
      ? "bg-orange-400"
      : "bg-green-600";

  return (
    <div className="overflow-y-auto ct-flex-row flex-wrap min-h-full h-full relative p-4 z-0">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-background2 from-50% to-transparent z-10 sm:hidden"></div>

      <img
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={`backdrop of ${movie.title}`}
        className="absolute inset-0 w-full h-full max-sm:h-1/2 object-cover brightness-[.25]"
      />

      <div className="flex-[34%] flex items-center relative overflow-hidden z-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`poster of ${movie.poster_path}`}
          className="w-full basis-52 max-w-64 grow rounded-xl m-auto aspect-[1/1.5] object-cover"
        />
      </div>

      <div className="flex-[64%] text-white ct-flex-col z-10 max-sm:pb-28">
        <div
          className={`${ratingBackground} rounded-md px-3 py-1 w-max font-semibold text-lg`}
        >
          {formattedRating}
        </div>
        <h1 className="text-4xl font-semibold">
          {movie.title} ({year})
        </h1>
        <p>Categories: {genres}</p>
        <p className="leading-8 max-sm:leading-8 text-xl max-sm:text-lg max-w-3xl">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
