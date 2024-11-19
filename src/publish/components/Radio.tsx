import React from "react";
import "./radio.scss";

type PropsRadio = {
  label?: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (checked: string) => void;
  disabled?: boolean;
  id: string;
};

const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
  ...props
}: PropsRadio) => {
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
