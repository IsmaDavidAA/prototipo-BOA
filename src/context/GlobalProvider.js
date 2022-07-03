import React, { createContext } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [userDef, setUserDef] = useSessionStorage("BOA", {
    de: "",
    para: "",
    tipo: "",
    ida: {
      fecha: new Date(),
      horaSalida: "",
      horaLlegada: "",
    },
    vuelta: {
      fecha: new Date(),
      horaSalida: "",
      horaLlegada: "",
    },
    pasajeros: [],
    impuestos: [],
    servicios: {
      equipaje: [],
      rentaAutos: {
        cocheOrigen: "",
        cocheDestino: "",
      },
      seguros: {},
    },
    precios: {
      adultos: 0,
      ninos: 0,
      bebes: 0,
    },
    precioTotal: 0,
  });

  return (
    <GlobalContext.Provider value={{ userDef, setUserDef }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
