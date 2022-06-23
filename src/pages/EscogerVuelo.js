import React from "react";
import useGlobal from "../hooks/useGlobal";

export default function EscogerVuelo() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <div>
      <h1>EscogerVuelo</h1>
    </div>
  );
}
