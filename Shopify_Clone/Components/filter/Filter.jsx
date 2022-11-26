import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";

export default function Filter() {
  const [categories, setCategories] = useState([]);
  const { dispatch } = useContext(ProductContext);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(({ data }) => setCategories(data));
  }, []);
  const handelClick = (e) => {
    let category = e.target.innerText;
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then(({ data }) =>
        dispatch({ type: "getProducts", payload: { data, label: category } })
      );
  };
  return (
    <div className="mt-1 p-2 self-stretch w-1/5 border-2 border-gray-300 hidden lg:block">
      <div className="sticky top-4">
        <h1 className="text-2xl font-serif">Categories</h1>

        <ul className="divide-y-2 py-2">
          {categories.map((c) => (
            <li onClick={handelClick} className="cursor-pointer py-1" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
