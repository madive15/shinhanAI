import React from "react";
import "./textarea.scss";
const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  disabled,
  ...props
}: any) => {
  return (
    <div className="textarea">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        value={value}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default Textarea;
