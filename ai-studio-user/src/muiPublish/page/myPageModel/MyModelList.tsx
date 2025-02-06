// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import MyModelListTable from "~/muiPublish/page/myPageModel/MyModelListTable";
import MyModelIndiviCompany from "~/muiPublish/page/myPageModel/MyModelIndiviCompany";
import MyModelSearch from "~/muiPublish/page/myPageModel/MyModelSearch";

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
 * user-front: MyModelList
 * MyModelList page
 * 마이페이지 모델 생성 내역
 */
const MyModelList: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "모델 생성 내역"];

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
                        <MyModelIndiviCompany />
                        <MyModelSearch />
                        <MyModelListTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyModelList;
