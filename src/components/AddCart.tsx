import { useState } from "react";
import { PropsProduct } from "./Home";


export const AddCart = ({ title, image, price }: PropsProduct): JSX.Element => {

  const [countProduct, setCountProduct] = useState<number>(1);
  const [totalPriceProduct, setTotalPriceProduct] = useState<number>(price);

    
  function formatNumberCart(num: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);
  }

  function addProduct(): void {
    if (countProduct < 0) {      
      return
    }
    const addProduct = countProduct + 1
    let addPrice = totalPriceProduct 
    let PriceTotalProduct = addPrice + price
    setCountProduct(addProduct)  
    setTotalPriceProduct(PriceTotalProduct)
  }

  function restProduct(): void {
    if (countProduct > 1) {
      const restProduct = countProduct - 1;
      let restPrice = totalPriceProduct;
      let priceTotalProduct = restPrice - price;
      setTotalPriceProduct(priceTotalProduct);
      setCountProduct(restProduct);
    }
    return
  }

  return (
    <>
      <section className="cart">
        <figcaption>
          <img className="image-cart" src={image} alt={title} />
          <p className="image-count">{countProduct}</p>
         
        </figcaption>
        <aside className="cart-body">
          <h5>{title.substring(0, 20)}</h5>
          <p>{formatNumberCart(price)}</p>
          <aside className="cart-total">
            <button className="button-cart" onClick={restProduct}>
              -
            </button>
            <small>{countProduct}</small>
            <button className="button-cart" onClick={addProduct}>
              +
            </button>
            <small>{formatNumberCart(totalPriceProduct)}</small>
          </aside>
        </aside>
      </section>
    </>
  );
};