import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import useGlobal from "../hooks/useGlobal";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";

export default function Buscador() {
  const { userDef, setUserDef } = useGlobal();

  return (
    <Container className="mt-5">
      <Row as={Col} className="text-center">
        <h1>Buscar vuelo</h1>
        <div className="bg-secondary">
          <div className="row">
            <div className="col-10 offset-1">
              <Form className="text-start fs-4 text-white">
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Ida y vuelta"
                      name="group1"
                      checked
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Solo ida"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Multi-vuelo"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 my-auto">
              <div className="row">
                <div className="col-9 bg-white text-black offset-1 fs-2">
                  <LocationOnIcon fontSize="large" />
                  De donde
                </div>
                <div className="col-2 my-auto text-white">
                  <CompareArrowsOutlinedIcon fontSize="large" />
                </div>
              </div>
            </div>
            <div className="col-2 my-auto">
              <Button className="col-11 bg-white fs-2 text-black">
                <LocationOnIcon fontSize="large" />A donde
              </Button>
            </div>
            <div className="col-2 my-auto">
              <Button className="col-12 bg-white fs-4 text-black">
                <CalendarMonthIcon fontSize="large" />
                Salida
              </Button>
            </div>
            <div className="col-2 my-auto">
              <Button className="col-12 bg-white fs-4 text-black">
                <CalendarMonthIcon fontSize="large" />
                Llegada
              </Button>
            </div>
            <div className="col-3 my-auto">
              <Button className="col-12 fs-1 text-white">Buscar</Button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
