import MovieCard from "@/components/MovieCard";
import { getMovies } from "@/utils/data";

export default async function Home() {
  const data = await getMovies();
  console.log(data.results);
  return (
    <div className="overflow-scroll h-full flex flex-wrap justify-between gap-5 p-4">
      {data.results.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </div>
  );
}
