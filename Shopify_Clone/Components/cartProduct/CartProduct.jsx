import { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function CartProduct({ product }) {
  const { dispatch } = useContext(CartContext);
  const { image, title, count, price } = product;
  return (
    <div className="flex gap-2 w-screen mt-2">
      <img className="w-1/5 h-48" src={image} alt="title" />
      <div className="w-1/3 flex flex-col">
        <h1 className="text-2xl">{title}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch({ type: "decrement", payload: product })}
          >
            substract
          </button>
          <span>quantity:{count}</span>
          <button
            onClick={() => dispatch({ type: "increment", payload: product })}
          >
            Add
          </button>
          <button
            onClick={() => dispatch({ type: "remove", payload: product })}
          >
            Delete
          </button>
        </div>
      </div>
      <h1 className="text-2xl">{price}$</h1>
    </div>
  );
}
