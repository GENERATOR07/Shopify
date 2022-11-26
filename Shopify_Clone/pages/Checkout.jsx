import { ArrowCircleLeft } from "phosphor-react";
import { Outlet, useNavigate } from "react-router-dom";
import CheckoutForm from "../Components/checkoutForm/CheckOutForm";

import CartSummary from "../Components/cartSummary/CartSummary";
export default function Checkout() {
  return (
    <div
      className=" bg-gray-100  flex justify-between "
      style={{ minHeight: "100vh", paddingLeft: "20px" }}
    >
      <CheckoutForm />
      {/* <Outlet className="w-1/2" /> */}
      <CartSummary />
    </div>
  );
}
