import MovieList from "@/components/MovieList";
import { getMovieBySearch, getMovies } from "@/lib/data";
import { getMoviesResponse } from "@/lib/definitions";

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string };
}) {
  // The search params "page" and "query" come from the url through the searchParams object.
  const page = searchParams?.page || "1";
  const query = searchParams?.query || "";
  let data: getMoviesResponse;
  let totalPages: number;

  if (query) {
    // If there is a "query", use the right api to get movies by searches
    data = await getMovieBySearch(query, page);
    totalPages = data.total_pages;
  } else {
    // If not, get last movies ordered by default (popularity) and respecting "page" param
    data = await getMovies(null, page);
    // I set this value because I know there are more than 500 pages, and each page returns 20 movies: 500 * 20 = 10000
    totalPages = 500;
  }
  return (
    <div className="h-full">
      <MovieList list={data.results} totalPages={totalPages} />
    </div>
  );
}
