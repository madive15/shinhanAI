// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import NoticeDetailContent from "~/muiPublish/page/notice/NoticeDetailContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

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
 * user-front: NoticeDetail
 * NoticeDetail page
 * 공지사항 상세
 */
const NoticeDetail: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //tabMenu 탭
    const tabMenu = ["HOME", "공지 사항"];
    const [alertStauts, setAlertStauts] = React.useState(false);
    const alertOpen = () => {
        setAlertStauts(true);
    };
    const alertClose = () => {
        setAlertStauts(false);
    };
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
                    />
                    <div className="scroll-content-area notice">
                        <NoticeDetailContent />
                    </div>
                </div>
            </div>
            <Dialog
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
            </Dialog>
        </>
    );
};

export default NoticeDetail;
