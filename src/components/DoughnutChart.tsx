"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { title } from "process";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  chartData,
}: {
  chartData: { genre: string; count: number }[];
}) {
  const data = {
    labels: chartData.map((obj) => obj.genre),
    datasets: [
      {
        label: "# of Movies",
        data: chartData.map((obj) => obj.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="flex-1 basis-96 aspect-square relative bg-black p-4 rounded-xl flex flex-col justify-center">
      <h2 className="text-center">
        Total movies in database ordered by genres
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}
