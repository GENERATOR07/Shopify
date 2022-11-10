const incrementProduct = (product, cart) => {
  let cartProduct = cart.find((cartP) => {
    return cartP.id === product.id;
  });

  if (cartProduct) {
    cartProduct.count = cartProduct.count + 1;
    return [...cart];
  } else {
    return [...cart, { ...product, count: 1 }];
  }
};
const decrementProduct = (product, cart) => {
  let cartProduct = cart.find((cartP) => {
    return cartP.id === product.id;
  });
  if (cartProduct.count === 1) {
    return cart.filter((cartP) => {
      return cartP.id !== product.id;
    });
  }
  cartProduct.count = cartProduct.count - 1;
  return [...cart];
};

const removeProduct = (product, cart) => {
  return cart.filter((cartP) => {
    return cartP.id !== product.id;
  });
};

const cartReducer = (state, action) => {
  console.log("reducer me hoon");
  switch (action.type) {
    case "increment":
      return incrementProduct(action.payload, state);
    case "decrement":
      return decrementProduct(action.payload, state);
    case "remove":
      return removeProduct(action.payload, state);
    default:
      return state;
  }
};
export default cartReducer;
