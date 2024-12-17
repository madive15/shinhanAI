// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";

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
const SampleForm: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //table 탭
    const adminMenu = ["상품 메타관리", "메뉴2", "메뉴3", "메뉴4"];

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <SubTitle pageName={props.pageName} />
                <div className="tabs-scroll-area">
                    <SearchContent pageName={props.pageName} />
                </div>
            </div>
        </>
    );
};

export default SampleForm;
