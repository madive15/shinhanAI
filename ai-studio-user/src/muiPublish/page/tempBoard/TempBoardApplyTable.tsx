// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import ReactQuill from "react-quill";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// need style
import "react-quill/dist/quill.snow.css";
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    heiTitSearch?: number;
}

interface Data {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
    use: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: TempBoardApplyTable
 * TempBoardApplyTable
 */
const TempBoardApplyTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const defaultEditorContent = `
    <p><strong>1.프로젝트명</strong> : 프로젝트명을 입력해주세요.<br />
    예) SOHO 우량고객 이탈 예측</p>
    <br />
    <p><strong>2.담당자</strong> : 부서명, 직급/성함을 입력해주세요.<br />
    예) 디지털전략부 김신한 수석</p>
    <br />
    <p><strong>3.추진배경</strong> : 프로젝트 목적을 입력해주세요.<br />
    예) SOHO 우량고객 이탈 예측을 통한 사전 관리로 전행 수익성 제고 및 업무효율화</p>
    <br />
    <p><strong>4.추진요건</strong> : 과제를 수행하는데 필요한 요건들을 상세히 기술해주세요.<br />
    예) 최근 3개월 이내 SOHO 우량고객의 여신 이탈 확률을 예측<br />
    - 예측 대상 : SOHO 우량고객<br />
    - 예측 목표 : 이탈여부<br />
    - 예측 범위 : 최근 3개월 이내<br />
    - 기준<br />
    &nbsp - 분석대상 고객 : 활동성 고객<br />
    &nbsp - 이탈여부 : 여신 이탈 시 이탈로 정의<br />
    &nbsp - 우량기준 : 잔액 1억원 이상</p>
    <br />
    <p><strong>5.활용방안</strong><br />
    활용채널 : 예) 통합단말<br />
    활용주기 : 예) 매월<br />
    배포대상 : 예) 대직원, 전체고객, SOHO 고객, PWM 예상 가능 고객 등</p>
    <br />
    <p><strong>6.정성적 기대효과</strong> : 과제 수행 시 예쌍되는 기대효과를 정성적 측면에서 작성해주세요</p>
    <br />
    <p><strong>7.정량적 기대효과</strong><br />
    - 수익창출 예) 연 평균 ooo 원 절감 가능
    - 인력효율화 (시간절감) 예) 연 평균 ooo 시간 절감 가능
    </p>
        <br />
    <p><strong>8.성과평가</strong><br />
    - 이행 후 AI 서비스 성과평가, 성과측정 기준 및 지표 <br/>
    - "AI SOHO 우량고객 여신 이탈 예층모델" 활용 이전 대비 활용 후 <u>접촉고객 중 이탈률 감소</u>로 성과 평가 
    </p>
    <br />
    <p><strong>9.완료기한</strong> : 과제 완료 요청기한을 입력해주세요</p>
    <br />
    <p><strong>10.기타</strong> : 기타 필요한 사항을 입력해주세요</p>
    `;
    const [editorContent, setEditorContent] =
        useState<string>(defaultEditorContent);
    const [tooltipOpen, setTooltipOpen] = React.useState(false);

    const TooltipClose = () => {
        setTooltipOpen(false);
    };

    const TooltipOpen = () => {
        setTooltipOpen(true);
    };
    const tooptipText = (
        <div className="tooltip-wrap">
            <div className="tooltip-top">
                <h3>제목</h3>
                <IconButton className="ico-rect23 x" onClick={TooltipClose}>
                    <Plus9 />
                </IconButton>
            </div>
            <div className="tooltip-content">
                주요 AI 소개를 참고하여, 원하는 기능의 신청 과제명 및 내용을
                작성해주세요.
            </div>
            <div className="btn-wrap end">
                {/* <Button variant="sub2">자세히보기</Button> */}
                <a href="#" className="ank sub2">
                    자세히보기
                </a>
            </div>
        </div>
    );
    return (
        <div className="temp-list-table">
            <div className="row-table-tit">
                <p>게시글 등록</p>
            </div>
            <TableContainer className="row-table" component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th">
                                제목
                                <Tooltip
                                    onClose={TooltipClose}
                                    open={tooltipOpen}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={tooptipText}
                                    placement="bottom-start"
                                    slotProps={{
                                        popper: {
                                            disablePortal: true,
                                        },
                                    }}
                                >
                                    <i
                                        className="ico-text"
                                        onClick={TooltipOpen}
                                    >
                                        ?
                                    </i>
                                </Tooltip>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    className="input-field"
                                    placeholder="텍스트를 입력하세요."
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">파일 첨부</TableCell>
                            <TableCell>
                                <div className="file-area">
                                    <div className="input-file">
                                        <label htmlFor="file1-2">
                                            파일 선택
                                            <input
                                                type="file"
                                                name=""
                                                id="file1-2"
                                            />
                                        </label>
                                        <div className="file-list">
                                            {/* <div className="delete-item">
                                                <span>과제명파일명.png</span>
                                                <IconButton>
                                                    <X />
                                                </IconButton>
                                            </div>
                                            <div className="delete-item">
                                                <span>과제명파일명2.png</span>
                                                <IconButton>
                                                    <X />
                                                </IconButton>
                                            </div> */}
                                            <span className="no-file">
                                                등록된 파일이 없습니다.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="file-volume">
                                        <span>0</span>개<span> / </span>
                                        <span>0</span>Ktyte
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">게시글 설정</TableCell>
                            <TableCell>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                        />
                                    }
                                    label="비밀글"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">게시글 내용</TableCell>
                            <TableCell>
                                <div className="ql-editor-wrap">
                                    <ReactQuill
                                        theme="snow"
                                        value={editorContent}
                                        onChange={setEditorContent}
                                        placeholder="내용을 입력하세요."
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default TempBoardApplyTable;
