import React from "react";

const RadioGroup = ({ options, selectedOption, onChange, name, children }) => {
  return (
    <div className="radio-group">
      {options.map((option, index) => (
        <div className="radio" key={index}>
          <label>
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedOption === option}
              onChange={() => onChange(option)}
            />
            <span className="radio-mark"></span>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
