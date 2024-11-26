// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import Top from "~/publish/layout/Top";
import MenuContainer from "~/publish/layout/MenuContainer";
import Auth from "~/publish/page/Auth";
import Manager from "~/publish/page/Manager";

import AdminTab from "~/publish/components/AdminTab";
import Sample from "~/publish/page/Sample";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";
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

    //어드민 탭
    const adminMenu = ["권한관리", "메뉴2", "메뉴3", "메뉴4"];

    //셀렉트
    const options = [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
        { value: "option4", label: "옵션 4" },
        { value: "option5", label: "옵션 5" },
        { value: "option6", label: "옵션 6" },
        { value: "option7", label: "옵션 7" },
        { value: "option8", label: "옵션 8" },
    ];

    //인풋
    const [text, setText] = useState("");

    return (
        <div className="flexible-side-layout">
            {loading && <Loading />}
            <Top pageName={""} subName={""} />
            <div className="container">
                <MenuContainer pageName={""} subName={""} />
                <div className="content">
                    {props.pageName === "권한관리" && <Auth />}
                    {props.pageName === "매니저관리" && <Manager />}

                    {/* Tab contents Page */}
                    {/* <Sample />
                        <ButtonWrap viewType="end">
                            <Button value="초기화" viewType="sub1" />
                            <Button value="조회" viewType="primary" />
                        </ButtonWrap>

                        <div>권한목록</div>
                        <TableSample /> */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
