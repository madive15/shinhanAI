import React, { useState } from "react";
import "./badge.scss";
const Badge = ({ value, color }: any) => {
  return <span className={`badge ${color ? color : ""}`}>{value}</span>;
};

export default Badge;
