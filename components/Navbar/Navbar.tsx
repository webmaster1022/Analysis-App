import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Menu from "../Svgs/Menu";

interface props {
  children: JSX.Element;
  classes?: string;
}
export const Navbar: React.FC<props> = ({ children, classes }) => {
  return (
    <nav className={`navbar bg-white drop-shadow-sm w-full px-6 ${classes}`}>
      <Menu classes="fill-typography-900/80 cursor-pointer" />
      <div className="flex justify-between w-full">{children}</div>
    </nav>
  );
};
