import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { getMovies } from "@/lib/data";

export default async function Home({
  searchParams
}: {
  searchParams: { page: number };
}) {
  const page = Number(searchParams.page) || 1
  const data = await getMovies(null, page);
  // const ITEMS_PER_PAGE = 20;
  const totalPages = 500
  return (
    <>
      <div className="overflow-scroll h-full flex flex-wrap justify-between gap-5 p-4 pb-12">
        {data.results.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
