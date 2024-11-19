import React from "react";

const RadioGroup = ({ options, selectedOption, onChange, name }: any) => {
  return (
    <div className="radio-group">
      {options.map((option: any, index: number) => (
        <div className="radio" key={index}>
          <label>
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={selectedOption === option}
              onClick={() => onChange(option)}
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
