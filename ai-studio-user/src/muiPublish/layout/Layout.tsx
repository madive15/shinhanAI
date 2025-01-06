// necessary set
import React, { useState, useEffect } from "react";
import { Stack, styled, Container } from "@mui/material";
// import theme from "~/muiPublish/theme/theme";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Top from "~/muiPublish/layout/Top";
import MenuContainer from "~/muiPublish/layout/MenuContainer";
import TargetExtraction from "~/muiPublish/page/targetExtraction/TargetExtraction";
import Main from "~/muiPublish/page/main/Main";
import SingleView from "~/muiPublish/page/singleView/SingleView";
import Ocr from "~/muiPublish/page/ocr/Ocr";
import OcrVerify from "~/muiPublish/page/ocr/OcrVerify";
import TaskList from "~/muiPublish/page/task/TaskList";
import TaskApply from "~/muiPublish/page/task/TaskApply";
import TaskDetail from "~/muiPublish/page/task/TaskDetail";
import NoticeList from "~/muiPublish/page/notice/NoticeList";
import NoticeDetail from "~/muiPublish/page/notice/NoticeDetail";

// need style
import "~/muiPublish/layout/layout.scss";
import LayoutStyle from "~/muiPublish/theme/LayoutStyle";

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
 * user-front: user Layout
 * user Layout
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

    // side menu open close
    const [openClose, setOpenClose] = useState<boolean>(false);

    return (
        <LayoutStyle className="flexible-side-layout">
            {loading && <Loading />}
            <MenuContainer
                pageName={""}
                subName={""}
                openClose={openClose}
                setOpenClose={setOpenClose}
            />
            <div className="container">
                <Top pageName={""} subName={""} openClose={openClose} />
                <div
                    className={
                        openClose === true ? "content opne-menu" : "content"
                    }
                >
                    {props.pageName === "타겟추출" && (
                        <TargetExtraction pageName={props.pageName} />
                    )}
                    {props.pageName === "MAIN" && (
                        <Main pageName={props.pageName} />
                    )}
                    {props.pageName === "싱글뷰" && (
                        <SingleView pageName={props.pageName} />
                    )}
                    {props.pageName === "AI-OCR" && (
                        <Ocr pageName={props.pageName} />
                    )}
                    {props.pageName === "AI-OCR 검증" && (
                        <OcrVerify pageName={props.pageName} />
                    )}
                    {props.pageName === "과제신청목록" && (
                        <TaskList pageName={props.pageName} />
                    )}
                    {props.pageName === "과제 신청" && (
                        <TaskApply pageName={props.pageName} />
                    )}
                    {props.pageName === "과제 신청 상세" && (
                        <TaskDetail pageName={props.pageName} />
                    )}
                    {props.pageName === "공지사항목록" && (
                        <NoticeList pageName={props.pageName} />
                    )}
                    {props.pageName === "공지 사항 상세" && (
                        <NoticeDetail pageName={props.pageName} />
                    )}
                    {/* Tab contents Page */}
                    {/* {props.pageName === "기본레이아웃" && <SampleTablePage pageName={props.pageName} />}
                    {props.pageName === "샘플폼" && <SampleForm pageName={props.pageName} />}
                    {props.pageName === "상품메타관리" && <ProductMeta pageName={props.pageName} />} */}
                </div>
            </div>
        </LayoutStyle>
    );
};

export default Layout;
