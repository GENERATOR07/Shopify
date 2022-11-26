import React from "react";
import Input from "./Input";
import Radio from "./payment/Radio";

export default function FormControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "radio":
      return <Radio {...rest} />;
    default:
      return null;
  }
}
