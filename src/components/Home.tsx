import { useEffect } from "react";

export const Home = () => {

  async function fetchApi() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()    
    console.log(data)
  }

 useEffect(() => {
  fetchApi()
 }, []);

  return (
    <h1>Home</h1>

  )
}