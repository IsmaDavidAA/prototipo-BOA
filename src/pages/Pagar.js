import React from "react";
import useGlobal from "../hooks/useGlobal";
import MyStepper from "../components/Stepper";

export default function Pagar() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <div>
      <MyStepper as={4} />
      <h1>Pagar</h1>
    </div>
  );
}
