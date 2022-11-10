import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [ProductDetails, setProductDetails] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProductDetails({ ...json }));
  }, []);
  return (
    <div>
      <h3
        onClick={() => {
          nav(-1);
        }}
        className="cursor-auto"
      >
        back to products
      </h3>
      <div className="flex gap-2 items-center p-2">
        <div className="w-1/3">
          <img className="w-full" src={ProductDetails.image} />
        </div>
        <div className="w-1/3">
          <h1>{ProductDetails.title}</h1>
          <h1>{ProductDetails.description}</h1>
          <span>{ProductDetails.price}$</span>
        </div>
        <div className="w-1/3">
          <button className=" bg-orange-400 p-2 rounded-md justify-self-end">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
