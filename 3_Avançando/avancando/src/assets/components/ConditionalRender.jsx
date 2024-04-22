import React from "react";

const ConditionalRender = () => {
  const x = true;

  const name = "Marcelo";
  return (
    <div>
      {/* 7-render condicional */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}

      {/* 8- Else */}
      <h4>Render ternário:</h4>
      {name === "João" ? (
        <div>
          <p>Olá João!</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
