import React from "react";
import { Form, Input as Field, DatePicker } from "antd";
import { TextMessage } from "../../TextMessage/TextMessage";
import { RangePickerProps } from "antd/lib/date-picker";

interface props {
  name: string;
  label?: string;
  classes: string[];
  rules?: {}[];
  disabledDate?: RangePickerProps["disabledDate"];
}

export const Date: React.FC<props> = ({
  name,
  label,
  classes,
  rules,
  disabledDate,
  ...rest
}): JSX.Element => {
  return (
    <Form.Item
      className={`mb-6 ${classes[0]}`}
      name={name}
      label={label}
      rules={rules}
    >
      <DatePicker
        {...rest}
        name={name}
        disabledDate={disabledDate}
        className={`border text-typography-900 text-sm rounded focus:outline-none focus:shadow-none shadow-none w-full ${classes[1]}`}
      />
    </Form.Item>
  );
};
