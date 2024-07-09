import React from "react";
import "./Title.scss";
export const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1 ref={ref} className={className} {...props}>
    {props.children}
  </h1>
));

Title.displayName = "Title";
