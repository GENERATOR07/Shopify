import React from "react";
import { MagnifyingGlass } from "phosphor-react";

export default function Search() {
  return (
    <div className=" flex items-center relative left-24 ">
      <input
        className="h-10 w-96 text-center rounded-l-md"
        placeholder="search"
      />
      <div className="p-2 h-10 bg-orange-400  text-black rounded-r-md">
        <button>
          <MagnifyingGlass size={24} weight="regular" />
        </button>
      </div>
    </div>
  );
}
