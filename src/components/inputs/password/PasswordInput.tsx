"use client";

import React, { useState } from "react";
import { InputProps } from "../types";
import "./PasswordInput.scss";

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorText, label, ...props }, ref) => {
    const [show, setShow] = useState<boolean>(false);
    return (
      <div ref={ref}>
        {label && <label htmlFor={props.id}>{label}</label>}
        <input {...props} type={show ? "text" : "password"} />
        <span
          className={"material-symbols-outlined toggle"}
          onClick={() => setShow(!show)}
        >
          visibility{show && "_off"}
        </span>
        {errorText && <p>{errorText.message}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = "Input";
