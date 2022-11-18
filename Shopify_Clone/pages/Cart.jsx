import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CardProductList from "../Components/cartProductList/CardProductList";
import { useNavigate } from "react-router-dom";
import { ArrowCircleLeft } from "phosphor-react";
import Total from "../Components/total/Total";
export default function Cart() {
  const { state } = useContext(CartContext);
  const nav = useNavigate();
  const total = state.reduce((acc, curr) => curr.price * curr.count + acc, 0);
  const totalItems = state.reduce((acc, curr) => curr.count + acc, 0);

  return (
    <div className="divide-y-2 flex flex-col ">
      <div className="flex mb-7 justify-between p-2">
        <div className="flex">
          <ArrowCircleLeft
            onClick={() => {
              nav(-1);
            }}
            size={24}
          />
          back to products
        </div>
        <h1 className="text-xl">Price</h1>
      </div>
      <CardProductList products={state} />
      <Total data={{ total, totalItems }} />
    </div>
  );
}
