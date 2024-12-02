import React, { useState } from "react";
import "./badge.scss";
const Badge = ({ value, color, size }: any) => {
  return (
    <span className={`badge ${color ? color : ""} ${size ? size : ""}`}>
      {value}
    </span>
  );
};

export default Badge;
