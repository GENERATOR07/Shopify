import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Plus, Minus, TrashSimple } from "phosphor-react";

export default function CartProduct({ product }) {
  const { dispatch } = useContext(CartContext);
  const { image, title, count, price } = product;
  return (
    <div className="flex gap-2  justify-between  mt-2 p-2">
      <img className="w-1/6 h-48" src={image} alt="title" />
      <div className="w-1/3 flex flex-col gap-2 ">
        <h1 className="text-2xl">{title}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch({ type: "decrement", payload: product })}
          >
            <Minus size={24} />
          </button>
          <span className="text-xl">quantity:{count}</span>
          <button
            onClick={() => dispatch({ type: "increment", payload: product })}
          >
            <Plus size={24} />
          </button>
          <button
            onClick={() => dispatch({ type: "remove", payload: product })}
          >
            <TrashSimple size={24} />
          </button>
        </div>
      </div>
      <h1 className="text-xl">{price}$</h1>
    </div>
  );
}
