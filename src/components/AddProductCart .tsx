import { useDispatch } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity } from "../redux-store/reducer/slices/cartSlice";
import { PropsProduct } from "../types/app";

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
          <p>{price}</p>
          <aside className="cart-total">
            <button
              onClick={() =>
                dispatch(
                  decreaseProductQuantity({ id, title, image, price, quantity })
                )
              }
              className="button-cart"
            >
              -
            </button>
            <small>{quantity}</small>
            <button
              onClick={() =>
                dispatch(
                  increaseProductQuantity({ id, title, image, price, quantity })
                )
              }
              className="button-cart"
            >
              +
            </button>
            <small>{price}</small>
          </aside>
        </aside>
      </section>
    </>
  );
};