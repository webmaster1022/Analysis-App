import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface props {
  children: JSX.Element;
}
export const Navbar: React.FC<props> = ({ children }) => {
  return (
    <nav className="navbar bg-primary-50 w-full flex justify-between px-6 py-3">
      {children}
    </nav>
  );
};
