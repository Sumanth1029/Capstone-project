import React from "react";
import { useNavigate } from "react-router-dom";

export const CtaButton = (props) => {
  const navigate = useNavigate();

  const reservations = () => {
    navigate(`/${props.linkto}`);
  };
  return (
    <button className="cta" onClick={reservations}>
      {props.text}
    </button>
  );
};

export default CtaButton;
