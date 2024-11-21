import React, { useState } from "react";
import "./select.scss";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
const CustomSelect = ({ options, placeholder, disabled, tag }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const selectOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const optionClick = (value: any) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${disabled ? "disabled" : ""}`}>
      <div
        className={`selected ${isOpen ? "open" : ""} ${tag ? "tag" : ""}`}
        onClick={selectOpen}
      >
        <p className="selected-text">
          {selected || placeholder || "선택하세요"}
        </p>
        <span className="arrow">
          <Arrow fill={`${disabled ? "#888888" : "#222222"}`} />
        </span>
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option: any) => (
            <li
              key={option.value}
              className={option.value === selected ? "active" : ""}
              onClick={() => optionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
