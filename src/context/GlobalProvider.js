import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [userDef, setUserDef] = useLocalStorage("boa", {
    userDef: null,
  });

  return (
    <GlobalContext.Provider value={{ userDef, setUserDef }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
