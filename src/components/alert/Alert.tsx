import React from "react";
import "./Alert.scss";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  onIconClick?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className="alert">
      <div>{props.children}</div>
      <div onClick={props.onIconClick}>X</div>
    </div>
  )
);

Alert.displayName = "Alert";
