import React from "react";
import "./radio.scss";

const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
  ...props
}: any) => {
  return (
    <div className="radio">
      <label className={disabled ? "disabled" : ""}>
        <input
          type="radio"
          name={name}
          value={value}
          defaultChecked={checked}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          {...props}
        />
        <span className="radio-mark"></span>
        {label ? label : <span className="hidden">선택 항목</span>}
      </label>
    </div>
  );
};

export default Radio;
