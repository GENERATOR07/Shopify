import { createContext, useReducer } from "react";

import cartReducer from "../reducers/CartReducer";

const CartContext = createContext({});

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
