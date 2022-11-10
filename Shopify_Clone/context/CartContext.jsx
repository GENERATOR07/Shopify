import { createContext } from "react";
import { useReducer } from "react";
import cartReducer from "../reducers/CartReducer";

const CartContext = createContext({});

export const CartContextProvider = (props) => {
  console.log("contxt me hoon");
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
