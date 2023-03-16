import { createContext, useReducer } from "react";
import productReducer from "../reducers/productReducer";

const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [product, dispatch] = useReducer(productReducer, {});
  return (
    <ProductContext.Provider value={{ product, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
