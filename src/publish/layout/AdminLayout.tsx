// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import Top from "~/publish/layout/Top";
import MenuContainer from "~/publish/layout/MenuContainer";
import AdminTab from "~/publish/components/AdminTab";
import { ReactComponent as Home } from "~assets/images/svg/Icons-home.svg";

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
                                <div className="nav">
                                    <Home className="home" />
                                    <span className="deps">권한/회원관리</span>
                                    <span className="deps">
                                        <strong>권한관리</strong>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <span>조회항목</span>
                                <div>
                                    <select></select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="">
                                <span>권한구분</span>
                                <div>
                                    <select></select>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div>권한목록</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
