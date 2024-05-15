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
  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeNumber}>Soma <p>(utilizando useEffect)</p></button>
    </div>
  );
};

export default HookUseEffect;
