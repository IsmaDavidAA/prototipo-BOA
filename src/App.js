import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Buscador from "./pages/Buscador";
import EscogerVuelo from "./pages/EscogerVuelo";
import RegistroPasajero from "./pages/RegistroPasajero";
import ServicioEspecial from "./pages/ServicioEspecial";
import Pagar from "./pages/Pagar";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate replace to={"/buscador"} />} />
        <Route path={"/buscador"} element={<Buscador />} />
        <Route path={"/escoger_vuelo"} element={<EscogerVuelo />} />
        <Route path={"/registro"} element={<RegistroPasajero />} />
        <Route path={"/servicio"} element={<ServicioEspecial />} />
        <Route path={"pagar"} element={<Pagar />} />
      </Routes>
    </div>
  );
}

export default App;
