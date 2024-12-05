// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import AdminTab from "~/muiPublish/components/AdminTab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";
// import TableSample from "~/publish/components/TableSample";
// import Cardlist from "~/publish/components/Cardlist";

// need style
import "~/publish/layout/layout.scss";

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

    return (
        <>
            <div className="tabs-area">
                <AdminTab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <SubTitle pageName={props.pageName} />
                <SearchContent />
                <div className="tabs-scroll-area">
                    <br />
                    {/* <SearchContent />
                    <TableSample pageName={props.pageName} accordion={true} />
                    <div className="card-table">
                        <Cardlist />
                        <TableSample pageName={props.pageName} />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default SampleTablePage;
