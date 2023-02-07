import { useDispatch } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity } from "../redux-store/reducer/slices/cartSlice";
import { PropsProduct } from "../types/app";
import { formatNumber } from "../utils/formatNumber";

export const AddProductCart = ({id, title, image, price, quantity }: PropsProduct): JSX.Element => {

  const dispatch = useDispatch()

  return (
    <>
      <section className="cart">
        <figcaption>
          <img className="image-cart" src={image} alt={title} />
          <p className="image-count">{quantity}</p>
        </figcaption>
        <aside className="cart-body">
          <h5>{title.substring(0, 20)}</h5>
          <p>{formatNumber(price)}</p>
          <aside className="cart-total">
            <button
              onClick={() => dispatch(decreaseProductQuantity({ id }))}
              className="button-cart"
              disabled={(quantity as number) <= 1}
            >
              -
            </button>
            <small>{quantity}</small>
            <button
              onClick={() => dispatch(increaseProductQuantity({ id }))}
              className="button-cart"
            >
              +
            </button>
            <small>{formatNumber(price)}</small>
          </aside>
        </aside>
      </section>
    </>
  );
};