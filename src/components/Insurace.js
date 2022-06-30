import React, { useState } from "react";
import { useSafeSetState } from "react-admin";
import { Container, Row, Col, Button } from "react-bootstrap";
import useGlobal from "../hooks/useGlobal";
import CheckIcon from "@mui/icons-material/Check";
import { Check } from "@mui/icons-material";

export default function Insurance() {
  const { userDef, setUserDef } = useGlobal();
  const [isOpen, setIsOpen] = useState(false);
  const [cancelationInsurance, setCancelationInsurance] = useState(false);
  const [assistInsurance, setAssistInsurance] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeCancelation = () => {
    setCancelationInsurance(!cancelationInsurance);
  };

  const handleAssistInsurance = () => {
    setAssistInsurance(!assistInsurance);
  };

  return (
    <div as={Col} className="col-12 bg-primary my-auto mt-3">
      <Button className="text-center text-white col-12" onClick={handleOpen}>
        <h4>Seguros</h4>
      </Button>
      {isOpen && (
        <>
          <div className="bg-primary row fs-3  border border-primary">
            <div className="col-6 p-3">
              <div className="row">
                <div className="col-10 mx-auto bg-white">
                  <div className="row">
                    <div className="col-12">Seguro de cancelacion</div>
                  </div>
                  <div className="row text-start fs-4 ps-2">
                    Protegete contra cualquier imprevisto que pueda surgir en el
                    viaje
                  </div>
                  <div className="col-10 text-start fs-4">
                    <ul>
                      <li>
                        Cobertura en caso de enfermedad(incluido COVID-19) o
                        accidente grave
                      </li>
                      <li>Robo de documentacion</li>
                      <li>Incorporacion a una nueva empresa</li>
                    </ul>
                  </div>
                  <Button
                    className={`col-8 my-3 fs-3 ${
                      cancelationInsurance ? "bg-success" : ""
                    }`}
                    onClick={handleChangeCancelation}
                  >
                    {cancelationInsurance ? (
                      <CheckIcon />
                    ) : (
                      "Contratar para todos"
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-6 p-3">
              <div className="row">
                <div className="col-10 mx-auto bg-white">
                  <div className="row">
                    <div className="col-12">Asistencia de viaje</div>
                  </div>
                  <div className="row text-start fs-4 ps-2">
                    Obten el reembolso total de tu vuelo, incluyendo tasas, en
                    caso de que no puedas viajar
                  </div>
                  <div className="col-10 text-start fs-4">
                    <ul>
                      <li>
                        Gastos medicos(incluido COVID-19) y odontologicos en el
                        destino
                      </li>
                      <li>Traslado sanitario y regreso anticipado al origen</li>
                      <li>Prolongacion de estancia en el hotel</li>
                    </ul>
                  </div>
                  <Button
                    className={`col-8 my-3 fs-3 ${
                      assistInsurance ? "bg-success" : ""
                    }`}
                    onClick={handleAssistInsurance}
                  >
                    {assistInsurance ? <CheckIcon /> : "Contratar para todos"}
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
