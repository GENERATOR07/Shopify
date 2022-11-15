import React from "react";

export default function CartSummaryList({ products }) {
  console.log("potan", products);
  return (
    <div className="flex flex-col gap-2 py-2 ">
      {products.map((product) => {
        return (
          <div
            className=" flex justify-between gap-2 font-semibold"
            key={product.id}
          >
            <p>
              {product.count} x {product.title}
            </p>
            <span>{product.price}$</span>
          </div>
        );
      })}
    </div>
  );
}
