import React from "react";
import useGlobal from "../hooks/useGlobal";
import MyStepper from "../components/Stepper";

export default function EscogerVuelo() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <div>
      <MyStepper as={1} />
      <h1>EscogerVuelo</h1>
    </div>
  );
}
