import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux-store/store";

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

export type ProductId = {
  id: number; 
};

export interface ShowCart {
  showCart: boolean
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 

