import PropTypes from "prop-types";
import React from "react";
import "./buttonComponent.css"

const ButtonComponent = ({ onClick, children, className, disabled }) => {
    return (
        <button
        className={`btn buttonHE ${className}`}
        onClick={onClick}
        disabled={disabled}
        style={{ height: "3rem" }}
        >
        {children}
        </button>
    );
    }
ButtonComponent.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
}
export default ButtonComponent;