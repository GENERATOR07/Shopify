import { useEffect, useState } from "react";

export default function Filter() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <div className="mt-1 p-2 self-stretch w-1/5 border-2 border-gray-300 bg-gray-200">
      <div className="sticky top-4">
        <h1 className="text-2xl">Categories</h1>
        <hr className=" bg-gray-200" />
        <ul>
          {categories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
