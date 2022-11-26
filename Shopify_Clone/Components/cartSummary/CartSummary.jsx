import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartSummaryList from "../cartSummaryList/CartSummaryList";
import { ShoppingCart } from "phosphor-react";
export default function CartSummary() {
  const { state } = useContext(CartContext);
  const total = state.reduce((acc, curr) => curr.price * curr.count + acc, 0);

  return (
    <div
      className="bg-white p-2 w-1/4 flex flex-col divide-y-2  border-2 border-gray-200  "
      style={{ height: "fit-content" }}
    >
      <h1 className="flex stext-xl font-bold items-center gap-1">
        <ShoppingCart weight="bold" />
        Cart Summary
      </h1>
      <CartSummaryList products={state} />
      <div className="flex  justify-end font-semibold">
        <span>SubTotal:{total}$</span>
      </div>
    </div>
  );
}
