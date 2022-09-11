import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface props {
  type: "submit" | "reset" | "button";
  classes: string;
  children: JSX.Element;
  onClick?: () => void;
}

export const Button: React.FC<props> = ({
  type,
  classes,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`transition font-semibold rounded-lg text-sm justify-center inline-flex items-center hover:duration-150 ${classes}`}
      {...rest}
    >
      {children}
    </button>
  );
};
