import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface props {
  classes?: string;
  rowData?: any;
  // value: string,
}

export const Cell: React.FC<props> = ({ classes, rowData }) => {
  return <td className="py-4 px-6 border border-debt">{rowData}</td>;
};
