import { useEffect, useState } from "react";
import { Card } from "./Card";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export const Home = (): JSX.Element => {
  
  const [products, setProducts] = useState<Array<Product>>([])
  
  async function fetchApi(){
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();
    setProducts(data);
    console.log(data)
  }

 useEffect(() => {
  fetchApi()
 }, []);

  return (
    <>
      <section>
        <h1>Products</h1>
        <div className="cards">
          {products.map(({ id, title, image })  => (
            <Card key={id} id={id} title={title} image={image} />

            // <li key={id}>{title}
            //   <img style={ {width:"24px", height: "20px"}} src={ image} alt="" />
            // </li>
          ))}
        </div>
      </section>
    </>
  );
}