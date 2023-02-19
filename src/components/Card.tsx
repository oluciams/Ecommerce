import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux-store/reducer/slices/cartSlice";
import { Product, PropsProduct } from "../types/app";
import { formatNumber } from "../utils/formatNumber";
import styles from "../styles.module.css";
import { RootState } from "../redux-store/store";
import { getProducts } from "../redux-store/reducer/slices/productsSlice";
import { toggleSelect } from "../utils/toggleSelect";


export const Card = ({
  id,
  title,
  image,
  price,
  selected 
}: PropsProduct): JSX.Element => {

  const { products } = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch();

  const changeButton = ({ id, title, price, image }: Product) => {
    
    dispatch(add({ id, title, price, image }));
    const newProducts = toggleSelect(id, products);
    dispatch(getProducts(newProducts));
  };

  return (
    <>
      <section key={id} className={styles["card"]}>
        <img src={image} alt={title} />
        <aside className={styles["card-body"]}>
          <h5>{title.substring(0, 20)}</h5>
          <p>{formatNumber(price)} </p>
          <aside>
            {selected ? (
              <button className={styles["button-addCart"]}>
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.877104 6.28555C1.65815 5.50451 2.92448 5.50451 3.70553 6.28555L7.94817 10.5282L17.8477 0.6287C18.6287 -0.152349 19.895 -0.152348 20.6761 0.6287C21.4571 1.40975 21.4571 2.67608 20.6761 3.45713L7.94817 16.185L0.877104 9.11398C0.0960556 8.33293 0.0960556 7.0666 0.877104 6.28555Z"
                    fill="white"
                  />
                </svg>
                In Cart
              </button>
            ) : (
              <>
                <button
                  onClick={() =>
                    changeButton({ id, title, price, image })
                  }
                >
                  Add To Cart
                </button>
              </>
            )}
          </aside>
        </aside>
      </section>
    </>
  );
};