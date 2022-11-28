import React from "react";
import PaymentControl from "../form/PaymentControl";

export default function PaymentContainer({ method, initialValues }) {
  return (
    <div className=" bg-gray-100   py-2 font-mono">
      <div className="mb-2 text-lg font-semibold flex justify-between items-center">
        Enter Payment Details
      </div>
      <div>
        <PaymentControl method={method} initialValues={initialValues} />
      </div>
    </div>
  );
}
