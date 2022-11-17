import React from "react";
import { Field, ErrorMessage } from "formik";
import { MathOperations } from "phosphor-react";

export default function Select({ label, name, options, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <div className="font-thin text-sm text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
