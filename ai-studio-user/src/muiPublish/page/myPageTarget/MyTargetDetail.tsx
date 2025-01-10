// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import MyTargetDetailTable from "~/muiPublish/page/myPageTarget/MyTargetDetailTable";
import MyTargetDetailInfoTable from "~/muiPublish/page/myPageTarget/MyTargetDetailInfoTable";

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
 * user-front: MyTargetDetail
 * MyTargetDetail page
 */
const MyTargetDetail: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "타겟 추출 상세 내역"];

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
                        btnTwo="목록으로 돌아가기"
                    />
                    <div className="scroll-content-area">
                        <MyTargetDetailInfoTable />
                        <MyTargetDetailTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTargetDetail;
