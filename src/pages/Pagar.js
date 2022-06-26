import React from "react";
import useGlobal from "../hooks/useGlobal";
import FormCreditCard from "../components/FormCreditCard";
export default function Pagar() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <div class="container">
      <h1>Pagar</h1>
      
        <FormCreditCard/>
      
    </div>
  );
}
