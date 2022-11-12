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
    <div className="mt-1 p-2 self-stretch w-1/5 border-2 border-gray-300 bg-gray-200">
      <div className="sticky top-4">
        <h1 className="text-2xl">Categories</h1>
        <hr className=" bg-gray-200" />
        <ul>
          {categories.map((c) => (
            <li onClick={handelClick} className="cursor-pointer " key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
