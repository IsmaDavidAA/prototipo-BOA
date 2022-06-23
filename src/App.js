import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Buscador from "./pages/Buscador";
import EscogerVuelo from "./pages/EscogerVuelo";
import RegistroPasajero from "./pages/RegistroPasajero";
import ServicioEspecial from "./pages/ServicioEspecial";
import Pagar from "./pages/Pagar";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate replace to={"/buscador"} />} />
      <Route path={"/buscador"} element={<Buscador />} />
      <Route path={"/escoger_vuelo"} element={<EscogerVuelo />} />
      <Route path={"/registro"} element={<RegistroPasajero />} />
      <Route path={"/servicio"} element={<ServicioEspecial />} />
      <Route path={"pagar"} element={<Pagar />} />
    </Routes>
  );
}

export default App;
