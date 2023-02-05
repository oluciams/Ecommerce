import { useEffect, useState } from "react";
import { AddCart } from "./AddCart";
import { Card } from "./Card";
import { TotalPriceCart } from "./TotalPriceCart";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface PropsProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  products: Array<Product>;
}

export const Home = (): JSX.Element => {
  
  const [products, setProducts] = useState<Array<Product>>([])
  // const [productsCart, setProductsCart] = useState<Array<Product>>([]);
  
  async function fetchApi(){
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();
    setProducts(data);
  }



 useEffect(() => {
  fetchApi()
 }, []);

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
                products={products}
              />
            ))}
          </div>
        </section>
        <section className="products-cart">
          <h1>Your Cart</h1>
          {/* {productsCart ? (
            <p>Your cart is empty</p>
          ) : ( */}
              
            <section>
              <div className="cards">
                {products.map(({ id, title, image, price }) => (
                  <AddCart
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    price={price}
                    products={products}
                  />
                ))}
              </div>
              <TotalPriceCart />
            </section>
          {/* )} */}
        </section>
      </section>
    </>
  );
}