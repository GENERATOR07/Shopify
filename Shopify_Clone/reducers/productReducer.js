const productReducer = (product, action) => {
  switch (action.type) {
    case "getProducts":
      return {
        productData: [...action.payload.data],
        label: action.payload.label,
      };

    default:
      return product;
  }
};
export default productReducer;
