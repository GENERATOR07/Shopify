import React from "react";
import Search from "../search/Search";

export default function Navbar() {
  return (
    <div className="bg-zinc-800 h-16 px-6 flex justify-between items-center">
      <h1 className="text-white text-xl font-serif">Shopify</h1>
      <Search />
      <h1 className="text-white">cart</h1>
    </div>
  );
}
