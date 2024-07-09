import React from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorText, label, ...props }, ref) => {
    return (
      <div ref={ref}>
        {label && (
          <label htmlFor={props.id} className={className}>
            {label}
          </label>
        )}
        <input {...props} />
        {errorText && <p>{errorText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
