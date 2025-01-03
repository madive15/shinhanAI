// necessary set
import React from "react";

// need content
import { ReactComponent as Home } from "~assets/images/svg/icon_navi_home.svg";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
// need style
import "~/muiPublish/components/subTitleNavTabs/subTitleNavTabs.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    subTabs?: boolean;
    search?: boolean;
    btn?: string;
    btnTwo?: string;
    btnThree?: string;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: SubTitleNavTabs
 * SubTitleNavTabs page
 * 컨텐츠 네비게이션, 서브타이틀 ,서브 탭
 *
 */
const SubTitleNavTabs: React.FC<IPageProps> = (props) => {
    return (
        <>
            <div className="tit-gnb-box">
                <div className="nav">
                    <Home className="home" />
                    <span className="deps">{props.pageName}</span>
                    <span className="deps">{props.pageName}</span>
                </div>
            </div>
            <div className="sub-title-tab-box">
                <div className="tit-tabs-box">
                    <div className="sub-tit">{props.pageName}</div>
                    {props.subTabs && (
                        <div className="sub-tabs">
                            <span className="active">프리빌트</span>
                            <span>직접추출</span>
                        </div>
                    )}
                </div>
                {props.search && (
                    <div className="sub-searth">
                        <TextField
                            hiddenLabel
                            variant="outlined"
                            placeholder="검색어를 입력해주세요"
                        />
                        <IconButton
                            type="button"
                            aria-label="search"
                            className="icon-search"
                        >
                            <Search />
                        </IconButton>
                    </div>
                )}

                {(props.btn || props.btnTwo) && (
                    <div className="btn-wrap">
                        {props.btnThree && (
                            <Button variant="sub1">{props.btnThree}</Button>
                        )}
                        {props.btnTwo && (
                            <Button variant="sub1">{props.btnTwo}</Button>
                        )}
                        {props.btn && (
                            <Button variant="primary">{props.btn}</Button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default SubTitleNavTabs;
