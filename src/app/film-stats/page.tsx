import DoughnutChart from "@/components/DoughnutChart";
// import TopMoviesChart from "@/components/TopMoviesChart";
import { getMovies } from "@/lib/data";
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
      <DynamicTopMoviesChart year={2023} orientation="horizontal" />
      <DynamicDoughnutChart chartData={chartData} />
      <DynamicTopMoviesChart year={2022} orientation="vertical" />
    </div>
  );
}
