import React, { Children } from "react";
import { Modal as MD } from "antd";

interface props {
  isVisible: boolean;
  title: string;
  children: JSX.Element;
  onCancel: () => void;
}

export const Modal: React.FC<props> = ({ isVisible, children, onCancel }) => {
  return (
    <MD visible={isVisible} onCancel={onCancel}>
      {children}
    </MD>
  );
};
