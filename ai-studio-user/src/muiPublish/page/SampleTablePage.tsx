// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";

import SearchContent from "~/muiPublish/components/SearchContent";
// import TableSample from "~/publish/components/TableSample";
// import Cardlist from "~/publish/components/Cardlist";

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
 * admin-front: Sample table
 * Sample table page
 */
const SampleTablePage: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //table 탭
    const adminMenu = ["table 관리", "메뉴2", "메뉴3", "메뉴4"];

    // subtitle search height
    const [heiTitSearch, setHeiTitSearch] = useState<number>(190);
    const subTitSearch = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (subTitSearch.current) {
            const offsetHeight = subTitSearch.current.offsetHeight;
            const offsetWidth = subTitSearch.current.offsetWidth;
            console.log("Height:", offsetHeight + 190, "Width:", offsetWidth);
            setHeiTitSearch(offsetHeight + 190);
        }
    }, [subTitSearch?.current?.offsetHeight, heiTitSearch]);

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <div className="sub-tit-search" ref={subTitSearch}>
                    <SearchContent pageName={props.pageName} />
                </div>
                <div
                    className="tabs-scroll-area"
                    style={
                        {
                            "--heiTitSearch": heiTitSearch + "px",
                        } as React.CSSProperties
                    }
                >
                    {props.pageName}
                </div>
            </div>
        </>
    );
};

export default SampleTablePage;
