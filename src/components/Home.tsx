import { useEffect, useState } from "react";

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

export const Home = ()=> {
  
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
      <h1>Home</h1>
      <ul>
        {
          products.map((product) => (

            <li key={product.id}>{product.title}
              <img style={ {width:"24px", height: "20px"}} src={ product.image} alt="" />
            </li>
          ))
        }
      </ul>
    </>

  )
}