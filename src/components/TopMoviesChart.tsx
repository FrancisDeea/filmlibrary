"use client";

import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  layouts,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export default function TopMoviesChart({
  chartData,
  orientation,
  year,
}: {
  chartData: {
    title: string;
    votes: number;
  }[];
  orientation: "vertical" | "horizontal";
  year: number;
}) {
  const axis = orientation === "horizontal" ? ("y" as const) : ("x" as const);

  const options = {
    indexAxis: axis,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Top 10 most voted movies of ${year}`,
      },
    },
    layout: {
      padding: 20,
    },
  };

  const data = {
    labels: chartData?.map((obj) => obj.title),
    datasets: [
      {
        barPercentage: 0.7,
        label: "# of votes",
        data: chartData?.map((obj) => obj.votes),
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(42, 144, 226, 0.3)",
          "rgba(156, 39, 176, 0.3)",
          "rgba(0, 188, 212, 0.3)",
          "rgba(244, 67, 54, 0.3)",
          "rgba(139, 195, 74, 0.3)",
          "rgba(255, 193, 7, 0.3)",
          "rgba(96, 125, 139, 0.3)",
          "rgba(233, 30, 99, 0.3)",
          "rgba(63, 81, 181, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(42, 144, 226, 1)",
          "rgba(156, 39, 176, 1)",
          "rgba(0, 188, 212, 1)",
          "rgba(244, 67, 54, 1)",
          "rgba(139, 195, 74, 1)",
          "rgba(255, 193, 7, 1)",
          "rgba(96, 125, 139, 1)",
          "rgba(233, 30, 99, 1)",
          "rgba(63, 81, 181, 1)",
        ],
      },
    ],
  };
  return (
    <div className="relative flex-1 basis-2/3 bg-black p-4 rounded-xl sm:aspect-video max-sm:h-full">
      <Bar options={options} data={data} />
    </div>
  );
}
