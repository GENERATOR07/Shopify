import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CardProductList from "../Components/cartProductList/CardProductList";

export default function Cart() {
  const { state } = useContext(CartContext);
  console.log(state);
  return (
    <div>
      <CardProductList products={state} />
    </div>
  );
}
