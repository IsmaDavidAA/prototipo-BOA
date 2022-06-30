import React, { useState } from "react";
import { useSafeSetState } from "react-admin";
import { Container, Row, Col, Button } from "react-bootstrap";
import useGlobal from "../hooks/useGlobal";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WorkIcon from "@mui/icons-material/Work";

export default function ExtraLuggage() {
  const { userDef, setUserDef } = useGlobal();
  const [isOpen, setIsOpen] = useState(false);
  const [luggageMap, setLuggageMap] = useState([
    {
      zero: false,
      one: false,
      two: false,
      three: false,
    },
    {
      zero: false,
      one: false,
      two: false,
      three: false,
    },
    {
      zero: false,
      one: false,
      two: false,
      three: false,
    },
  ]);
  const [passengersArray, setPassengersArray] = useState(["fa", "is", "jhosm"]);
  const [currentPassenger, setCurrentPassenger] = useState(0);
  const [price, setPrice] = useState(0);
  const [numberOfExtras, setNumberOfExtras] = useState(0);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleAddLuggage = (op, value) => {
    const infoMap = ["zero", "one", "two", "three"];
    const option = infoMap[op];
    const priceMap = [200, 300, 400, 500];
    let priceCopy = price;
    if (value) {
      if (!luggageMap[currentPassenger][option]) {
        priceCopy = price + priceMap[op];
        setNumberOfExtras(numberOfExtras + 1);
      }
    } else {
      if (luggageMap[currentPassenger][option]) {
        priceCopy = price - priceMap[op];
        setNumberOfExtras(numberOfExtras - 1);
      }
    }
    setPrice(priceCopy);
    const copy = luggageMap;
    copy[currentPassenger][option] = value;
    setLuggageMap([...copy]);
  };

  const handleChangePassenger = (index) => {
    setCurrentPassenger(index);
  };

  return (
    <div as={Col} className="col-12 bg-primary my-auto">
      <Button className="text-center text-white col-12" onClick={handleOpen}>
        <h4>Equipaje extra</h4>
      </Button>
      {isOpen && (
        <div className="bg-primary row">
          <div as={Col} className="col-4">
            {passengersArray &&
              passengersArray.map((p, index) => (
                <Button
                  className={`col-12 bg-secondary fs-2 ${
                    currentPassenger === index ? "bg-info" : ""
                  }`}
                  onClick={() => handleChangePassenger(index)}
                >
                  Pasajero {index + 1}
                </Button>
              ))}
          </div>
          <div as={Row} className="row col-8 bg-white p-3 fs-4">
            <div
              as={Col}
              className={`col-3 border border-white ${
                luggageMap[currentPassenger].zero ? "bg-success" : "bg-warning"
              }`}
            >
              <div
                as={Col}
                className="col-6 rounded-circle bg-white mx-auto mt-3"
              >
                <div className="col-12 text-center text-black pt-3">15 kg</div>
                <div className="col-12 text-black fs-1">
                  <ShoppingBagIcon fontSize="large" />
                </div>
              </div>
              <div as={Col} className="col-12">
                <div className="col-12 text-center text-black">200 Bs</div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(0, false)}
                  >
                    -
                  </Button>
                </div>
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(0, true)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div
              as={Col}
              className={`col-3 border border-white ${
                luggageMap[currentPassenger].one ? "bg-success" : "bg-warning"
              }`}
            >
              <div
                as={Col}
                className="col-6 rounded-circle bg-white mx-auto mt-3"
              >
                <div className="col-12 text-center text-black pt-3">20 kg</div>
                <div className="col-12 text-black fs-1">
                  <BusinessCenterIcon fontSize="large" />
                </div>
              </div>
              <div as={Col} className="col-12">
                <div className="col-12 text-center text-black">300 Bs</div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(1, false)}
                  >
                    -
                  </Button>
                </div>
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(1, true)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div
              as={Col}
              className={`col-3 border border-white ${
                luggageMap[currentPassenger].two ? "bg-success" : "bg-warning"
              }`}
            >
              <div
                as={Col}
                className="col-6 rounded-circle bg-white mx-auto mt-3"
              >
                <div className="col-12 text-center text-black pt-3">25 kg</div>
                <div className="col-12 text-black fs-1">
                  <BusinessCenterIcon fontSize="large" />
                </div>
              </div>
              <div as={Col} className="col-12">
                <div className="col-12 text-center text-black">400 Bs</div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(2, false)}
                  >
                    -
                  </Button>
                </div>
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(2, true)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div
              as={Col}
              className={`col-3 border border-white ${
                luggageMap[currentPassenger].three ? "bg-success" : "bg-warning"
              }`}
            >
              <div
                as={Col}
                className="col-6 rounded-circle bg-white mx-auto mt-3"
              >
                <div className="col-12 text-center text-black pt-3">30 kg</div>
                <div className="col-12 text-black fs-1">
                  <WorkIcon fontSize="large" />
                </div>
              </div>
              <div as={Col} className="col-12">
                <div className="col-12 text-center text-black">500 Bs</div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(3, false)}
                  >
                    -
                  </Button>
                </div>
                <div className="col-6">
                  <Button
                    className="col-8 bg-light rounded-circle text-primary fs-3 text-bold"
                    onClick={() => handleAddLuggage(3, true)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary">
            <div className="row text-white fs-4">
              <div className="col-6">
                Total de equipaje extra: {numberOfExtras}
              </div>
              <div className="col-6">Precio total: {price}Bs</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
