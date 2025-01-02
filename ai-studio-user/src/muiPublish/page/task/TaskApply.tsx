// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import IndiviCompany from "~/muiPublish/components/indiviCompany/IndiviCompany";
import Category from "~/muiPublish/components/category/Category";
import NoData from "~/muiPublish/components/noData/noData";
import Badge from "~/muiPublish/components/Badge";
import TaskApplyTable from "~/muiPublish/page/task/TaskApplyTable";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    subTabs?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: TaskApply
 * TaskApply page
 * 과제신청목록
 */
const TaskApply: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "과제 신청"];

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents">
                <div className="single-content">
                    <SubTitleNavTabs
                        subTabs={false}
                        pageName={props.pageName}
                        search={false}
                        btn="과제 등록"
                        btnTwo="등록 취소"
                    />
                    <div className="scroll-content-area task">
                        <TaskApplyTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskApply;
