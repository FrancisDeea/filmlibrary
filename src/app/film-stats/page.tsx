import DoughnutChart from "@/components/DoughnutChart";
import TopMoviesChart from "@/components/TopMoviesChart";
import { getMovies } from "@/lib/data";

export default async function FilmStats() {
  const totalMoviesResponses = await Promise.all([
    getMovies("28"),
    getMovies("12"),
    getMovies("16"),
    getMovies("27"),
  ]);

  const chartData = totalMoviesResponses.map((response) => {
    return { genre: response.genre as string, count: response.total_results };
  });

  return (
    <div className="flex flex-wrap gap-2 overflow-scroll h-full max-sm:pb-[100px]">
      <TopMoviesChart year={2023} orientation="horizontal"/>
      <DoughnutChart chartData={chartData} />
      <TopMoviesChart year={2022} orientation="vertical"/>
    </div>
  );
}
