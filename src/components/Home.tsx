import { useEffect, useState } from "react";
import { Card } from "./Card";
import { ApiError, Product } from "../types/app";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { getSubtotalPrice } from "../redux-store/reducer/slices/cartSlice";
import styles from "../styles.module.css";
import { getProducts } from "../redux-store/reducer/slices/productsSlice";

export const Home = (): JSX.Element => {  

  const { items } = useSelector((state: RootState) => state.cart);
  const { products } = useSelector((state: RootState) => state.products);
  const [error, setError] = useState<ApiError | null>(null);

  const dispatch = useDispatch(); 

  async function fetchApi() {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=10");
      const data = await response.json();
      const newProducts = data.map((product: Product) => ({
        ...product,
        selected: false,
      }));
      
      dispatch(getProducts(newProducts))
      
    } catch (error) {
      const apiError: ApiError = {
        code: 522,
        message: "Api not responding"
      }
      setError(apiError)
    }
  }

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      dispatch(getSubtotalPrice());
    }
    // eslint-disable-next-line
  }, [items]);


  return (
    <section className={styles["container"]}>
      <section className={styles["products"]}>
        <h1>To Go Products</h1>
        {error && (
          <div className={styles["ApiError"]}>
            <p>Error code: {error.code}</p>
            <p>Error message: {error.message}</p>
          </div>
        )}
        <div className={styles["cards"]}>
          {products.map(({ id, title, image, price, selected }) => (
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              selected={selected}
            />
          ))}
        </div>
      </section>
    </section>
  );
}