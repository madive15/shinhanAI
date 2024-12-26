// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import IndiviCompany from "~/muiPublish/components/indiviCompany/IndiviCompany";
import Category from "~/muiPublish/components/category/Category";
import SmartFilter from "~/muiPublish/components/smartFilter/SmartFilter";
import Sortbox from "~/muiPublish/components/sortbox/Sortbox";
import TargetThumbnail from "~/muiPublish/page/targetExtraction/TargetThumbnail";
import TargetTable from "~/muiPublish/page/targetExtraction/TargetTable";
import ModelIndexFilter from "~/muiPublish/components/modelIndexFilter/ModelIndexFilter";
import TargetSumBtn from "~/muiPublish/components/targetSumBtn/TargetSumBtn";

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
        // "메뉴3",
        // "메뉴4",
        // "메뉴2",
        // "메뉴3",
        // "메뉴4",
        // "메뉴2",
        // "메뉴3",
        // "메뉴4",
        // "메뉴2",
        // "메뉴3",
        // "메뉴4",
        // "메뉴2",
        // "메뉴3",
    ];

    const [listType, setListType] = useState<boolean>(false);

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents">
                <div className="list-content">
                    <SubTitleNavTabs pageName={props.pageName} subTabs={true} />
                    <div className="sub-tab-content">
                        <IndiviCompany />
                        <Category />
                        <SmartFilter />
                        <Sortbox listType={listType} setListType={setListType} />
                        {listType === false ? <TargetThumbnail /> : <TargetTable />}
                    </div>
                </div>
                <div className="list-setting">
                    <div className="btn-wrap end">
                        <Button variant="iconLine" endIcon={<Search fill="#333" />}>
                            원래 설정으로 되돌리기
                        </Button>
                        <Button variant="iconLine" endIcon={<Search fill="#333" />}>
                            초기화
                        </Button>
                    </div>
                    <div className="list-select-area">
                        <ModelIndexFilter pageName={props.pageName} />
                    </div>

                    <TargetSumBtn pageName={props.pageName} />
                </div>
            </div>
        </>
    );
};

export default TargetExtraction;
