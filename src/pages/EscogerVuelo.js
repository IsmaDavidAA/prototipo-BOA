import React from "react";
import useGlobal from "../hooks/useGlobal";
import MyStepper from "../components/Stepper";
import Prices from "../components/Prices";
export default function EscogerVuelo() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <div class="container">
      <MyStepper as={1} />
      <h1>EscogerVuelo</h1>
      <Prices/>
    </div>
  );
}
