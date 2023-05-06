import React, { useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Popover as Popovr } from "antd";

interface props {
  classes?: string;
  children: JSX.Element;
  content?: JSX.Element;
  onClick?: () => void;
  visible: boolean;
  compareId: number[];
  visibleHandler: () => void;
}
export const Popover: React.FC<props> = ({
  classes,
  children,
  content,
  visible,
  compareId,
  visibleHandler,
  ...rest
}) => {
  return (
    <Popovr
      placement="bottomRight"
      content={content}
      trigger="click"
      visible={visible && compareId[0] === compareId[1]}
      onVisibleChange={visibleHandler}
      // arrowPointAtCenter
    >
      {children}
    </Popovr>
  );
};
