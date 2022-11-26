import React from "react";
import PaymentControl from "../form/PaymentControl";
import { useContext } from "react";
import FormContext from "../../context/formContext";

export default function PaymentContainer({ method }) {
  const { formData } = useContext(FormContext);
  return (
    <div className=" bg-gray-100   py-2 font-mono">
      <div className="mb-4 text-lg font-semibold flex justify-between items-center">
        Enter Payment Details
      </div>
      <div>
        <PaymentControl method={method} />
      </div>
    </div>
  );
}
