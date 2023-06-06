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
        className={`group flex flex-col items-center py-2 transition hover:bg-primary/5 hover:duration-250 ease-in-out ${classes}`}
      >
        {children}
      </a>
    </Link>
  );
};
