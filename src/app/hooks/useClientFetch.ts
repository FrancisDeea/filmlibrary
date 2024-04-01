import { useEffect, useState } from "react";
import type { getMoviesResponse } from "@/lib/definitions";
import { getTopMovies } from "@/lib/data";

export default function useClientFetch(year: number) {
  const [response, setResponse] = useState<getMoviesResponse | null>(null);
  const movies = response?.results.slice(0, 10);
  const chartData = movies?.map((movie) => {
    return { title: movie.title, votes: movie.vote_count };
  });

  useEffect(() => {
    (async () => {
      const fetchResponse = await getTopMovies(year);
      setResponse(fetchResponse);
    })();
  }, [year]);

  return [chartData];
}
