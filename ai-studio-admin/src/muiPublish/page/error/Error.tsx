// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import AdminTab from "~/muiPublish/components/AdminTab";

import Error from "~/muiPublish/components/error/Error";
// need style
import "~/muiPublish/layout/layout.scss";

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
 * admin-front: PopupManage
 */
const ErrorSample: React.FC<IPageProps> = (props) => {
    //table 탭
    const adminMenu = [props.pageName, "메뉴2", "메뉴3", "메뉴4"];

    return (
        <>
            <div className="tabs-area">
                <AdminTab menuName={adminMenu} />
            </div>
            {/* <div className="tabs-contents"></div> */}
            <Error type="type1" />
        </>
    );
};

export default ErrorSample;
