import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowCircleLeft } from "phosphor-react";
import CartContext from "../context/CartContext";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [ProductDetails, setProductDetails] = useState({});
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(({ data }) => setProductDetails({ ...data }));
  }, []);
  return (
    <div className="divide-y-2">
      <h3
        onClick={() => {
          nav(-1);
        }}
        className="flex"
      >
        <ArrowCircleLeft size={24} />
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
          <button
            className=" bg-orange-400 p-2 rounded-md justify-self-end"
            onClick={() => {
              dispatch({ type: "increment", payload: ProductDetails });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
