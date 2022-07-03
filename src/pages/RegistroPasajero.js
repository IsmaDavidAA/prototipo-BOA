import React, { useState } from "react";
import RegisterCard from "../components/RegisterCard";
import useGlobal from "../hooks/useGlobal";
import { ContainerRegisterCards } from "../styles/StyledComponents";
import { PasajerosPrueba1 } from "../constants/Mocks";
export default function RegistroPasajero() {
  const { userDef, setUserDef } = useGlobal();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <h1>Registro de pasajero</h1>
      <div>
        <p>¿Aún eres viajero frecuente?</p>
        <button>Registrate</button>
        <ContainerJoin>
        

        </ContainerJoin>
        <ContainerRegisterCards>
          {PasajerosPrueba1.map((data, index) => (
            <RegisterCard
              panel={`panel${index + 1}`}
              expanded={expanded}
              data={data}
              index={index + 1}
              handleChange={handleChange}
            />
          ))}
        </ContainerRegisterCards>
      </div>
    </div>
  );
}
