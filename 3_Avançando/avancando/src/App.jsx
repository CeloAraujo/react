import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2- imagem em assets
import imgJs from "./assets/js-react.png";

// 3- useState
import Data from "./assets/components/Data";

// 4- renderização de lista
import ListRender from "./assets/components/listRender";

// 7-render condicional
import ConditionalRender from "./assets/components/ConditionalRender";

// 8- props
import ShowUserName from "./assets/components/ShowUserName";

// 9- desestruturando props
import CarDetails from "./assets/components/CarDetails";

// 11- renderização de lista com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Vermelha", km: 5000 },
  { id: 2, brand: "Porsche", color: "Preta", km: 20 },
  { id: 3, brand: "Chevrolet", color: "Amarela", km: 47543 },
];
// 12- fragments
import Fragments from "./assets/components/Fragments";

// 13- children
import Container from "./assets/components/Container";
// 14- Função em prop
import ExecutarFunction from "./assets/components/ExecutarFunction";
// 15- state lift
import Message from "./assets/components/Message";
import ChangeMessage from "./assets/components/ChangeMessage";


function App() {
  const [count, setCount] = useState(0);

  // 14- funcao em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15- state lift

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Avançando em React</h1>
        {/* 1- Imagem em public */}
        <img src="/program.png" alt="Programming" />
        {/* 2-img em assets */}
        <img src={imgJs} alt="Outra imagem" />
        {/* 3- useState */}
        <Data />
        {/* 4- render de lista */}
        <ListRender />
        {/* 7- Render condicional */}
        <ConditionalRender />
        {/* 8- props */}
        <ShowUserName name="Marcelo" />

        {/* 9- desestruturando props */}
        <CarDetails brand="VW" km={3300} color="Preta" />

        {/* 10- reaproveitando componentes */}
        <CarDetails brand="VW" km={3300} color="Preta" />
        <CarDetails brand="Porsche" km={30} color="Preta" />
        <CarDetails brand="Fiat" km={27} color="Preta" />
        {/* 11- renderização de lista */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
          />
        ))}
        {/* 12- Fragments */}
        <Fragments />
        {/* 13- children */}
        <Container>
          <p>Imprimindo</p>
        </Container>
        <Container>
          <p>Imprimindo no componente pai 2</p>
          <p>Mandando componente jsx ^^</p>
        </Container>
        {/* 14- função em prop */}
        <ExecutarFunction MinhaFuncao={showMessage} />
        {/* 15 - state lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  );
}

export default App;
