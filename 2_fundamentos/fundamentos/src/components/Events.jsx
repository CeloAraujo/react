import React from "react";

const Events = () => {
  const handleClick = () => {
    console.log(e)
    console.log("Testando");
  };

//  8- função de renderização
const renderSomething = (x) => {
    if (x){
        return <h1>renderizando</h1>
    }else{
        return <h1>Renderizando outro</h1>
    }
}

  return (
    <div>
      <button onClick={() => console.log("Testando um evento")}>
        Clique Aqui
      </button>
      {/* 7- evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui- função</button>
      </div>
      {/* 8- funcao com render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
