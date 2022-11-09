import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
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

interface props {
  data: any;
  options: {};
  onClick?: () => void;
}

export const LineChart: React.FC<props> = ({ data, options, ...rest }) => {
  return <Line data={data} options={options} />;
};
