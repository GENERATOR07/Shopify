import App from "./app";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

import { CartContextProvider } from "../context/CartContext";
const app = document.getElementById("root");

const root = createRoot(app);

root.render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>
);
