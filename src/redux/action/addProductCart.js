export const addProductCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product
  }
};

export const deleteProductCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};