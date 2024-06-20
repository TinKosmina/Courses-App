import { FC } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

const Input: FC<InputProps> = ({
  labelText,
  placeholderText,
  onChange,
  value,
  type,
  name,
  error,
}) => {
  const inputId = `input-${labelText.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`container ${error ? "input-error" : ""}`}>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
        value={value}
        className={error ? "error-border" : ""}
      />
      <div className="error-container">
        {error && <span className="error-text">{error}</span>}
      </div>
    </div>
  );
};

export default Input;
