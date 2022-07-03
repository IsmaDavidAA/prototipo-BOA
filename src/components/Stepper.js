import React from "react";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";

const MyStepper = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
      }}
    >
      <Stepper activeStep={props.as} alternativeLabel>
        {[
          "Buscar vuelo",
          "Escoger vuelo",
          "Registrar pasajeros",
          "Servicios especiales",
          "Pagar",
        ].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default MyStepper;
