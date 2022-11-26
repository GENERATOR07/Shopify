import App from "./app";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

import { CartContextProvider } from "../context/CartContext";
import { ProductContextProvider } from "../context/ProductContext";
import { FormContextProvider } from "../context/formContext";
const app = document.getElementById("root");

const root = createRoot(app);

root.render(
  <ProductContextProvider>
    <CartContextProvider>
      <FormContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FormContextProvider>
    </CartContextProvider>
  </ProductContextProvider>
);
