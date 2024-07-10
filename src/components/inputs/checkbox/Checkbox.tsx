import React from "react";
import "./Checkbox.scss";
interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, label, ...props }, ref) => (
    <div ref={ref} className="checkbox-wrapper">
      <input type="checkbox" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </div>
  )
);

Checkbox.displayName = "Checkbox";
