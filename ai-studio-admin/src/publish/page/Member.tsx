// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import AdminTab from "~/publish/components/AdminTab";
import SubTitle from "~/publish/components/SubTitle";
import SearchContent from "~/publish/components/SearchContent";
import TableSample from "~/publish/components/TableSample";

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
 * admin-front: 회원관리
 * Member
 */
const Member: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //어드민 탭
    const adminMenu = ["회원관리", "메뉴2", "메뉴3", "메뉴4"];

    return (
        <>
            <div className="tabs-area">
                <AdminTab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <SubTitle pageName={props.pageName} />
                <div className="tabs-scroll-area">
                    <SearchContent />
                    <TableSample pageName={props.pageName} accordion={true} />
                </div>
            </div>
        </>
    );
};

export default Member;
