import Filter from "../Components/filter/Filter";
import ProductBox from "../Components/product-box/ProductBox";

export default function Home() {
  return (
    <div className="flex">
      <Filter />
      <ProductBox />
    </div>
  );
}
