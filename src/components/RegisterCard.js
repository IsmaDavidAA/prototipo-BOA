import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CleaningServicesOutlined,
  ExpandMore,
  Search,
} from "@mui/icons-material";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
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
import { MADUREZ_PERSONA } from "../constants/Constant";

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
        {props.data.persona === MADUREZ_PERSONA.ADULTO ? (
          <FontAwesomeIcon
            icon={solid("person-walking-luggage")}
            style={{
              fontSize: "1.6rem",
            }}
          />
        ) : props.data.persona === MADUREZ_PERSONA.NIÑO ? (
          <FontAwesomeIcon
            icon={solid("child")}
            style={{
              fontSize: "1.6rem",
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={solid("baby")}
            style={{
              fontSize: "1.6rem",
            }}
          />
        )}
        <Typography sx={{ marginLeft: "1rem", color: "text.secondary" }}>
          {props.data.persona}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ContainerCard>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="standard-error-helper-text"
              label="Viajero frecuente"
              variant="standard"
              style={{ paddingBottom: "0.5rem" }}
            />
            <IconButton aria-label="search">
              <Search />
            </IconButton>
            <IconButton aria-label="search">
              <CleaningServicesOutlined />
            </IconButton>
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
          <ContainerRow>
            <div style={{ padding: "1rem" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={props.data.necesidadesEspeciales}
                    // onChange={() => {
                    //   props.handleChangeNecesidadesEspeciales(props.index);
                    // }}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="¿Es pasajero con necesidades especiales?"
              />
            </div>
          </ContainerRow>
        </ContainerCard>
      </AccordionDetails>
    </Accordion>
  );
};
export default RegisterCard;
