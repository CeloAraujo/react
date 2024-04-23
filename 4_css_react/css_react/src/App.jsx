import { useState } from "react";
import "./App.css";

// 2-css de componente
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);

  // 4- Css inline dinamico
  const n = 15;

  // 5- classe dinamica
  const redTitle = true;
  return (
    <>
      <div>
        {/* Css global */}
        <h1 className="title">Css global no React</h1>
        {/* 2- css de componente */}
        <MyComponents />
        <p>Vazou o css para o componente</p>
        {/* 3- inline style */}
        <p
          style={{
            color: "#728590",
            padding: "20px",
            borderTop: "1px solid #999",
          }}
        >
          Este elemento tem estilo inline
        </p>
        {/* 4 inline style dinâmico */}
        <h2 style={n > 10 ? { color: "purple" } : { color: "orange" }}>
          Css dinâmico
        </h2>
        <h2 style={n > 20 ? { color: "purple" } : { color: "orange" }}>
          Css dinâmico
        </h2>
        {/* 5- classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>
          Este título tem uma classe
        </h2>
        {/* 6- Css modules  */}
        <Title/>
      </div>
    </>
  );
}

export default App;
