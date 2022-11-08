import Navbar from "../Components/navbar/Navbar";
import Filter from "../Components/filter/Filter";
import ProductBox from "../Components/product-box/ProductBox";
export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Filter />
        <ProductBox />
      </div>
    </div>
  );
}
