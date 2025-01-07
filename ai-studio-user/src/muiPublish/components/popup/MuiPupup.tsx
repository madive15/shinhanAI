// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
// need content
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TableHead,
    MenuItem,
} from "@mui/material";
import Hash from "~/muiPublish/components/Hash";
import PointProgressBar from "~/muiPublish/components/PointProgressBar";
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

const MuiPupup: React.FC<IPageProps> = () => {
    const [PrebuiltStauts, setPrebuiltStauts] = React.useState(false);
    const PrebuiltOpen = () => {
        setPrebuiltStauts(true);
    };
    const PrebuiltClose = () => {
        setPrebuiltStauts(false);
    };
    const [ModelStauts, setModelStauts] = React.useState(false);
    const ModelOpen = () => {
        setModelStauts(true);
    };
    const ModelClose = () => {
        setModelStauts(false);
    };
    return (
        <div className="Popup-list-wrap">
            <Button variant="primary" onClick={PrebuiltOpen}>
                프리빌트 상세팝업
            </Button>
            <Button variant="primary" onClick={ModelOpen}>
                모델 상세팝업
            </Button>
            {/* 프리빌트 상세팝업 */}
            <Dialog
                className="layer-box "
                open={PrebuiltStauts}
                onClose={PrebuiltClose}
            >
                <DialogTitle>
                    {"퇴직연금 가입고객 중 IRP 이탈 고객"}
                    <p className="popup-tit-desc">
                        프리빌트명에 대한 모델 학습원리 설명이 노출됩니다.
                        전체글이 모두 노출이 되며 글이 길어지면 글이 노출되는
                        영역이 확장됩니다.
                    </p>
                </DialogTitle>
                <DialogContent>
                    <TableContainer className="row-table" component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th">분류</TableCell>
                                    <TableCell>
                                        <ul className="arrange-list">
                                            <li>상품</li>
                                            <li>예적금</li>
                                            <li>적금</li>
                                        </ul>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">
                                        프리빌트 명
                                    </TableCell>
                                    <TableCell>
                                        퇴직연금 가입고객 중 IRP 이탈 고객
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">
                                        간략 설명
                                    </TableCell>
                                    <TableCell>
                                        퇴직연금 가입고객 중 IRP 이탈 고객을
                                        예측하는 모델입니다.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">
                                        상세 설명
                                    </TableCell>
                                    <TableCell>
                                        최근 4개월간 퇴직연금 가입고객 중 IRP
                                        이탈 고객을 예측 패턴을 학습하여
                                        마케팅활용 동의 대상 고객 전체의 이탈
                                        확률을 추론합니다.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">태그</TableCell>
                                    <TableCell>
                                        <div className="hash-wrap">
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="pop-rowtable-wrap">
                        <strong className="pop-table-tit">세부 조건</strong>
                        <p className="sub-tit">모델</p>
                        <TableContainer className="row-table" component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th">
                                            모델명
                                        </TableCell>
                                        <TableCell>적금</TableCell>
                                        <TableCell component="th">
                                            등급값
                                        </TableCell>
                                        <TableCell>1등급,2등급,3등급</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            모델명
                                        </TableCell>
                                        <TableCell>상세 설명</TableCell>
                                        <TableCell component="th">
                                            퇴직연금_IRP 이탈
                                        </TableCell>
                                        <TableCell>1등급,2등급,3등급</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <p className="sub-tit">지수</p>
                        <TableContainer className="row-table" component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th">
                                            지수명
                                        </TableCell>
                                        <TableCell>퇴직연금 관심지수</TableCell>
                                        <TableCell component="th">
                                            등급값
                                        </TableCell>
                                        <TableCell>1등급,2등급,3등급</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            지수명
                                        </TableCell>
                                        <TableCell>퇴직 이벤트 지수</TableCell>
                                        <TableCell component="th">
                                            등급값
                                        </TableCell>
                                        <TableCell>1등급,2등급,3등급</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            지수명
                                        </TableCell>
                                        <TableCell>대출 관심 지수</TableCell>
                                        <TableCell component="th">
                                            등급값
                                        </TableCell>
                                        <TableCell>1등급,2등급,3등급</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <p className="sub-tit">고객 조건 필터</p>
                        <TableContainer className="row-table" component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th">
                                            고객 조건 필터명
                                        </TableCell>
                                        <TableCell>개인현 IRP 보유</TableCell>
                                        <TableCell component="th">
                                            등급값
                                        </TableCell>
                                        <TableCell>당점 IRP 보유</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            고객 조건 필터명
                                        </TableCell>
                                        <TableCell>성별</TableCell>
                                        <TableCell component="th">
                                            등급값
                                        </TableCell>
                                        <TableCell>전체</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub2" onClick={PrebuiltClose}>
                        닫기
                    </Button>
                    <Button variant="primary">타겟 추출</Button>
                </DialogActions>
                <IconButton
                    className="dialog-close ico-rect23 x"
                    onClick={PrebuiltClose}
                >
                    <Plus9 />
                </IconButton>
            </Dialog>
            {/* 모델 상세팝업 */}
            <Dialog
                className="layer-box "
                open={ModelStauts}
                onClose={ModelClose}
            >
                <DialogTitle>
                    {"적금_신규 (땡겨요 적금)"}
                    <p className="popup-tit-desc">
                        모델명에 대한 모델 학습원리 설명이 노출됩니다. 전체글이
                        모두 노출이 되며 글이 길어지면 글이 노출되는 영역이
                        확장됩니다.
                    </p>
                </DialogTitle>
                <DialogContent>
                    <TableContainer className="row-table" component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th">분류</TableCell>
                                    <TableCell>
                                        <ul className="arrange-list">
                                            <li>상품</li>
                                            <li>예적금</li>
                                            <li>적금</li>
                                        </ul>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">
                                        프리빌트 명
                                    </TableCell>
                                    <TableCell>
                                        퇴직연금 가입고객 중 IRP 이탈 고객
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">
                                        간략 설명
                                    </TableCell>
                                    <TableCell>
                                        퇴직연금 가입고객 중 IRP 이탈 고객을
                                        예측하는 모델입니다.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">
                                        상세 설명
                                    </TableCell>
                                    <TableCell>
                                        최근 4개월간 퇴직연금 가입고객 중 IRP
                                        이탈 고객을 예측 패턴을 학습하여
                                        마케팅활용 동의 대상 고객 전체의 이탈
                                        확률을 추론합니다.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">태그</TableCell>
                                    <TableCell>
                                        <div className="hash-wrap">
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                            <Hash
                                                value="#해시태그"
                                                type="type2"
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="pop-table-wrap">
                        <strong className="pop-table-tit">세부 조건</strong>
                        <TableContainer className="table-content">
                            <Table className="table-defult-style">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            width={432}
                                            align="center"
                                            colSpan={2}
                                        >
                                            대상
                                        </TableCell>
                                        <TableCell width={216} align="center">
                                            구분
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell width={216} align="center">
                                            Variable
                                        </TableCell>
                                        <TableCell width={216} align="center">
                                            확률
                                        </TableCell>
                                        <TableCell width={216} align="center">
                                            Lv-direction
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell width={216} align="center">
                                            SOL 트래블 카드
                                        </TableCell>
                                        <TableCell width={216} align="center">
                                            <PointProgressBar percent={1} />
                                        </TableCell>
                                        <TableCell width={216} align="center">
                                            D
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className=""></div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub2" onClick={ModelClose}>
                        닫기
                    </Button>
                    <Button variant="primary">타겟 추출</Button>
                    <Button variant="primary">모델 생성</Button>
                </DialogActions>
                <IconButton
                    className="dialog-close ico-rect23 x"
                    onClick={ModelClose}
                >
                    <Plus9 />
                </IconButton>
            </Dialog>
        </div>
    );
};

export default MuiPupup;
