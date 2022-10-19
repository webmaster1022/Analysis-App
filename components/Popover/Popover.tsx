import React, { useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Popover as Popovr } from "antd";

interface props {
  classes?: string;
  children: JSX.Element;
  content?: JSX.Element;
  onClick?: () => void;
}
export const Popover: React.FC<props> = ({
  classes,
  children,
  content,
  ...rest
}) => {
  return (
    <Popovr
      placement="bottomRight"
      content={content}
      trigger="click"
      // arrowPointAtCenter
    >
      {children}
    </Popovr>
  );
};
