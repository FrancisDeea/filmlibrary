import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { getMovies } from "@/lib/data";
import { findIdByCategory } from "@/lib/utils";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const id: string | undefined = findIdByCategory(params.category);
  const data = await getMovies(id, searchParams.page);
  const totalPages = 200;
  return (
    <>
      <div className="overflow-scroll h-full flex flex-wrap justify-between gap-5">
        {data.results.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
        <Pagination totalPages={totalPages} category={params.category} />
      </div>
    </>
  );
}
