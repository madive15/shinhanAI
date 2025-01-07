// necessary set
import React, { useState, useEffect, useRef } from "react";
// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import TempBoardContent from "~/muiPublish/page/tempBoard/TempBoardContent";

// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    subTabs?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: TempBoardDetail
 * TempBoardDetail page
 * 임시게시판 상세
 */
const TempBoardDetail: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "임시게시판 상세"];

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents">
                <div className="single-content">
                    <SubTitleNavTabs
                        subTabs={false}
                        pageName={props.pageName}
                        search={false}
                        btnThree="목록으로 돌아가기"
                        btnTwo="삭제"
                        btn="수정"
                        desc={`
                            IT 및 기술 분야의 최신 동향과 기술적인 특징을 제공하는 서비스입니다.
                            <br/>
                            새로운 기술과 제품, 그리고 산업 동향을 파악할 수 있으며, 다양한 분야의 전문가들의 인사이트를 얻을 수 있습니다.
                            <br/>
                            빠르게 변화하는 기술과 시장 환경에서는 최신 정보를 빠르게 수집하고 분석하는 것이 비즈니스 전략 수립 및 개인의 전문성 향상에 큰 도움을 줄 것입니다.
                            `}
                    />
                    <div className="scroll-content-area notice">
                        <TempBoardContent />
                    </div>
                </div>
            </div>
            {/* <Dialog
                className="confirm-box"
                open={alertStauts}
                onClose={alertClose}
            >
                <DialogTitle>{"알림"}</DialogTitle>
                <DialogContent>
                    <div className="txt-box">게시글을 삭제 하시겠습니까?</div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub2" onClick={alertClose}>
                        취소
                    </Button>
                    <Button variant="primary">확인</Button>
                    <Button variant="primary">마이페이지로 가기</Button>
                </DialogActions>
                <IconButton className="dialog-close" onClick={alertClose}>
                    <Icons15 fill="#222 " />
                </IconButton>
            </Dialog>
            <Dialog
                className="alert-box"
                open={alertStauts}
                onClose={alertClose}
            >
                <DialogTitle>{"알림"}</DialogTitle>
                <DialogContent>
                    <div className="txt-box">게시글이 삭제 되었습니다.</div>
                </DialogContent>
                <DialogActions>
                    <Button variant="primary">확인</Button>
                </DialogActions>
                <IconButton className="dialog-close" onClick={alertClose}>
                    <Icons15 fill="#222 " />
                </IconButton>
            </Dialog> */}
        </>
    );
};

export default TempBoardDetail;
