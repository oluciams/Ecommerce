import { PropsProduct } from "./Home";
// export type FormatNumber = (num: number) => number;

export const Card = ({ id, title, image, price }: PropsProduct): JSX.Element => {

  
  function formatNumber(num: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(num)
  }

  function handleAddProductCart() {
    console.log("adiciona al carrito")
  }

  return (
    <>
      <section key={id} className="card">
        <img src={image} alt={title} />
        <aside className="card-body">
          <h5>{title.substring(0, 20)}</h5>
          <p>{formatNumber(price)} </p>
          <aside>
            <button onClick={handleAddProductCart}>
              Add To Car
            </button>
          </aside>
        </aside>
      </section>
    </>
  );
}