import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import web from "../../../assets/img/headerLanding/headerWeb.webp";
import mobile from "../../../assets/img/headerLanding/headerMovil.webp";
import "./header.css";
import ButtonComponent from "../../../uiComponents/button/buttonComponent";

const Header = (props) => {
    const [version, setVersion] = useState((props.estado));
    useEffect(() => {
        setVersion(props.estado);
    }, [props.estado]);
    const img = [web, mobile];
  return (
    <div className="container-fluid alianza_div">
      <img
        src={img[version]}
        alt="alianza"
        width="3840 "
        height="2160"
        className="alianza-banner"
      />
      <ButtonComponent className="btn-danger btn-rounded">comenzar solicitud</ButtonComponent>
    </div>
  );
};

Header.propTypes = {
    estado: PropTypes.number.isRequired,
}

export default Header;
