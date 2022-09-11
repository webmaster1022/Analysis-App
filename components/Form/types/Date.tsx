import React from "react";
import { Form, Input as Field, DatePicker } from "antd";
import { TextMessage } from "../../TextMessage/TextMessage";

interface props {
  name: string;
  label?: string;
  classes: string;
  rules?: {};
}

export const Date: React.FC<props> = ({
  name,
  label,
  classes,
  rules,
  ...rest
}): JSX.Element => {
  return (
    <Form.Item
      className="mb-6 w-full"
      name={name}
      label={label}
      rules={rules && [rules]}
    >
      <DatePicker
        {...rest}
        className={`bg-primary-50 border border-typography-300 text-typography-900 text-sm rounded-lg focus:outline-none focus:border-secondary-3 focus:shadow-none hover:border-secondary-3 shadow-none w-full ${classes}`}
      />
    </Form.Item>
  );
};
