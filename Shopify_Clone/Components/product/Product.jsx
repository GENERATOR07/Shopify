import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function Product({ product }) {
  const { dispatch } = useContext(CartContext);

  const {
    title,
    image,
    rating: { rate, count },
    price,
    id,
  } = product;
  const nav = useNavigate();
  return (
    <div>
      <div
        className="w-64 h-96 p-2 border-2 border-gray-300 flex flex-col items-center gap-1 rounded-t-md hover:cursor-auto"
        onClick={() => {
          nav(`products/${id}`);
        }}
      >
        <img className="w-64 h-1/2" src={image} alt={title} />
        <h1>{title}</h1>
        <hr />
        <h1>Price-{price}$</h1>
        <span>rating-{rate}</span>
        <span>in Stock-{count}</span>
      </div>
      <button
        className="p-2 h-10 w-64 border-2 border-gray-300 bg-orange-400  text-black"
        onClick={() => {
          dispatch({ type: "increment", payload: product });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
