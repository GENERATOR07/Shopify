import App from "./app";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

import { CartContextProvider } from "../context/CartContext";
import { ProductContextProvider } from "../context/ProductContext";
const app = document.getElementById("root");

const root = createRoot(app);

root.render(
  <ProductContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </ProductContextProvider>
);
