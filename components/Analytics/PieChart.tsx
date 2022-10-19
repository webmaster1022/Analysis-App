import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

interface props {
  data: any;
  onClick?: () => void;
}

export const PieChart: React.FC<props> = ({ data, ...rest }) => {
  return <Pie data={data} />;
};
