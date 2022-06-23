import React from "react";
import useGlobal from "../hooks/useGlobal";

export default function Buscador() {
  const { userDef, setUserDef } = useGlobal();
  return (
    <div>
      <h1>Buscador</h1>
    </div>
  );
}
