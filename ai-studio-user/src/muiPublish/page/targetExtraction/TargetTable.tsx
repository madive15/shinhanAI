// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import TargetTableRecom from "~/muiPublish/page/targetExtraction/TargetTableRecom";
import TargetTablePopul from "~/muiPublish/page/targetExtraction/TargetTablePopul";
import Button from "@mui/material/Button";
// need style

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: TargetTable
 * TargetTable page
 * 타겟추출 - TargetTable 리스트
 */
const TargetTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <div className="table-tit">추천 리스트</div>
            <TargetTableRecom />
            <div className="between-box">
                <div className="left">
                    <div className="table-tit">인기 리스트</div>
                </div>
                <div className="right">
                    <Button variant="small">더보기</Button>
                </div>
            </div>
            <TargetTablePopul />
        </>
    );
};

export default TargetTable;
