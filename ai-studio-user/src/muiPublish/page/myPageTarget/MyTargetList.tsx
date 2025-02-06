// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import MyTargetListTable from "~/muiPublish/page/myPageTarget/MyTargetListTable";
import MyTargetIndiviCompany from "~/muiPublish/page/myPageTarget/MyTargetIndiviCompany";
import MyTargetSearch from "~/muiPublish/page/myPageTarget/MyTargetSearch";

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
 * user-front: MyTargetList
 * MyTargetList page
 * 마이페이지 타겟 추출 내역
 */
const MyTargetList: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [radioGroup, setRadioGroup] = React.useState("개인");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };
    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "타겟 추출 내역"];

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
                    />
                    <div className="scroll-content-area ">
                        <MyTargetIndiviCompany />
                        <MyTargetSearch />
                        <MyTargetListTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTargetList;
