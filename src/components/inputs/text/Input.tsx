import React from "react";
import "./Input.scss";
import { InputProps } from "../types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorText, label, ...props }, ref) => {
    return (
      <div ref={ref} className="input-wrapper">
        {label && <label htmlFor={props.id}>{label}</label>}
        <input {...props} />
        {errorText && <p>{errorText.message}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
