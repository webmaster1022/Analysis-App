import React from "react";
import { Input } from "./types/Input";
import { Search } from "./types/Search";
import { Select } from "./types/Select";
import { Date } from "./types/Date";

interface props {
  element: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  classes: string;
  rules?: {};
  prefix?: JSX.Element;
  children?: JSX.Element;
}

export const FormControl: React.FC<props> = ({
  element,
  children,
  ...rest
}): JSX.Element | null => {
  switch (element) {
    case "input":
      return <Input {...rest} />;
    case "search-input":
      return <Search {...rest} />;
    case "select":
      return <Select {...rest}>{children}</Select>;
    case "date":
      return <Date {...rest} />;
    default:
      return null;
  }
};
