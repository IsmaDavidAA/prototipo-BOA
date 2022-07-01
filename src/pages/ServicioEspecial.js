import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import useGlobal from "../hooks/useGlobal";
import ExtraLuggage from "../components/ExtraLuggage";
import CarRental from "../components/CarRental";
import Insurance from "../components/Insurace";

export default function ServicioEspecial() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <Container className="mt-5">
      <Row as={Col} className="text-center ">
        <h1>Servicios especiales(Opcional)</h1>
        <ExtraLuggage />
        <CarRental />
        <Insurance />
        <Button className="fs-3 col-4 mx-auto mt-5">Continuar</Button>
      </Row>
    </Container>
  );
}
