import React, { useEffect, useState } from "react";
import "./checkbox.scss";

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled,
  id,
  ...props
}: any) => {
  return (
    <div className="checkbox">
      <label className={disabled ? "disabled" : ""} htmlFor={id}>
        <input
          type="checkbox"
          defaultChecked={checked}
          onClick={(e) => onChange(!checked)}
          disabled={disabled}
          id={id}
          {...props}
        />
        <span className={`check-mark ${label ? "is-label" : ""}`}></span>
        {label ? label : <span className="hidden">선택 항목</span>}
      </label>
    </div>
  );
};

export default Checkbox;
