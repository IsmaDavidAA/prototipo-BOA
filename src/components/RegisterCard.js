import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useGlobal from "../hooks/useGlobal";
import {
  ContainerCard,
  ContainerRegisterCards,
  ContainerRow,
  InputContainer,
} from "../styles/StyledComponents";

const RegisterCard = (props) => {
  const [DI, setDI] = React.useState("");

  const handleDIChange = (event) => {
    setDI(event.target.value);
  };

  return (
    <Accordion
      expanded={props.expanded === props.panel}
      onChange={props.handleChange(props.panel)}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          Pasajero {props.index}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {props.data.persona}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ContainerCard>
          <div style={{ padding: "1rem" }}>
            <TextField
              id="standard-error-helper-text"
              label="Viajero frecuente"
              variant="standard"
            />
          </div>
          <ContainerRow>
            <div style={{ padding: "1rem" }}>
              <TextField
                id={`standard-helper-text-${props.index}`}
                label="Nombre"
                // helperText="No hay nombre"
                variant="standard"
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <TextField
                id={`standard-helper-text-${props.index}`}
                label="Apellido paterno"
                // helperText="No hay apellido paterno"
                variant="standard"
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <TextField
                id={`standard-helper-text-${props.index}`}
                label="Apellido materno"
                // helperText="No hay apellido materno"
                variant="standard"
              />
            </div>
          </ContainerRow>
          <ContainerRow>
            <div style={{ padding: "1rem" }}>
              <FormControl
                variant="filled"
                sx={{
                  // padding: "1rem",
                  minWidth: "250px",
                }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Documento de identificación
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={DI}
                  onChange={handleDIChange}
                >
                  <MenuItem value={"Pasaporte"}>Pasaporte</MenuItem>
                  <MenuItem value={"Cédula de identidad"}>
                    Cédula de identidad
                  </MenuItem>
                  <MenuItem value={"DNI"}>DNI</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ padding: "1rem" }}>
              <TextField
                id={`standard-helper-text-${props.index}`}
                label="Número de documento"
                // helperText="Número de documento"
                variant="standard"
                type="number"
              />
            </div>
          </ContainerRow>
          <ContainerRow>
            <div style={{ padding: "1rem" }}>
              <TextField
                id={`standard-helper-text-${props.index}`}
                label="Teléfono"
                // helperText="Número de documento"
                variant="standard"
                type="number"
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <TextField
                id={`standard-helper-text-${props.index}`}
                label="Correo electrónico"
                // helperText=""
                variant="standard"
                type="email"
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <TextField
                id={`standard-helper-text-${props.index}`}
                label="Fecha de nacimiento"
                // helperText=""
                variant="standard"
                type="date"
                defaultValue={new Date().toISOString().substr(0, 10)}
              />
            </div>
          </ContainerRow>
        </ContainerCard>
      </AccordionDetails>
    </Accordion>
  );
};
export default RegisterCard;
