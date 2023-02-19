import { useDispatch, useSelector } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity, remove } from "../redux-store/reducer/slices/cartSlice";
import { Product, PropsProduct } from "../types/app";
import { formatNumber } from "../utils/formatNumber";
import styles from "../styles.module.css";
import { toggleSelect } from "../utils/toggleSelect";
import { getProducts } from "../redux-store/reducer/slices/productsSlice";
import { RootState } from "../redux-store/store";

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

  const deleteProduct = ({ id, title, price, image }: Product) => {
    dispatch(remove({ id, title, price, image }));
    const newProducts = toggleSelect(id, products);
    dispatch(getProducts(newProducts));
  };

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
            <small className={styles["increase-price"]}>
              {formatNumber(totalPrice as number)}
            </small>
          </aside>
        </aside>
        <button
          onClick={() => deleteProduct({ id, title, price, image })}
          className={styles["trash"]}
        >
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
    </>
  );
};