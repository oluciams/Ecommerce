import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux-store/reducer/slices/cartSlice";
import { Product, PropsProduct } from "../types/app";
import { formatNumber } from "../utils/formatNumber";
import styles from "../styles.module.css";
import { RootState } from "../redux-store/store";
import { getProducts } from "../redux-store/reducer/slices/productsSlice";
import { toggleSelect } from "../utils/toggleSelect";
import { CheckCart } from "./Icons";


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
                <CheckCart />
                In Cart
              </button>
            ) : (
              <button
                onClick={() => changeButton({ id, title, price, image })}
              >
                Add To Cart
              </button>
              
            )}
          </aside>
        </aside>
      </section>
    </>
  );
};