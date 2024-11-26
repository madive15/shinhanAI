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
const SubTitle: React.FC<IPageProps> = (props) => {
    return (
        <div className="sub-title">
            <div className="tit-gnb-box">
                <span className="tit">{props.pageName}</span>
                <div className="nav">
                    <Home className="home" />
                    <span className="deps">
                        {props.pageName} / {props.pageName}
                    </span>
                    <span className="deps">
                        <strong>{props.pageName}</strong>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SubTitle;
