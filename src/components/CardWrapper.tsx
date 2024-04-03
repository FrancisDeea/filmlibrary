import { getMovies } from "@/lib/data";
import MovieCard from "./MovieCard";

export default async function CardWrapper({ page }: { page: string }) {
  const data = await getMovies(null, page);

  return (
    <>
      {data.results.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </>
  );
}
