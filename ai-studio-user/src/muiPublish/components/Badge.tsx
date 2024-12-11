import React, { useState } from "react";

const Badge = ({ value, color, size }: any) => {
  return (
    <span className={`badge ${color ? color : ""} ${size ? size : ""}`}>
      {value}
    </span>
  );
};

export default Badge;
