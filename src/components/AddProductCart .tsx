import { PropsProduct } from "./Home";

export const AddProductCart = ({ title, image, price, quantity }: PropsProduct): JSX.Element => {

  return (
    <>
      <section className="cart">
        <figcaption>
          <img className="image-cart" src={image} alt={title} />
          <p className="image-count">{ quantity }</p>
        </figcaption>
        <aside className="cart-body">
          <h5>{title.substring(0, 20)}</h5>
          <p>{ price }</p>
          <aside className="cart-total">
            <button className="button-cart" >-</button>
            <small>{ quantity }</small>
            <button className="button-cart">+</button>
            <small>{ price }</small>
          </aside>
        </aside>
      </section>
    </>
  );
};