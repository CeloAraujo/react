import { createContext, createRef, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { ...state, color: "red" };
    case "blue":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "black" });

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  );
};
