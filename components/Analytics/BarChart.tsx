import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface props {
  data: any;
  options: {};
  onClick?: () => void;
}

export const BarChart: React.FC<props> = ({ data, options, ...rest }) => {
  return <Bar data={data} options={options} />;
};
