import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  const guessNumbers = useMemo(() => {
    return ["150", "50", "999"];
  }, []);

  useEffect(() => {
    console.log("número correto foi alterado");
  }, [guessNumbers]);
  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {guessNumbers.includes(number) ? <p>Acertou o número</p> : ""}
    </div>
  );
};

export default HookUseMemo;
