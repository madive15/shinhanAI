// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content

// need style

// Props type
export interface IPageProps {
    percent?: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: ProgressBar
 * ProgressBar
 */
const ProgressBar: React.FC<IPageProps> = (props) => {
    const percent = props.percent ?? 0;
    const barColor =
        percent > 0 && percent < 30
            ? "red"
            : percent >= 30 && percent < 60
            ? "gray"
            : percent >= 60 && percent < 80
            ? "green"
            : "blue";
    return (
        <div className={`progress-wrap ${barColor}`}>
            <div className="progress-bar-track">
                <div
                    className="progress-bar"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
            <span>{percent}%</span>
        </div>
    );
};
export default ProgressBar;
