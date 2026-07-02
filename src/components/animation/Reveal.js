import React from "react";
import "./Reveal.scss";

function Reveal({
  children,
  className = "",
  bottom,
  left,
  right,
  top,
  duration,
  distance,
  cascade,
  ...props
}) {
  return (
    <div className={`reveal ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export const Fade = Reveal;
export const Slide = Reveal;
