// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content

// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    percent?: number;
    barColor?: string;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: ProgressBar
 * ProgressBar
 */
const SingleViewTable: React.FC<IPageProps> = (props) => {
    return (
        <div className="progress-bar-track">
            <div
                className={`progress-bar ${props.barColor}`}
                style={{ width: `${props.percent}%` }}
            ></div>
        </div>
    );
};
export default SingleViewTable;
