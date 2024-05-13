import { useState } from "react";

const HookUseState = () => {
  // 1-useState
  let userName = "Rodrigo";
  const [name, setName] = useState("Marcelo");

  const changeNames = () => {
    setName("Marcelo Araujo");
  };
  //   2- useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };
  return (
    <div>
      {/* 1-useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mude nome</button>
      {/* 2- useState e input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
        <p>Você tem {age} anos</p>
        <hr />
      </form>
    </div>
  );
};

export default HookUseState;
