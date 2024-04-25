import { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // 1-resgatando dados
  const [products, setProducts] = useState([]);

  // 4- custom hook
  const { data: items, httpConfig } = useFetch(url);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     console.log(data);

  //     setProducts(data);
  //   }
  //   getData();
  // }, []);

  // 2-envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 5- refatorando post
    const product = {
      name,
      price,
    };
    httpConfig(product, "POST");

   
    // console.log(product);
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3- carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  return (
    <>
      <div>
        <h1>Http em react</h1>
        {/* 1 - resgatando dados */}
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R${product.price}
              </li>
            ))}
        </ul>
        {/* 2-enviando dados */}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <span>Preço</span>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <input type="submit" value="enviar" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
