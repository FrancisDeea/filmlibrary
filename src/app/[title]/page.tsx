/* eslint-disable @next/next/no-img-element */
import { getMovieBySearch } from "@/lib/data";
import { categoryDictionary } from "@/lib/utils";

export default async function Page({ params }: { params: { title: string } }) {
  const { results } = await getMovieBySearch(params.title);
  const movie = results[0];
  const genres = movie.genre_ids
    .map((genre) => categoryDictionary[genre])
    .join(", ");
  const year = new Date(movie.release_date).getFullYear();
  const formattedRating = movie.vote_average.toFixed(1);
  console.log(movie);

  return (
    <div className="overflow-y-scroll flex flex-row flex-wrap justify-center items-center gap-6 h-full relative p-4 pb-[100px]">
      <div className="relative overflow-hidden flex-1 shrink basis-60 z-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`poster of ${movie.poster_path}`}
          className="max-w-72 max-sm:max-w-44 w-full rounded-xl m-auto"
        />
      </div>
      <div className="flex-[2] basis-80 flex flex-col gap-2 z-10 max-sm:pb-20">
        <div className="bg-red-600 rounded-md px-3 py-1 w-max font-semibold text-lg">
          {formattedRating}
        </div>
        <h1 className="text-4xl font-semibold">
          {movie.title} ({year})
        </h1>
        <p>Categories: {genres}</p>
        <p className="text-xl max-w-3xl">{movie.overview}</p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={`backdrop of ${movie.title}`}
        className="absolute inset-0 w-full h-full max-[920px]:h-auto object-cover z-0 brightness-[.25]"
      />
    </div>
  );
}
