import React from "react";
import { Form, Input as Field } from "antd";
import { TextMessage } from "../../TextMessage/TextMessage";

interface props {
  name: string;
  label?: string;
  classes: string[];
  rules?: {}[];
}

export const Input: React.FC<props> = ({
  name,
  label,
  classes,
  rules,
  ...rest
}): JSX.Element => {
  return (
    <Form.Item
      className={`mb-6 ${classes[0]}`}
      name={name}
      label={label}
      rules={rules}
    >
      <Field
        {...rest}
        className={`border text-typography-900 text-sm rounded focus:outline-none focus:shadow-none w-full ${
          classes[1] ? classes[1] : ""
        }`}
      />
    </Form.Item>
  );
};
