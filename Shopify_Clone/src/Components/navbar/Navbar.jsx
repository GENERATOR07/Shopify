import React, { useContext } from "react";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import { ShoppingCart, HouseSimple } from "phosphor-react";
import CartContext from "../../context/CartContext";

export default function Navbar() {
  const { state } = useContext(CartContext);
  const totalItems = state.reduce((acc, curr) => curr.count + acc, 0);
  return (
    <div className="bg-zinc-800 px-6 py-3 flex justify-between items-center">
      <h1 className="text-white text-xl font-serif">Shopify</h1>
      <Search />
      <Link className="text-white relative left-52 hidden lg:block " to="/">
        <HouseSimple size={24} />
      </Link>
      <Link className="text-white  flex items-center " to="/cart">
        <ShoppingCart size={24} weight="regular" />
        <div
          className="  bg-orange-400  text-black font-medium items-center"
          style={{ borderRadius: "100%", width: "20px", paddingLeft: "6px" }}
        >
          {totalItems === 0 ? null : totalItems}
        </div>
      </Link>
    </div>
  );
}
