import React from "react";
import "./__styles__/index.css";

const buttonStyle = {
    margin: '10px 0',
    borderradius: '140px',
    width: '264px',
    height: '68px',
    background: '#191A23',
};
  
const Button = ({ label, handleClick }) => (
<button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
>
    {label}
</button>
);

export default Button