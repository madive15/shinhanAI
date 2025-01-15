// necessary set
import React from "react";

// need style
import "./loading.scss";
/**
 *
 * @author shinhanAI
 * @description
 * admin-front: Loading
 * Loading
 *
 */
const Loading: React.FC = () => {
    return (
        <div className="loading-layer">
            <div className="loading-area">
                <div className="donut"></div>
                <p className="loading-txt">잠시만 기다려주세요.</p>
            </div>
        </div>
    );
};

export default Loading;
