import React from "react";
import { Link } from "react-router-dom";

export default function Total({ data }) {
  const { total, totalItems } = data;
  return (
    <div className="flex-col gap-2 p-2  text-end">
      <h1 className="text-xl">
        Subtotal ({totalItems} items):{total}$
      </h1>
      <Link to="/checkout">
        <button
          className="p-2 h-10 w-64 border-2 border-gray-300 bg-orange-400  text-black rounded-md"
          onClick={() => {}}
        >
          proceed to buy
        </button>
      </Link>
    </div>
  );
}
