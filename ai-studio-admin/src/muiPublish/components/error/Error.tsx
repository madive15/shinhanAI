// necessary set
import React, { useState, useEffect } from "react";

// need content
import Button from "@mui/material/Button";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    type?: string;
    useLoading?: (data: boolean) => void;
    heiTitSearch?: number;
}

/**
 * @author shinhanAI
 * @description
 * user-front: Error
 * Error page
 */
const Error: React.FC<IPageProps> = (props) => {
    return (
        <div className={`error-wrap ${props.type}`}>
            <strong>에러 사유 입니다.</strong>
            <p className="error-txt">
                에러 상세 내용 입니다. <br />
                두줄까지 표시합니다.
            </p>
            <div className="btn-wrap center">
                <Button variant="sub1">이전 페이지</Button>
                <Button variant="primary">메인 페이지</Button>
            </div>
        </div>
    );
};

export default Error;
