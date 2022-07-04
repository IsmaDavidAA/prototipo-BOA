import React from "react";
import MyStepper from "../components/Stepper";
import useGlobal from "../hooks/useGlobal";

export default function Buscador() {
  const { userDef, setUserDef } = useGlobal();
  return (
    <div>
      <MyStepper as={0} />
      <h1>Buscador</h1>
    </div>
  );
}
