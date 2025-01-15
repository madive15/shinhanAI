// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
import IconButton from "@mui/material/IconButton";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// need content

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
 * user-front: PrebulitMetaTarget
 * PrebulitMetaTarget
 */
const PrebulitMetaTarget: React.FC<IPageProps> = (props) => {
    return (
        <div className="target-add-area">
            <div className="target-add-box">
                <IconButton className="ico-rect23">
                    <Plus9 />
                </IconButton>
                <p>모델 추가</p>
            </div>
            <div className="target-add-box">
                <IconButton className="ico-rect23">
                    <Plus9 />
                </IconButton>
                <p>지수 추가</p>
            </div>
            <div className="target-add-box">
                <IconButton className="ico-rect23">
                    <Plus9 />
                </IconButton>
                <p>고객 필터 조건 추가</p>
            </div>
        </div>
    );
};

export default PrebulitMetaTarget;
