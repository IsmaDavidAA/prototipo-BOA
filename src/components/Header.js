import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerOption,
  HeaderStyled,
  NavStyled,
} from "../styles/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import BOA from "../assets/logoBoa.png";
const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img
          src={BOA}
          style={{
            width: "120px",
            height: "60px",
          }}
          alt="logo"
        />
      </div>
      <NavStyled>
        <ContainerOption>Política de equipaje</ContainerOption>
        <ContainerOption>Ubicaciónes</ContainerOption>
        <ContainerOption>Servicios especiales</ContainerOption>
        <ContainerOption>Somos una BOA</ContainerOption>
        <ContainerOption>Servicios de aeropuerto</ContainerOption>
        <ContainerOption>Planifica tu viaje</ContainerOption>
      </NavStyled>
    </HeaderStyled>
  );
};
export default Header;
