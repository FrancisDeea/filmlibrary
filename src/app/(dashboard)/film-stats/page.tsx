import { getMovies, getTopMovies } from "@/lib/data";
import dynamic from "next/dynamic";

const DynamicTopMoviesChart = dynamic(
  () => import("@/components/TopMoviesChart"),
  { ssr: false }
);
const DynamicDoughnutChart = dynamic(
  () => import("@/components/DoughnutChart"),
  { ssr: false }
);

export default async function FilmStats() {
  const topMovies2023 = await getTopMovies(2023);
  const topMovies2022 = await getTopMovies(2022);
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
    <div className="flex flex-wrap gap-2 overflow-scroll h-full max-sm:pb-28">
      <DynamicTopMoviesChart
        chartData={topMovies2023}
        year={2023}
        orientation="horizontal"
      />
      <DynamicDoughnutChart chartData={chartData} />
      <DynamicTopMoviesChart
        chartData={topMovies2022}
        year={2022}
        orientation="vertical"
      />
    </div>
  );
}
