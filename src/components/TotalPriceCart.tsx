import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { formatNumber } from "../utils/formatNumber";

export const TotalPriceCart = (): JSX.Element => {

  const { subtotalPriceCart, tax, totalCart } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <section className="total-price-cart">
        <p className="total-price-body">Subtotal: { formatNumber(subtotalPriceCart) }</p>
        <p className="total-price-body">Tax: { formatNumber(tax) }</p>
        <p className="total-price-body">
          Total: <small className="total-price">{ formatNumber(totalCart) }</small>
        </p>
      </section>
    </>
  );
};
