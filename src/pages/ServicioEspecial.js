import React from "react";
import useGlobal from "../hooks/useGlobal";

export default function ServicioEspecial() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <div>
      <h1>ServicioEspecial</h1>
    </div>
  );
}
