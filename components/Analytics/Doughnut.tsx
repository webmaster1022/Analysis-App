import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

interface props {
  data: any;
  options: {};
  onClick?: () => void;
}

export const DoughnutChart: React.FC<props> = ({ data, options, ...rest }) => {
  return <Doughnut data={data} options={options} />;
};
