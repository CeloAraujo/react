import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1- useEffect sem dependencia
  useEffect(() => {
    console.log("executou");
  });

  const [number, setNumber] = useState(10);

  const changeNumber = () => {
    setNumber(number + 0.5);
  };

  //   2-array de dependencias vazio
  useEffect(() => {
    console.log("Executado 1 vez apenas");
  }, []);

  //   3- array de dependencias com valores
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado quando muda anotherNumber");
    }
  }, [anotherNumber]);
  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeNumber}>
        Soma <p>(utilizando useEffect)</p>
      </button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        another++
      </button>
    </div>
  );
};

export default HookUseEffect;
