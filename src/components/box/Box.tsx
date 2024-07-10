import React from "react";
import styles from "./Box.module.scss";

export const Box = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className + " " + styles.box}>
    {props.children}
  </div>
));

Box.displayName = "Button";
