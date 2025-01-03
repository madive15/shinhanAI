// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import TaskDetailTable from "~/muiPublish/page/task/TaskDetailTable";
import TaskDetailContent from "~/muiPublish/page/task/TaskDetailContent";
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
 * user-front: TaskDetail
 * TaskDetail page
 * 과제신청상세
 */
const TaskDetail: React.FC<IPageProps> = (props) => {
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
                        btnTwo="삭제"
                        btnThree="목록으로 돌아가기"
                        btn="수정"
                    />
                    <div className="scroll-content-area task">
                        <div className="step-box">
                            <h3>과제 신청 현황</h3>
                            <ol>
                                <li className="active">
                                    <div className="circle"></div>
                                    <span>과제 신청</span>
                                </li>
                                <li className="pass">
                                    <div className="circle"></div>
                                    <span>검토중</span>
                                </li>
                                <li className="error">
                                    <div className="circle"></div>
                                    <span>미채택</span>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <span>진행중</span>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <span>과제 종료</span>
                                </li>
                            </ol>
                        </div>
                        <TaskDetailTable />
                        <TaskDetailContent />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskDetail;
