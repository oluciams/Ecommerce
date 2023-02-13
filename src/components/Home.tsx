import { useEffect, useState } from "react";
import { AddProductCart } from "./AddProductCart ";
import { Card } from "./Card";
import { TotalPriceCart } from "./TotalPriceCart";
import { Product } from "../types/app";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { getSubtotalPrice } from "../redux-store/reducer/slices/cartSlice";


export const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Array<Product>>([
    {
      id: 1,
      title: "Samsung Galaxy S7",
      price: 700.0,
      image: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398399/samasung-galaxy-a51-8gb-8uh_tndbgv.jpg",
      
    },
    {
      id: 2,
      title: "Moto G5 Plus",
      price: 600.0,
      image: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398477/MotoGPowerDual_2021_Reformatted_1_330x_wp8gve.png",
     
    },
  ]);

  // const productsCart = useSelector((state: RootState) => state.cart); 

  const { items } = useSelector((state: RootState) => state.cart);  
  const dispatch = useDispatch()

 

  // async function fetchApi() {
  //   const response = await fetch("https://fakestoreapi.com/products?limit=10");
  //   const data = await response.json();
  //   setProducts(data);
  // }

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  useEffect(() => {
    if (items.length > 0) {
      dispatch(getSubtotalPrice());
    }
    
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
          {/* {productsCart?.length > 0 ? ( */}
          {items?.length > 0 ? (
            <section>
              <div className="cards">
                {/* {productsCart.map( */}
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