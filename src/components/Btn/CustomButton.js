import React from "react";
import { Link } from "react-router-dom";

function CustomButton(props) {
  return (
    <>
      <Link to={props.link} target={props.target} className={props.class}>
        <div id={props.id}>{props.btnName}</div>
      </Link>
    </>
  );
}

export default CustomButton;
