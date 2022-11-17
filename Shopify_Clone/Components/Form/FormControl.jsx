import React from "react";
import Input from "./Input";

export default function FormControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
}
