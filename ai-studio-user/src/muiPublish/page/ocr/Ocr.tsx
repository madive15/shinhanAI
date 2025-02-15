// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import OcrBox from "~/muiPublish/page/ocr/OcrBox";
import OcrSearch from "~/muiPublish/page/ocr/OcrSearch";
import OcrSearchTable from "~/muiPublish/page/ocr/OcrSearchTable";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    subTabs?: boolean;
    search?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: Ocr
 * Ocr page
 * Ocr
 */
const Ocr: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "AI-OCR 검증"];

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents ocr">
                <div className="single-content">
                    <SubTitleNavTabs
                        subTabs={false}
                        search={false}
                        pageName={props.pageName}
                    />
                    <div className="scroll-content-area">
                        <OcrBox />
                        <OcrSearch />
                        <OcrSearchTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ocr;
