import React, { useEffect, useState } from "react";
import Product from "../product/product";

export default function ProductBox() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts([...data]));
  }, []);
  return (
    <div className="mt-1 ml-1 p-2   w-4/5 border-2 border-gray-400 bg-gray-100 grid grid-cols-4 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
