export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  quantity?: number;
}

export interface PropsProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity?: number;
}

export type ProductId =  {
  id: number
}
