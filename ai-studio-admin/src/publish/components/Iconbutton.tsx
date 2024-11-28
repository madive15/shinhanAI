// import { useState } from "react";
import "./button.scss";
function Button({ value, children, type, onClick, disabled }: any) {
  const classNames = type || "";

  return (
    <button
      type="button"
      className={`ico-btn`}
      onClick={onClick}
      disabled={disabled}
    >
      {type == "end" && <span>{value}</span>}
      {children}
      {type == "start" && <span>{value}</span>}
    </button>
  );
}
export default Button;
