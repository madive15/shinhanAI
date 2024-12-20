import React, { useState } from "react";

const Badge = ({ value, color, size, type }: any) => {
    return (
        <span
            className={`badge ${color ? color : ""} ${size ? size : ""} ${
                type ? type : ""
            }`}
        >
            {value}
        </span>
    );
};

export default Badge;
