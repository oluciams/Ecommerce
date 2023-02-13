import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { formatNumber } from "../utils/formatNumber";

export const TotalPriceCart = (): JSX.Element => {

  const { subtotalPriceCart, tax, totalCart } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <section className="total-price-cart">
        <p> Subtotal:</p>
        <small>{formatNumber(subtotalPriceCart)}</small>
        <p>Tax:</p>
        <small>{formatNumber(tax)}</small>
        <p>Total:</p>
        <small className="total-price">{formatNumber(totalCart)}</small>
      </section>
    </>
  );
};
