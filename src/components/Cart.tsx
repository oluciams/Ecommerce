import { AddProductCart } from "./AddProductCart ";
import { TotalPriceCart } from "./TotalPriceCart";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import styles from "../styles.module.css";
import { CartIcon } from "./Icons";
import { useId } from "react";

export const Cart = (): JSX.Element => {

  const { items } = useSelector((state: RootState) => state.cart);
  const cartCheckboxId = useId()

  return (
    <>
      <label className={styles["showCart-button"]} htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className={styles["showCart-products"]}>
        <h1>Your Cart</h1>
        {items?.length > 0 ? (
          <>
            <section className={styles["cards2"]}>
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
            </section>
            <TotalPriceCart />
            </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </aside>
    </>
  );
};
