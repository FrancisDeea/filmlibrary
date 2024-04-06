import MovieList from "@/components/MovieList";
import { getMovies } from "@/lib/data";
import { findIdByCategory } from "@/lib/utils";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | undefined };
}) {
  // The search params "page" and the dynamic route param "category" come from the url
  // This util function takes a category and returns its id to use it in the api getMovies
  const id: string | undefined = findIdByCategory(params.category);
  const data = await getMovies(id, searchParams.page);
  const totalPages = 200;
  return (
    <div className="h-full">
      <MovieList list={data.results} totalPages={totalPages} />
    </div>
  );
}
