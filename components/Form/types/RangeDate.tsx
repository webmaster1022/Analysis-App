import React from "react";
import { Form, Input as Field, DatePicker } from "antd";
import { TextMessage } from "../../TextMessage/TextMessage";

interface props {
  name: string;
  label?: string;
  classes: string[];
  rules?: {}[];
  picker?: "time" | "date" | "week" | "month" | "quarter" | "year";
}

const { RangePicker } = DatePicker;

export const RangeDate: React.FC<props> = ({
  name,
  label,
  classes,
  rules,
  picker,
  ...rest
}): JSX.Element => {
  return (
    <Form.Item
      className={`mb-6 ${classes[0]}`}
      name={name}
      label={label}
      rules={rules}
    >
      <RangePicker
        {...rest}
        name={name}
        picker={picker}
        className={`border text-typography-900 text-sm rounded focus:outline-none focus:shadow-none shadow-none w-full ${classes[1]}`}
      />
    </Form.Item>
  );
};
