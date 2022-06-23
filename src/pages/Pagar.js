import React from "react";
import useGlobal from "../hooks/useGlobal";

export default function Pagar() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <div>
      <h1>Pagar</h1>
    </div>
  );
}
