import { useState, useContext } from "react";
import { MagnifyingGlass } from "phosphor-react";
import ProductContext from "../../context/ProductContext";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState("");
  const { dispatch } = useContext(ProductContext);
  const handelSearch = () => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      dispatch({
        type: "search",
        payload: { data, search, label: "Search Results" },
      });
    });
  };

  return (
    <div className=" flex items-center relative lg:left-24 ">
      <input
        className="h-10 lg:w-96 text-center rounded-l-md"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handelSearch}
        className="p-2 h-10 bg-orange-400  text-black rounded-r-md"
      >
        <MagnifyingGlass size={24} weight="regular" />
      </button>
    </div>
  );
}
