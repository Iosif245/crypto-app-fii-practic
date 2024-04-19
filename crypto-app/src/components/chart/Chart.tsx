import React from "react";
import { useSelector } from "react-redux";
import { coinSelector } from "../../store/selectors/coin-selectors";
import { ChartContainer, ChartEmptyMessage } from "./styles";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, TimeScale } from "chart.js";
import ChartCoinsMenu from "../chart-coins-menu";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, TimeScale);

const Chart = () => {
  const coin = useSelector(coinSelector);

  const chartData = coin
    ? Object.keys(coin.history).map((key) => ({
        x: key,
        y: coin.history[key],
      }))
    : [];

  const data = {
    labels: chartData.map((item) => item.x),
    datasets: [
      {
        label: `${coin?.name} price history`,
        data: chartData.map((item) => item.y),
        fill: false,
        borderColor: "#276AEE",
        tension: 0.1,
      },
    ],
  };

  return (
    <ChartContainer>
      {coin ? <Line data={data} /> : <ChartEmptyMessage> Please choose a coin to display the chart.</ChartEmptyMessage>}
      <ChartCoinsMenu />
    </ChartContainer>
  );
};

export default Chart;
