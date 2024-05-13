// 1-Criando contexto

import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2- criar provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState();

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
