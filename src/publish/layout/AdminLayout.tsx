// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import Top from "~/publish/layout/Top";
import MenuContainer from "~/publish/layout/MenuContainer";
import AdminTab from "~/publish/components/AdminTab";

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
 * admin-front: AdminLayout
 * AdminLayout
 */
const AdminLayout: React.FC<IPageProps> = () => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //어드민 탭
    const adminMenu = ["권한관리", "메뉴2", "메뉴3", "메뉴4"];

    return (
        <div className="flexible-side-layout">
            {loading && <Loading />}
            <Top pageName={""} subName={""} />
            <div className="container">
                <MenuContainer pageName={""} subName={""} />
                <div className="content">
                    <div className="tabs-area">
                        <AdminTab menuName={adminMenu} />
                    </div>
                    <div className="tabs-contents">
                        <div className="sub-title">
                            <div className="tit-gnb-box">
                                <span className="tit">서브 타이틀</span>
                                <div>
                                    <span></span>
                                    <span>권한/회원관리</span>
                                    <span>권한관리</span>
                                </div>
                            </div>
                        </div>
                        <div>2 </div>
                        <div>3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
