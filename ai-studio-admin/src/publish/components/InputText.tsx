import React, { useEffect, useState } from "react";
import "./input.scss";
const InputText = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  disabled,
  error,
  pass,
  caption,
  tag,
  ...props
}: any) => {
  return (
    <div
      className={`input-area ${error ? "input-error" : ""} ${
        pass ? "input-pass" : ""
      }`}
    >
      <label htmlFor={id}>
        {label && <span>{label}</span>}
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={tag ? tag : ""}
          {...props}
        />
        {error && (
          <p className="input-caption error">
            <i></i>
            {error}
          </p>
        )}
        {pass && (
          <p className="input-caption pass">
            <i></i>
            {pass}
          </p>
        )}
        {caption && <p className="input-caption">{caption}</p>}
      </label>
    </div>
  );
};

export default InputText;
