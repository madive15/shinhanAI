// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arr7 } from "~assets/images/svg/Icons-arr7.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
// need content
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
// need style

// Props type
export interface IPageProps {
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: OcrVerifyResult
 * OcrVerifyResult
 * ocr
 */
const OcrVerifyResult: React.FC<IPageProps> = (props) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const [confirmStauts, setConfirmStauts] = React.useState(false);
    const confirmOpen = () => {
        setConfirmStauts(true);
    };
    const confirmClose = () => {
        setConfirmStauts(false);
    };

    return (
        <div className="ocr-verify-result">
            <div className="between-box">
                <h3>AI-OCR 검증 결과</h3>
                <div className="btn-wrap">
                    <Button variant="small">전체 초기화</Button>
                    <Button variant="small">엑셀 다운</Button>
                </div>
            </div>
            <div className="error-box gray">
                ROI영역 수정은 수정버튼을 클릭 후 가능 합니다.
            </div>
            <div className="error-box">
                검증 완료된 이후에는 항목을 재수정할 수 없습니다.
            </div>
            <div className="ocr-accordion">
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        expandIcon={<Arr7 />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography component="span">Group-1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="between-box">
                            <div className="left"></div>
                            <div className="right">
                                <Button variant="small"> 초기화</Button>
                            </div>
                        </div>
                        <TableContainer className="table-content">
                            <Table className="table-defult-style">
                                <TableHead>
                                    <TableRow>
                                        <TableCell width={48} align="center">
                                            선택
                                        </TableCell>
                                        <TableCell width={185} align="center">
                                            항목명 (Key)
                                        </TableCell>
                                        <TableCell width={185} align="left">
                                            검증 전
                                        </TableCell>
                                        <TableCell width={185} align="center">
                                            수정 값
                                        </TableCell>
                                        <TableCell width={96} align="center">
                                            정확도
                                        </TableCell>
                                        <TableCell width={137} align="center">
                                            검증 화면
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className="positve">
                                        <TableCell width={48} align="center">
                                            <Checkbox
                                                icon={<ChkDefault />}
                                                checkedIcon={<ChkChecked />}
                                            />
                                        </TableCell>
                                        <TableCell width={185} align="center">
                                            항목명 (Key)
                                        </TableCell>
                                        <TableCell width={185} align="left">
                                            검증 전
                                        </TableCell>
                                        <TableCell width={185} align="center">
                                            <div className="input-area">
                                                <TextField
                                                    className="input-field"
                                                    fullWidth
                                                    placeholder=""
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell width={96} align="center">
                                            정확도
                                        </TableCell>
                                        <TableCell width={137} align="center">
                                            <div className="btn-wrap center">
                                                <Button variant="small">
                                                    유지
                                                </Button>
                                                <Button variant="small">
                                                    수정
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="negative">
                                        <TableCell width={48} align="center">
                                            <Checkbox
                                                icon={<ChkDefault />}
                                                checkedIcon={<ChkChecked />}
                                            />
                                        </TableCell>
                                        <TableCell width={185} align="center">
                                            항목명 (Key)
                                        </TableCell>
                                        <TableCell width={185} align="left">
                                            검증 전
                                        </TableCell>
                                        <TableCell width={185} align="center">
                                            <div className="input-area">
                                                <TextField
                                                    className="input-field"
                                                    fullWidth
                                                    placeholder=""
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell width={96} align="center">
                                            정확도
                                        </TableCell>
                                        <TableCell width={137} align="center">
                                            <div className="btn-wrap center">
                                                <Button variant="small">
                                                    유지
                                                </Button>
                                                <Button variant="small">
                                                    수정
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    {[1, 2, 3, 4, 5].map((idx) => (
                                        <TableRow key={idx} className="pass">
                                            <TableCell
                                                width={48}
                                                align="center"
                                            >
                                                <Checkbox
                                                    icon={<ChkDefault />}
                                                    checkedIcon={<ChkChecked />}
                                                />
                                            </TableCell>
                                            <TableCell
                                                width={185}
                                                align="center"
                                            >
                                                항목명 (Key)
                                            </TableCell>
                                            <TableCell width={185} align="left">
                                                검증 전
                                            </TableCell>
                                            <TableCell
                                                width={185}
                                                align="center"
                                            >
                                                <div className="input-area">
                                                    <TextField
                                                        className="input-field"
                                                        fullWidth
                                                        placeholder=""
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell
                                                width={96}
                                                align="center"
                                            >
                                                정확도
                                            </TableCell>
                                            <TableCell
                                                width={137}
                                                align="center"
                                            >
                                                <div className="btn-wrap center">
                                                    <Button variant="small">
                                                        유지
                                                    </Button>
                                                    <Button variant="small">
                                                        수정
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                        expandIcon={<Arr7 />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography component="span">Group-2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>2</div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="btn-wrap end">
                <Button variant="primary" onClick={confirmOpen}>
                    검증 완료
                </Button>
            </div>

            {/* 알림 컨펌 */}
            <Dialog
                className="confirm-box"
                open={confirmStauts}
                onClose={confirmClose}
            >
                <DialogTitle>알림</DialogTitle>
                <DialogContent>
                    {/* <div className="txt-box">
                        <strong>
                            한 번 검증 완료를 하시면 추가 수정을 하실 수
                            없습니다.
                        </strong>
                        <br />
                        이대로 완료 하시겠어요?
                    </div>
                    <div className="txt-box">
                        <strong>수정하신 항목이 없습니다.</strong>
                        <br />
                        <strong>
                            한 번 검증 완료를 하시면 추가 수정을 하실 수
                            없습니다.
                        </strong>
                        <br />
                        이대로 완료 하시겠어요?
                    </div> */}
                    <div className="txt-box">
                        <strong>
                            정확도가 낮은 항목 중 값을 변경하지 않은 항목이
                            존재합니다.
                        </strong>
                        <br />
                        <strong>검증완료는 1회만 가능합니다.</strong>
                        <br />
                        검증 완료 하시겠어요?
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub2" onClick={confirmClose}>
                        닫기
                    </Button>
                    <Button variant="primary">확인</Button>
                </DialogActions>
                <IconButton
                    className="dialog-close ico-rect23 x"
                    onClick={confirmClose}
                >
                    <Plus9 />
                </IconButton>
            </Dialog>
        </div>
    );
};

export default OcrVerifyResult;
