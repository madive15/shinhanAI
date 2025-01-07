// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import MyTaskDetailTable from "~/muiPublish/page/myPageTask/MyTaskDetailTable";
import MyTaskDetailContent from "~/muiPublish/page/myPageTask/MyTaskDetailContent";
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
 * user-front: MyTaskDetail
 * MyTaskDetail page
 * 마이페이지 과제신청 상세
 */
const MyTaskDetail: React.FC<IPageProps> = (props) => {
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
                        <MyTaskDetailTable />
                        <MyTaskDetailContent />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTaskDetail;
