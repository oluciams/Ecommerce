import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

export const TotalPriceCart = (): JSX.Element => {

  const { subtotalPriceCart } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <section className="total-price-cart">
        <p className="total-price-body">Subtotal: { subtotalPriceCart}</p>
        <p className="total-price-body">Tax: $1.96</p>
        <p className="total-price-body">
          Total: <small className="total-price">$30.12</small>
        </p>
      </section>
    </>
  );
};
