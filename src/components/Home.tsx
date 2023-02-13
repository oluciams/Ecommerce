import { useEffect, useState } from "react";
import { AddProductCart } from "./AddProductCart ";
import { Card } from "./Card";
import { TotalPriceCart } from "./TotalPriceCart";
import { Product } from "../types/app";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { getSubtotalPrice } from "../redux-store/reducer/slices/cartSlice";


export const Home = (): JSX.Element => {

  const [products, setProducts] = useState<Array<Product>>([]);

  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch(); 

  async function fetchApi() {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();
    setProducts(data);
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
      <section className="container">
        <section className="products">
          <h1>To Go Products</h1>
          <div className="cards">
            {products.map(({ id, title, image, price }) => (
              <Card
                key={id}
                id={id}
                title={title}
                image={image}
                price={price}
              />
            ))}
          </div>
        </section>
        <section className="products-cart">
          <h1>Your Cart</h1>
          {items?.length > 0 ? (
            <section>
              <div className="cards">
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