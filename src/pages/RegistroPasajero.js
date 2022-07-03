import React, { useState } from "react";
import RegisterCard from "../components/RegisterCard";
import useGlobal from "../hooks/useGlobal";
import {
  ContainerJoin,
  ContainerRegisterCards,
} from "../styles/StyledComponents";
import { PasajerosPrueba1 } from "../constants/Mocks";

import { Button } from "@mui/material";
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
        <ContainerJoin>
          <p>
            ¿Aún eres viajero frecuente?,
            <span
              style={{
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              }}
            >
              ¡Registrate!
            </span>
          </p>
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
          <div
            style={{
              padding: "20px",
            }}
          >
            <Button variant="contained" color="primary">
              Continuar
            </Button>
          </div>
        </ContainerRegisterCards>
      </div>
    </div>
  );
}
