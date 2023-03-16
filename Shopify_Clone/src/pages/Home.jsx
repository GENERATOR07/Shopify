import Filter from "../Components/filter/Filter";
import ProductBox from "../Components/product-box/ProductBox";

export default function Home() {
  return (
    <div className="grid grid-cols-5">
      <Filter />
      <ProductBox />
    </div>
  );
}
