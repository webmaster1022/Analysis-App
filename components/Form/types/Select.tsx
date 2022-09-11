import React, { Children } from "react";
import { Form, Input as Field, Select as Slt } from "antd";
import { TextMessage } from "../../TextMessage/TextMessage";

const { Option } = Slt;

interface props {
  name: string;
  label?: string;
  classes: string;
  rules?: {};
  children?: JSX.Element;
}

export const Select: React.FC<props> = ({
  name,
  label,
  classes,
  rules,
  children,
  ...rest
}): JSX.Element => {
  console.log(rest);
  return (
    <Form.Item
      className="mb-6 w-full"
      name={name}
      label={label}
      rules={rules && [rules]}
    >
      <Slt {...rest}>{children}</Slt>
    </Form.Item>
  );
};
