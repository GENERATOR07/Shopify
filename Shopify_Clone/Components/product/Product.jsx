export default function Product({ product }) {
  const {
    title,
    image,
    rating: { rate, count },
    price,
  } = product;
  return (
    <div className="w-64 h-96 p-2 border-2 border-gray-300 flex flex-col items-center gap-1 rounded-md">
      <img className="w-64 h-1/3" src={image} alt={title} />
      <h1>{title}</h1>
      <hr />
      <h1>Price-{price}$</h1>
      <span>rating-{rate}</span>
      <span>in Stock-{count}</span>
      <button className=" bg-orange-400 p-2 rounded-md justify-self-end">
        Add to cart
      </button>
    </div>
  );
}
