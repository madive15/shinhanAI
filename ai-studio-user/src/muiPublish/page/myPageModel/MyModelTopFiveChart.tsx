// necessary set
import React, { useState, useEffect } from "react";

// need content
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    heiTitSearch?: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: MyModelTopFiveChart
 * MyModelTopFiveChart
 */
const MyModelTopFiveChart: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    return (
        <div className="top-five-chart">
            <strong>중요도 수치</strong>
            <div>그래프 영역</div>
        </div>
    );
};
export default MyModelTopFiveChart;
