import React from "react";
import Search from "../search/Search";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-zinc-800 px-6 py-3 flex justify-between items-center flex-wrap">
      <h1 className="text-white text-xl font-serif">Shopify</h1>
      <Search />
      <Link className="text-white relative left-52 " to="/">
        Home
      </Link>
      <Link className="text-white" to="/cart">
        Cart
      </Link>
    </div>
  );
}
