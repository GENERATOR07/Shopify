import React from "react";
import { ArrowCircleLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const nav = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          nav(-1);
        }}
        className="flex mb-7 justify-between p-2"
      >
        <div className="flex">
          <ArrowCircleLeft size={24} />
          back to products
        </div>
      </div>
      <h1>welcome to checkout page</h1>
    </div>
  );
}
