// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import Category from "~/muiPublish/components/category/Category";
import SearchSlider from "~/muiPublish/page/search/SearchSlider";
import SearchTable from "~/muiPublish/page/search/SearchTable";
import SearchResult from "~/muiPublish/page/search/SearchResult";
import SearchResult2 from "~/muiPublish/page/search/SearchResult2";
import SearchTable2 from "~/muiPublish/page/search/SearchTable2";

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
    const [activeTab, setActiveTab] = useState(0);
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
                        <div className="contents-tab type2">
                            <button
                                type="button"
                                className={activeTab === 0 ? "active" : ""}
                                onClick={() => setActiveTab(0)}
                            >
                                프리빌트 (+999)
                            </button>
                            <button
                                type="button"
                                className={activeTab === 1 ? "active" : ""}
                                onClick={() => setActiveTab(1)}
                            >
                                모델 (0)
                            </button>
                            <button
                                type="button"
                                className={activeTab === 2 ? "active" : ""}
                                onClick={() => setActiveTab(2)}
                            >
                                고객 성향 지수 (50)
                            </button>
                            <button
                                type="button"
                                className={activeTab === 3 ? "active" : ""}
                                onClick={() => setActiveTab(3)}
                            >
                                고객필턴조건 (100 )
                            </button>
                        </div>
                        <h2>선택된 탭이름</h2>
                        {activeTab === 0 && <SearchResult />}
                        {activeTab === 1 && <SearchResult2 />}
                        {activeTab === 2 && <SearchResult />}
                        {activeTab === 3 && <SearchResult />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
