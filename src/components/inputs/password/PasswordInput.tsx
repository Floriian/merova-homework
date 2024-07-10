"use client";

import React, { useState } from "react";
import { InputProps } from "../types";
import "./PasswordInput.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorText, label, ...props }, ref) => {
    const [show, setShow] = useState<boolean>(false);
    return (
      <div ref={ref}>
        {label && <label htmlFor={props.id}>{label}</label>}
        <input {...props} type={show ? "text" : "password"} />
        <span className="toggle" onClick={() => setShow(!show)}>
          {show ? <VisibilityOff /> : <Visibility />}
        </span>
        {errorText && <p>{errorText.message}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = "Input";
