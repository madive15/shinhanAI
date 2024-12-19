// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitle from "~/muiPublish/components/SubTitle";
import { ReactComponent as Home } from "~assets/images/svg/Icons-home.svg";

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
 * user-front: TargetExtraction
 * TargetExtraction page
 */
const TargetExtraction: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //table 탭
    const adminMenu = [
        "HOME",
        "타겟추출 관리",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
    ];

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <div className="list-content">
                    <div className="tit-gnb-box">
                        <div className="nav">
                            <Home className="home" />
                            <span className="deps">{props.pageName}</span>
                            <span className="deps">
                                <strong>{props.pageName}</strong>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>타겟 추출</div>
                        <div>
                            <span>프리빌트</span>
                            <span>직접추출</span>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="list-setting">
                    <div className="no-data">
                        <strong>AI가 미리 생성해놓은 조건</strong>을 선택해서
                        <br /> 타겟을 추출하세요.
                    </div>
                </div>
            </div>
        </>
    );
};

export default TargetExtraction;
