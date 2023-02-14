import { useDispatch } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity } from "../redux-store/reducer/slices/cartSlice";
import { PropsProduct } from "../types/app";
import { formatNumber } from "../utils/formatNumber";
import styles from "../styles.module.css";

export const AddProductCart = ({
  id,
  title,
  image,
  price,
  quantity,
  totalPrice,
}: PropsProduct): JSX.Element => {
  
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles["cart"]}>
        <figcaption>
          <img className={styles["image-cart"]} src={image} alt={title} />
          <p className={styles["image-count"]}>{quantity}</p>
        </figcaption>
        <aside className={styles["cart-body"]}>
          <h5>{title.substring(0, 20)}</h5>
          <p>{formatNumber(price)}</p>
          <aside className={styles["cart-total"]}>
            <button
              onClick={() => dispatch(decreaseProductQuantity({ id }))}
              className={styles["button-cart"]}
              disabled={(quantity as number) <= 1}
            >
              -
            </button>
            <small>{quantity}</small>
            <button
              onClick={() => dispatch(increaseProductQuantity({ id }))}
              className={styles["button-cart"]}
            >
              +
            </button>
            <small>{formatNumber(totalPrice as number)}</small>
          </aside>
        </aside>
      </section>
    </>
  );
};