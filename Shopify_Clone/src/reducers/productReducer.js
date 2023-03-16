const searchResults = (payload) => {
  console.log(payload.data, "yahi hai");
  let search = payload.search.toLowerCase();

  let result = payload.data.filter((product) => {
    let { title, description, category } = product;
    title = title.toLowerCase();
    description = description.toLowerCase();
    category = category.toLowerCase();
    let value =
      title.includes(search) ||
      description.includes(search) ||
      category.includes(search);
    return value;
  });
  console.log(result);
  return {
    productData: [...result],
    label: `Search Results for ${payload.search}`,
  };
};
const productReducer = (product, action) => {
  switch (action.type) {
    case "getProducts":
      return {
        productData: [...action.payload.data],
        label: action.payload.label,
      };
    case "search":
      return searchResults(action.payload);

    default:
      return product;
  }
};
export default productReducer;
