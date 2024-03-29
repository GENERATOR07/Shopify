import React, { useEffect, useState, useContext } from "react";
import Product from "../product/product";
import axios from "axios";
import ProductContext from "../../context/ProductContext";
export default function ProductBox() {
  const { product, dispatch } = useContext(ProductContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      dispatch({
        type: "getProducts",
        payload: { data, label: "All Products" },
      });
    });
  }, []);
  return (
    <div className="mt-1 ml-1 p-2  border-2 border-gray-400 bg-gray-100 sm:grid sm:grid-cols-4  col-span-4">
      <h1 className="text-xl col-span-4">{product.label}</h1>
      {product?.productData?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
