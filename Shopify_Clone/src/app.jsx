import Navbar from "../Components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}
