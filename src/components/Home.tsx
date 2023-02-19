import { useEffect, useState } from "react";
import { AddProductCart } from "./AddProductCart ";
import { Card } from "./Card";
import { TotalPriceCart } from "./TotalPriceCart";
import { Product } from "../types/app";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { getSubtotalPrice } from "../redux-store/reducer/slices/cartSlice";
import styles from "../styles.module.css";
import { getProducts } from "../redux-store/reducer/slices/productsSlice";


export const Home = (): JSX.Element => {

  const [products, setProducts] = useState<Array<Product>>([]);

  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch(); 

  async function fetchApi() {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();
    const newProducts = data.map((product: Product) => ({
      ...product,
      selected: false,
    }));
    
    setProducts(newProducts);
    dispatch(getProducts(newProducts))
  }

 
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      dispatch(getSubtotalPrice());
    }
    // eslint-disable-next-line
  }, [items]);


  return (
    <>
      <h1>eCommerce</h1>
      <section className={styles["container"]}>
        <section className={styles["products"]}>
          <h1>To Go Products</h1>
          <div className={styles["cards"]}>
            {products.map(({ id, title, image, price, selected }) => (
              <Card
                key={id}
                id={id}
                title={title}
                image={image}
                price={price}
                selected={selected}
                products={products}
                setProducts={setProducts}
              />
            ))}
          </div>
        </section>
        <section className={styles["products-cart"]}>
          <h1>Your Cart</h1>
          {items?.length > 0 ? (
            <section>
              <div className={styles["cards"]}>
                {items.map(
                  ({ id, title, image, price, quantity, totalPrice }) => (
                    <AddProductCart
                      key={id}
                      id={id}
                      title={title}
                      image={image}
                      price={price}
                      quantity={quantity}
                      totalPrice={totalPrice}
                    />
                  )
                )}
              </div>
              <TotalPriceCart />
            </section>
          ) : (
            <p>Your cart is empty</p>
          )}
        </section>
      </section>
    </>
  );
}