import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { getMovieBySearch, getMovies } from "@/lib/data";
import { getMoviesResponse } from "@/lib/definitions";

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string };
}) {
  const page = searchParams?.page || "1";
  const query = searchParams?.query || "";
  let data: getMoviesResponse;
  let totalPages: number;

  if (query) {
    data = await getMovieBySearch(query, page);
    totalPages = data.total_pages;
  } else {
    data = await getMovies(null, page);
    totalPages = 500;
  }
  return (
    <>
      <div className="overflow-scroll h-full flex flex-wrap justify-center items-center gap-5">
        {data.results.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
