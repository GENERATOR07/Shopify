import React from "react";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import { ShoppingCart, HouseSimple } from "phosphor-react";

export default function Navbar() {
  return (
    <div className="bg-zinc-800 px-6 py-3 flex justify-between items-center">
      <h1 className="text-white text-xl font-serif">Shopify</h1>
      <Search />
      <Link className="text-white relative left-52 hidden lg:block " to="/">
        <HouseSimple size={24} />
      </Link>
      <Link className="text-white hidden lg:block" to="/cart">
        <ShoppingCart size={24} weight="regular" />
      </Link>
    </div>
  );
}
