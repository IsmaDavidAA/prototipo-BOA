import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import useGlobal from "../hooks/useGlobal";
import ExtraLuggage from "../components/ExtraLuggage";
import CarRental from "../components/CarRental";

export default function ServicioEspecial() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <Container>
      <Row as={Col} className="text-center">
        <h1>Servicios especiales</h1>
        <ExtraLuggage />
        <CarRental />
      </Row>
    </Container>
  );
}
