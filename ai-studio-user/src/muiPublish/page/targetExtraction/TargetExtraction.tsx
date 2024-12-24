// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import IndiviCompany from "~/muiPublish/components/indiviCompany/IndiviCompany";
import Category from "~/muiPublish/components/category/Category";
import NoData from "~/muiPublish/components/noData/noData";
import SmartFilter from "~/muiPublish/components/smartFilter/SmartFilter";
import Sortbox from "~/muiPublish/components/sortbox/Sortbox";
import TargetThumbnail from "~/muiPublish/page/targetExtraction/TargetThumbnail";
import TargetTable from "~/muiPublish/page/targetExtraction/TargetTable";

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
 * user-front: TargetExtraction
 * TargetExtraction page
 * 타겟추출 - 프리빌트, 직접추출
 */
const TargetExtraction: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = [
        "HOME",
        "타겟추출 관리",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
    ];

    const [listType, setListType] = useState<boolean>(false);

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents">
                <div className="list-content">
                    <SubTitleNavTabs pageName={props.pageName} />
                    <div className="sub-tab-content">
                        <IndiviCompany />
                        <Category />
                        <SmartFilter />
                        <Sortbox listType={listType} setListType={setListType} />
                        {listType === false ? <TargetThumbnail /> : <TargetTable />}
                    </div>
                </div>
                <div className="list-setting">
                    <div>
                        
                    </div>
                    {/* <NoData pageName={props.pageName} /> */}</div>
            </div>
        </>
    );
};

export default TargetExtraction;
