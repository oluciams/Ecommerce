import { useDispatch, useSelector } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity, remove } from "../redux-store/reducer/slices/cartSlice";
import { ProductId, PropsProduct } from "../types/app";
import { formatNumber } from "../utils/formatNumber";
import styles from "../styles.module.css";
import { toggleSelect } from "../utils/toggleSelect";
import { getProducts } from "../redux-store/reducer/slices/productsSlice";
import { RootState } from "../redux-store/store";
import { CartTrash } from "./Icons";

export const AddProductCart = ({
  id,
  title,
  image,
  price,
  quantity,
  totalPrice,
}: PropsProduct): JSX.Element => {

  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const deleteProduct = ({ id }: ProductId) => {

    dispatch(remove({ id }));
    const newProducts = toggleSelect(id, products);
    dispatch(getProducts(newProducts));
  };

  return (
    <>
      <section className={styles["cart"]}>
        <figcaption >
          <img className={styles["cart-image"]} src={image} alt={title} />
        </figcaption>
        <aside
          className={styles["cart-body"]}
        >
          <h5>{title.substring(0, 15)}</h5>
          <p>{formatNumber(price)}</p>

          <aside className={styles["cart-total"]}>
            <button
              onClick={() => dispatch(decreaseProductQuantity({ id }))}
              className={styles["cart-button"]}
              disabled={(quantity as number) <= 1}
            >
              -
            </button>
            <small>{quantity}</small>
            <button
              onClick={() => dispatch(increaseProductQuantity({ id }))}
              className={styles["cart-button"]}
            >
              +
            </button>
            <small>{formatNumber(totalPrice as number)}</small>
          </aside>
        </aside>
        <button
          onClick={() => deleteProduct({ id })}
          className={styles["cart-trash"]}
        >
          <CartTrash />
        </button>
      </section>
    </>
  );
};