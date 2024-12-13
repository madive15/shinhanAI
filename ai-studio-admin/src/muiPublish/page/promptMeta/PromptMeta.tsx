// necessary set
import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";

// need content
import Loading from "~/muiPublish/loading/Loading";
import AdminTab from "~/muiPublish/components/AdminTab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";
import ProductMetaTable from "~/muiPublish/page/promptMeta/PromptMetaTable";
import ProductMetaFormTable from "~/muiPublish/page/promptMeta/PromptMetaFormTable";
import ProductMetaPopup from "~/muiPublish/page/promptMeta/PromptMetaPopup";
import ProductMetaAlertPopup from "~/muiPublish/page/promptMeta/PromptMetaAlertPopup";

// import Cardlist from "~/publish/components/Cardlist";

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
 * admin-front: PromptMeta
 * 프롬프트메타 page
 */
const PromptMeta: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //table 탭
    const adminMenu = [props.pageName, "메뉴2", "메뉴3", "메뉴4"];

    // subtitle search height, btn content height
    const [leftHeight, setLeftHeight] = useState<number>(0);
    const [rightHeight, setRightHeight] = useState<number>(0);
    const subTitSearch = useRef<HTMLDivElement | null>(null);
    const subTitleLeft = useRef<HTMLDivElement | null>(null);
    const subTitleRight = useRef<HTMLDivElement | null>(null);
    const subBtnCheck = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (subTitSearch.current) {
            // 조회 영역
            const subTitSearchHeight = subTitSearch.current.offsetHeight;

            // left subtitle check
            if (subTitleLeft.current) {
                const titleLeftHeight = subTitleLeft.current.offsetHeight;
                setLeftHeight(subTitSearchHeight + titleLeftHeight + 206);
            } else {
                setLeftHeight(subTitSearchHeight + 190);
            }

            // right subtitle check
            if (subTitleRight.current) {
                const titleRightHeight = subTitleRight.current.offsetHeight;
                // right btn check
                if (subBtnCheck?.current) {
                    const subBtnHeight = subBtnCheck.current.offsetHeight;
                    setRightHeight(subTitSearchHeight + titleRightHeight + subBtnHeight + 214);
                } else {
                    setRightHeight(subTitSearchHeight + titleRightHeight + 206);
                }
            } else {
                // right btn check
                if (subBtnCheck?.current) {
                    const subBtnHeight = subBtnCheck.current.offsetHeight;
                    setRightHeight(subTitSearchHeight + subBtnHeight + 214);
                } else {
                    setRightHeight(subTitSearchHeight + 190);
                }
            }
        }
    }, [
        subTitSearch?.current?.offsetHeight,
        subTitleLeft?.current?.offsetHeight,
        subTitleRight?.current?.offsetHeight,
        subBtnCheck?.current?.offsetHeight,
        rightHeight,
        leftHeight,
    ]);

    // 신규 프롬프트 메타 추가
    const [popupStauts, setpopupStauts] = useState(false);
    const popupOpen = () => {
        setpopupStauts(true);
    };

    //완료 얼럿
    const [alertStauts, setAlertStauts] = useState(false);
    const alertOpen = () => {
        setAlertStauts(true);
    };

    return (
        <>
            <div className="tabs-area">
                <AdminTab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <div className="sub-tit-search" ref={subTitSearch}>
                    <SubTitle pageName={props.pageName} />
                    <SearchContent pageName={props.pageName} />
                </div>
                <div className="tabs-scroll-area no-scroll">
                    <div className="left">
                        <div className="table-title" ref={subTitleLeft}>
                            <div className="tit-sum">
                                <h2>{props.pageName}</h2>
                                <span className="sum">총 00건</span>
                            </div>
                        </div>
                        <ProductMetaTable pageName={props.pageName} heiTitSearch={leftHeight} />
                    </div>
                    <div className="right">
                        <div className="table-title" ref={subTitleRight}>
                            <div className="tit-desc">
                                <h2>상품 메타상세</h2>
                                <span className="desc">
                                    <i className="ico-text blue">i</i>상품분류, 상위분류, 상품ID를 수정 후 저장하면 신규
                                    상품메타로 등록됩니다.
                                </span>
                            </div>
                            <Button variant="secondary" onClick={popupOpen}>
                                신규 상품메타 추가
                            </Button>
                        </div>

                        <ProductMetaFormTable pageName={props.pageName} heiTitSearch={rightHeight} />
                        <div ref={subBtnCheck} className="btn-root-wrap end" aria-label="Basic button group">
                            <Button variant="sub1">변경 취소</Button>
                            <Button variant="primary" onClick={alertOpen}>
                                변경 사항 저장
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 신규 상품메타 추가 */}
            {popupStauts === true && <ProductMetaPopup popupStauts={popupStauts} setpopupStauts={setpopupStauts} />}

            {/* 저장 완료 alert */}
            {alertStauts === true && (
                <ProductMetaAlertPopup alertStauts={alertStauts} setAlertStauts={setAlertStauts} />
            )}
        </>
    );
};

export default PromptMeta;
