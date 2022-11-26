import Navbar from "../Components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";

import PaymentContainer from "../Components/checkout/PaymentContainer";
import CheckoutForm from "../Components/checkoutForm/CheckOutForm";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}>
          <Route path="" element={<CheckoutForm />} />
          <Route path="payment" element={<PaymentContainer />} />
        </Route>
      </Routes>
    </div>
  );
}
