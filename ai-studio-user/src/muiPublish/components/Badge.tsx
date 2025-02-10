import React, { useState } from "react";

const Badge = ({ value, color, size, type, classifi }: any) => {
    return (
        <div className="badge-box">
            <span
                // title={value.length >= 6 ? value : ""}
                className={`badge ${color ? color : ""} ${size ? size : ""} ${
                    type ? type : ""
                } ${classifi ? "classifi" : ""}`}
            >
                {value}
            </span>
            {classifi && <div className="badge-pop">{value}</div>}
        </div>
    );
};

export default Badge;
