// necessary set
import React from "react";

// need content
import { ReactComponent as Home } from "~assets/images/svg/Icons-home.svg";

// need style
import "./subtitle.scss";

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
 * admin-front: SubTitle
 * SubTitle page
 */
const SubTitle: React.FC<IPageProps> = () => {
    return (
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
    );
};

export default SubTitle;
