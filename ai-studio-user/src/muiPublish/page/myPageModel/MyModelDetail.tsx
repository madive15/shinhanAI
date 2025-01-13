// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import MyModelDetailTable from "~/muiPublish/page/myPageModel/MyModelDetailTable";
import MyModelDetailInfoTable from "~/muiPublish/page/myPageModel/MyModelDetailInfoTable";
import MyModelDetailInfoTable2 from "~/muiPublish/page/myPageModel/MyModelDetailInfoTable2";

import MyModelDetailEDATable from "~/muiPublish/page/myPageModel/MyModelDetailEDATable";
import MyModelPerformance from "~/muiPublish/page/myPageModel/MyModelPerformance";

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
 * user-front: MyModelDetail
 * MyModelDetail page
 */
const MyModelDetail: React.FC<IPageProps> = (props) => {
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
                        <MyModelDetailInfoTable />
                        <MyModelDetailInfoTable2 />
                        <MyModelDetailTable />
                        <MyModelDetailEDATable />
                        <MyModelPerformance />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyModelDetail;
