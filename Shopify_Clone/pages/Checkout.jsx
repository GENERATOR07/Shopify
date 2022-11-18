import { ArrowCircleLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../Components/checkoutForm/CheckOutForm";
import CartSummary from "../Components/cartSummary/CartSummary";
export default function Checkout() {
  const nav = useNavigate();
  return (
    <div className=" bg-gray-100 divide-y-2 " style={{ minHeight: "100vh" }}>
      <div className="flex mb-7 justify-between p-2">
        <div className="flex">
          <ArrowCircleLeft
            onClick={() => {
              nav(-1);
            }}
            size={24}
          />
        </div>
      </div>
      <div className=" flex  " style={{ justifyContent: "space-evenly" }}>
        <CheckoutForm />
        <CartSummary />
      </div>
    </div>
  );
}
