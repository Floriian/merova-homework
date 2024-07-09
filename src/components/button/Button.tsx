import React from "react";
import "./Button.scss";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={className}>
    {props.children}
  </button>
));

Button.displayName = "Button";
