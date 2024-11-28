// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import Top from "~/publish/layout/Top";
import MenuContainer from "~/publish/layout/MenuContainer";
import Auth from "~/publish/page/Auth";
import Manager from "~/publish/page/Manager";
import SampleTablePage from "~/publish/page/SampleTablePage";
import PermissionGroup from "~/publish/page/PermissionGroup";

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
const Layout: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="flexible-side-layout">
            {loading && <Loading />}
            <Top pageName={""} subName={""} />
            <div className="container">
                <MenuContainer pageName={""} subName={""} />
                <div className="content">
                    {/* Tab contents Page */}
                    {props.pageName === "샘플테이블" && <SampleTablePage pageName={props.pageName} />}
                    {props.pageName === "권한관리" && <Auth pageName={props.pageName} />}
                    {props.pageName === "관리자메뉴 권한관리" && <Manager pageName={props.pageName} />}
                    {props.pageName === "권한그룹관리" && <PermissionGroup pageName={props.pageName} />}
                </div>
            </div>
        </div>
    );
};

export default Layout;
