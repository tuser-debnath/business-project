import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./Button.css";

const ThemeButton = (props) => {
  return (
    <>
      <Button className="theme-btn">{props.button}</Button>
    </>
  );
};

export default ThemeButton;
