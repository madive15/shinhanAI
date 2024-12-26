// necessary set
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";

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
 * user-front: TargetSumBtn
 * TargetSumBtn page
 * 추츨 타켓 수, 버튼
 */
const TargetSumBtn: React.FC<IPageProps> = (props) => {
    const [alertStauts, setAlertStauts] = React.useState(false);
    const alertOpen = () => {
        setAlertStauts(true);
    };
    const alertClose = () => {
        setAlertStauts(false);
    };

    return (
        <div className="target-sum-btn">
            <div className="sun-txt">
                최종 타겟 수<strong>총 471</strong>
            </div>

            {/* <div className="error-group">
                <div className="error-box">LMS 대량 발송이 불가합니다. (최대 2,000건)</div>
                <div className="error-box">영업점 자체마케팅이 불가합니다. (최대 6,000건)</div>
                <div className="error-box">엑셀 다운로드가 불가합니다. (최대 1,000,000건)</div>
            </div> */}

            {/* <div className="input-group">
                <label className="input-has-label" htmlFor="txt1_1">
                    <span>타겟 명</span>
                    <TextField className="input-field " id="txt1_1" placeholder="타겟 명을 입력해주세요." />
                </label>
                <label className="input-has-label" htmlFor="txt1_1">
                    <span>설명</span>
                    <TextField className="input-field " id="txt1_1" placeholder="설명을 입력해주세요." />
                </label>
            </div> */}

            <div className="btn-wrap end">
                <Button variant="sub1" fullWidth>
                    취소
                </Button>
                <Button variant="primary" fullWidth onClick={alertOpen}>
                    추출
                </Button>
            </div>

            <Dialog className="confirm-box" open={alertStauts} onClose={alertClose}>
                <DialogTitle>{"알림"}</DialogTitle>
                <DialogContent>
                    <div className="txt-box">
                        <strong>타겟 추출 신청이 되었습니다.</strong>
                        <br /> 신청하신 내역은 마이페이지에서 확인하실 수 있습니다. (타겟 추출 완료 시 SwingChat으로
                        쪽지가 전송됩니다.)
                    </div>
                    <div className="txt-box">다른 항목 선택 시 현재 항목이 대체됩니다.</div>
                    <div className="txt-box">조건은 최대 10개까지 설정하실 수 있습니다.</div>
                    <div className="txt-box">타겟의 이름을 입력해주세요.</div>
                    <div className="txt-box">
                        <strong>프리빌트된 항목은 수정이 불가합니다.</strong>
                        <br /> 현재 설정된 내용으로 직접추출로 이동하시겠습니까?
                    </div>
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
        </div>
    );
};

export default TargetSumBtn;
