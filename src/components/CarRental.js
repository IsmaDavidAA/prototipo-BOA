import React, { useState } from "react";
import { useSafeSetState } from "react-admin";
import { Container, Row, Col, Button } from "react-bootstrap";
import useGlobal from "../hooks/useGlobal";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CheckIcon from "@mui/icons-material/Check";
import { Check } from "@mui/icons-material";

export default function CarRental() {
  const { userDef, setUserDef } = useGlobal();
  const [isOpen, setIsOpen] = useState(false);
  const [originCars, setOriginCars] = useState(0);
  const [destinyCars, setDestinyCars] = useState(0);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeOriginCars = (val) => {
    if (originCars !== val) {
      setOriginCars(val);
    } else {
      setOriginCars(0);
    }
  };
  const handleChangeDestinyCars = (val) => {
    if (destinyCars !== val) {
      setDestinyCars(val);
    } else {
      setDestinyCars(0);
    }
  };

  return (
    <div as={Col} className="col-12 bg-primary my-auto mt-3">
      <Button className="text-center text-white col-12" onClick={handleOpen}>
        <h4>Alquiler de autos</h4>
      </Button>
      {isOpen && (
        <>
          <div className="bg-primary row fs-3 text-white">
            <div className="col-6 p-3">Coches para el aeropuerto de origen</div>
            <div className="col-6 p-3">
              Coches para el aeropuerto de destino
            </div>
          </div>
          <div className="bg-white row fs-3  border border-primary">
            <div className="col-6 p-3">
              <div className="row">
                <div
                  className={`col-5 mx-auto ${
                    originCars === 1 ? "bg-success" : "bg-info"
                  }`}
                >
                  Toyota Corolla
                  <DirectionsCarIcon
                    style={{ height: "200px", width: "200px" }}
                  />
                  <div className="row">
                    <div className="col-5 mx-auto">
                      <PersonIcon fontSize="large" />4
                    </div>
                    <div className="col-5 mx-auto">
                      <WorkIcon fontSize="large" />1
                    </div>
                  </div>
                  <div className="col-12">200 Bs/dia</div>
                  <Button
                    className="col-10 fs-3 bg-success text-white"
                    onClick={() => handleChangeOriginCars(1)}
                  >
                    {originCars === 1 ? <CheckIcon /> : "Seleccionar"}
                  </Button>
                </div>
                <div
                  className={`col-5 mx-auto ${
                    originCars === 2 ? "bg-success" : "bg-info"
                  }`}
                >
                  Lancia Ypslion
                  <DirectionsCarIcon
                    style={{ height: "200px", width: "200px" }}
                  />
                  <div className="row">
                    <div className="col-5 mx-auto">
                      <PersonIcon fontSize="large" />4
                    </div>
                    <div className="col-5 mx-auto">
                      <WorkIcon fontSize="large" />1
                    </div>
                  </div>
                  <div className="col-12">200 Bs/dia</div>
                  <Button
                    className="col-10 fs-3 bg-success text-white"
                    onClick={() => handleChangeOriginCars(2)}
                  >
                    {originCars === 2 ? <CheckIcon /> : "Seleccionar"}
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-6 p-3">
              <div className="row">
                <div
                  className={`col-5 mx-auto ${
                    destinyCars === 1 ? "bg-success" : "bg-warning"
                  }`}
                >
                  Toyota 4Runner
                  <DirectionsCarFilledIcon
                    style={{ height: "200px", width: "200px" }}
                  />
                  <div className="row">
                    <div className="col-5 mx-auto">
                      <PersonIcon fontSize="large" />6
                    </div>
                    <div className="col-5 mx-auto">
                      <WorkIcon fontSize="large" />2
                    </div>
                  </div>
                  <div className="col-12">350 Bs/dia</div>
                  <Button
                    className="col-10 fs-3 bg-success text-white"
                    onClick={() => handleChangeDestinyCars(1)}
                  >
                    {destinyCars === 1 ? <CheckIcon /> : "Seleccionar"}
                  </Button>
                </div>
                <div
                  className={`col-5 mx-auto ${
                    destinyCars === 2 ? "bg-success" : "bg-warning"
                  }`}
                >
                  Suzuki Vitara
                  <DirectionsCarFilledIcon
                    style={{ height: "200px", width: "200px" }}
                  />
                  <div className="row">
                    <div className="col-5 mx-auto">
                      <PersonIcon fontSize="large" />5
                    </div>
                    <div className="col-5 mx-auto">
                      <WorkIcon fontSize="large" />2
                    </div>
                  </div>
                  <div className="col-12">300 Bs/dia</div>
                  <Button
                    className="col-10 fs-3 bg-success text-white"
                    onClick={() => handleChangeDestinyCars(2)}
                  >
                    {destinyCars === 2 ? <CheckIcon /> : "Seleccionar"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
