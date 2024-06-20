import { FC } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button: FC<ButtonProps> = ({ onClick, buttonText, type = "button" }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
