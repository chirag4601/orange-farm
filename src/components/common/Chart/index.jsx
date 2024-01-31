import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (!i) console.log(arr[i][0]);
    if (days === "24h")
      date.push(new Date(arr[i]["timestamp"]).toLocaleTimeString());
    else date.push(new Date(arr[i]["timestamp"]).toLocaleDateString());
    prices.push(arr[i]["profit_percentage"]);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Profits in percentage`,
        data: prices,
        borderColor: "#25CD25",
        backgroundColor: "rgba(37, 205, 37, 0.40)",
      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
};

export default Chart;
