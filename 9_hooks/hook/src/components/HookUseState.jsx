import { useState } from "react";

const HookUseState = () => {
  // 1-useState
  let userName = "Rodrigo";
  const [name, setName] = useState("Marcelo");

  const changeNames = () => {
    setName("Marcelo Araujo");
  }
  return (
    <div>
      {/* 1-useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mude nome</button>
    </div>
  );
};

export default HookUseState;
