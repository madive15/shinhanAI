// necessary set
import React from "react";

// need style
import "~/publish/loading/loading.scss";
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
            <div className="donut"></div>
        </div>
    );
};

export default Loading;
