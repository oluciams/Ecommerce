import { useState } from "react";
import { PropsProduct } from "./Home";
// export type FormatNumber = (num: number) => number;

export const Card = ({ id, title, image, price }: PropsProduct): JSX.Element => {

const [buttonCart, setButtonCart] = useState<boolean>(true);

  
  function formatNumber(num: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(num)
  }

  function handleAddProductCart() {
    setButtonCart(false)
    console.log("adiciona al carrito")
  }

  return (
    <>
      <section key={id} className="card">
        <img src={image} alt={title} />
        <aside className="card-body">
          <h5>{title.substring(0, 20)}</h5>
          <p>{formatNumber(price)} </p>
          <aside>
            {buttonCart ? (
              <button onClick={handleAddProductCart}>Add To Cart</button>
            ) : (
              <button onClick={()=> setButtonCart(true)} className="button-addCart">
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.877104 6.28555C1.65815 5.50451 2.92448 5.50451 3.70553 6.28555L7.94817 10.5282L17.8477 0.6287C18.6287 -0.152349 19.895 -0.152348 20.6761 0.6287C21.4571 1.40975 21.4571 2.67608 20.6761 3.45713L7.94817 16.185L0.877104 9.11398C0.0960556 8.33293 0.0960556 7.0666 0.877104 6.28555Z"
                    fill="white"
                  />
                </svg>
                In Cart
              </button>
            )}
          </aside>
        </aside>
      </section>
    </>
  );
}