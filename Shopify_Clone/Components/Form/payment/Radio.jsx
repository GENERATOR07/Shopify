import { Field, ErrorMessage } from "formik";
import React from "react";

export default function Radio({ name, label, options, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="flex gap-1" key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <div className="font-thin text-sm text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
