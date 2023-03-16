import React from "react";
import CartProduct from "../cartProduct/CartProduct";

export default function CardProductList({ products }) {
  return (
    <div className="grid grid-cols-1 divide-y-2">
      {products.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
    </div>
  );
}
