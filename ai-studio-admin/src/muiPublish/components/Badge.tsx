import React, { useState } from "react";

const Badge = ({ value, color, size, style }: any) => {
  return (
    <span
      className={`badge ${color ? color : ""} ${size ? size : ""} `}
      style={{ ...style }}
    >
      {value}
    </span>
  );
};

export default Badge;
