import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { formatNumber } from "../utils/formatNumber";
import styles from "../styles.module.css";

export const TotalPriceCart = (): JSX.Element => {

  const { subtotalPriceCart, tax, totalCart } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <section className={styles["total-price-cart"]}>
        <p> Subtotal:</p>
        <small>{formatNumber(subtotalPriceCart)}</small>
        <p>Tax:</p>
        <small>{formatNumber(tax)}</small>
        <p>Total:</p>
        <small className={styles["total-price"]}>{formatNumber(totalCart)}</small>
      </section>
    </>
  );
};
