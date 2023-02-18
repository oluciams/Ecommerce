export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  selected?: boolean
  rating?: {
    rate: number;
    count: number;
  };
  quantity?: number;
  totalPrice?: number;
  subtotalPriceCart?: number;
}

export interface PropsProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  selected?: boolean
  quantity?: number;
  totalPrice?: number
 
}

export interface PropsProductCard extends PropsProduct { 
  products: Product[];
  setProducts: Function;
}

export type ProductId = {
  id: number; 
};
