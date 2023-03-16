import React from "react";
import Bank from "./payment/bank";
import Upi from "./payment/Upi";

export default function PaymentControl({ method, ...rest }) {
  switch (method ? method : "bank") {
    case "upi":
      return <Upi />;

    case "bank":
      return <Bank {...rest} />;

    default:
      return null;
  }
}
