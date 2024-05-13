import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Contact = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Página de controle</h1>
      <p>Valor do counter: {counter}</p>
    </div>
  );
};

export default Contact;
