import React, { Children } from "react";
import { Modal as MD } from "antd";

interface props {
  isVisible: boolean;
  title: string;
  children: JSX.Element;
  onCancel: () => void;
  width: number;
}

export const Modal: React.FC<props> = ({
  isVisible,
  children,
  onCancel,
  width,
}) => {
  return (
    <MD visible={isVisible} onCancel={onCancel} width={width}>
      {children}
    </MD>
  );
};
