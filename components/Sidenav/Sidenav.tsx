import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface props {
  link: string;
  classes?: string;
  children: JSX.Element;
}

export const Sidenav: React.FC<props> = ({ link, classes, children }) => {
  return (
    <Link href={link}>
      <a
        className={`group flex flex-col items-center py-2 transition hover:bg-secondary-background-3 hover:duration-150 ${classes}`}
      >
        {children}
      </a>
    </Link>
  );
};
