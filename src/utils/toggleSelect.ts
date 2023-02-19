import { Product } from "../types/app";

export const toggleSelect = (id: number, products: Product[]) => {
  const newProducts = products.map((product) => {
    if (product.id === id) {
      return { ...product, selected: !product.selected };
    }
    return product;
  });

  return newProducts
};



