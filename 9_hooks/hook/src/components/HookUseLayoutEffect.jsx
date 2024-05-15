import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("nome");

  useEffect(() => {
    console.log("2");
    setName("Marcelo");
  }, []);

  useLayoutEffect(()=>{
    console.log("1")
    setName("João")
  },[])

  console.log(name);
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
    </div>
  );
};

export default HookUseLayoutEffect;
