import App from "./app";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import Product from "../Components/product/product";

const app = document.getElementById("root");

const root = createRoot(app);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
