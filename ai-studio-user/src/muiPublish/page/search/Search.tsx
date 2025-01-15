// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import Category from "~/muiPublish/components/category/Category";
import SearchSlider from "~/muiPublish/page/search/SearchSlider";
import SearchCategory from "~/muiPublish/page/search/SearchCategory";

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
 * user-front: Search
 * Search page
 */
const Search: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "검색 결과"];

    return (
        <>
            {/* <Loding /> */}
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents">
                <div className="single-content">
                    <SubTitleNavTabs pageName={props.pageName} />
                    <div className="scroll-content-area">
                        <SearchSlider />
                        <SearchCategory />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
