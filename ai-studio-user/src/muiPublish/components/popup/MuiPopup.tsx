// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
import { ReactComponent as X8 } from "~assets/images/svg/icons-x-8.svg";
import { ReactComponent as Search } from "~assets/images/svg/icon-search.svg";
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
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
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

const MuiPopup: React.FC<IPageProps> = () => {
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
    const [SitemapStauts, setSitemapStauts] = React.useState(false);
    const SitemapOpen = () => {
        setSitemapStauts(true);
    };
    const SitemapClose = () => {
        setSitemapStauts(false);
    };
    const [TagStauts, setTagStauts] = React.useState(false);
    const TagOpen = () => {
        setTagStauts(true);
    };
    const TagClose = () => {
        setTagStauts(false);
    };

    const [radioGroup, setRadioGroup] = React.useState("인기/추천");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };
    return (
        <div className="Popup-list-wrap">
            <Button variant="primary" onClick={PrebuiltOpen}>
                프리빌트 상세팝업
            </Button>
            &nbsp;
            <Button variant="primary" onClick={ModelOpen}>
                모델 상세팝업
            </Button>
            &nbsp;
            <Button variant="primary" onClick={SitemapOpen}>
                사이트 맵
            </Button>
            &nbsp;
            <Button variant="primary" onClick={TagOpen}>
                태그 검색
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
                    <div className="pop-content">
                        <TableContainer className="row-table" component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th">
                                            분류
                                        </TableCell>
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
                                            최근 4개월간 퇴직연금 가입고객 중
                                            IRP 이탈 고객을 예측 패턴을 학습하여
                                            마케팅활용 동의 대상 고객 전체의
                                            이탈 확률을 추론합니다.
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            태그
                                        </TableCell>
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
                    </div>
                    <div className="pop-content">
                        <p className="pop-content-tit">세부 조건</p>
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
                    <div className="pop-content">
                        <TableContainer className="row-table" component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th">
                                            분류
                                        </TableCell>
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
                                            최근 4개월간 퇴직연금 가입고객 중
                                            IRP 이탈 고객을 예측 패턴을 학습하여
                                            마케팅활용 동의 대상 고객 전체의
                                            이탈 확률을 추론합니다.
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            태그
                                        </TableCell>
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
                    </div>
                    <div className="pop-content">
                        <p className="pop-content-tit">세부 조건</p>
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
                                    <TableRow>
                                        <TableCell width={216} align="center">
                                            외화 정기예금
                                        </TableCell>
                                        <TableCell width={216} align="center">
                                            <PointProgressBar
                                                percent={0.0291}
                                            />
                                        </TableCell>
                                        <TableCell width={216} align="center">
                                            D
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="pop-content">
                        <p className="pop-content-tit">프리빌트 타겟리스트</p>
                        <div className="prebuilt-target-list">
                            <ul>
                                <li>
                                    <span>
                                        직장인 급여 이체 고객 IRP 신규 타겟
                                    </span>
                                    <Button variant="small">타겟추출</Button>
                                </li>
                                <li>
                                    <span>
                                        연말 세액공제 민감 고객 IRP 신규타겟
                                    </span>
                                    <Button variant="small">타겟추출</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
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
            {/* 사이트맵 목록 */}
            <Dialog
                className="layer-box "
                open={SitemapStauts}
                onClose={SitemapClose}
            >
                <DialogTitle>사이트맵</DialogTitle>
                <DialogContent>
                    <div className="sitemap">
                        <ul>
                            <li>
                                <p>타겟 추출</p>
                                <ul>
                                    <li>
                                        <a href="#">타겟추출</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>모델 생성</p>
                                <ul>
                                    <li>
                                        <a href="#">모델 생성</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>싱글뷰</p>
                                <ul>
                                    <li>
                                        <a href="#">개인 싱글뷰</a>
                                    </li>
                                    <li>
                                        <a href="#">기업 싱글뷰</a>
                                    </li>
                                    <li>
                                        <a href="#">영업점 싱글뷰</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>과제신청/공지</p>
                                <ul>
                                    <li>
                                        <a href="#">과제신청</a>
                                    </li>
                                    <li>
                                        <a href="#">공지사항</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>마이페이지</p>
                                <ul>
                                    <li>
                                        <a href="#">타겟 추출 내역</a>
                                    </li>
                                    <li>
                                        <a href="#">모델 생성 내역</a>
                                    </li>
                                    <li>
                                        <a href="#">과제 신청 내역</a>
                                    </li>
                                    <li>
                                        <a href="#">나의 즐겨찾기 관리</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>AI-OCR 검증</p>
                                <ul>
                                    <li>
                                        <a href="#">AI-OCR 검증</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub1" onClick={SitemapClose}>
                        닫기
                    </Button>
                </DialogActions>
                <IconButton
                    className="dialog-close ico-rect23 x"
                    onClick={SitemapClose}
                >
                    <Plus9 />
                </IconButton>
            </Dialog>
            {/* 태그 검색*/}
            <Dialog
                className="layer-box l-large"
                open={TagStauts}
                onClose={TagClose}
            >
                <DialogTitle>태그 검색</DialogTitle>
                <DialogContent>
                    <div className="tag-search">
                        <div className="sub-search">
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
                        <FormGroup row className="filter-chk">
                            <FormControlLabel
                                control={<Checkbox />}
                                label="전체"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㄱ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㄴ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㄷ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㄹ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅁ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅅ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅇ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅈ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅊ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅋ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅌ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅍ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ㅎ"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="기타"
                            />
                        </FormGroup>
                        <div className="tag-fillter-box">
                            <span>ㄱ</span>
                            <FormGroup row className="filter-chk">
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="가게 여신"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="개인형"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="거치식"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="골드"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="공모"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="금리"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="기부"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="기업형"
                                />
                            </FormGroup>
                        </div>
                        <div className="tag-fillter-box">
                            <span>ㄷ</span>
                            <FormGroup row className="filter-chk">
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="단기"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="담보"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="대출"
                                />
                            </FormGroup>
                        </div>
                        <div className="tag-fillter-box">
                            <span>ㄱ</span>
                            <FormGroup row className="filter-chk">
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="가게 여신"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="개인형"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="거치식"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="골드"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="공모"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="금리"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="기부"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="기업형"
                                />
                            </FormGroup>
                        </div>
                        <div className="tag-fillter-box">
                            <span>ㄱ</span>
                            <FormGroup row className="filter-chk">
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="가게 여신"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="개인형"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="거치식"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="골드"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="공모"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="금리"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="기부"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="기업형"
                                />
                            </FormGroup>
                        </div>
                        <div className="tag-choice-box">
                            <div className="tag-choice-list">
                                <p>
                                    선택항목 <em>3</em>
                                </p>
                                <div className="choice-list">
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        거치식
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        단기
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        보장
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        거치식
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        단기
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        보장
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        거치식
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        단기
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        보장
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        거치식
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        단기
                                    </Button>
                                    <Button variant="iconDel" endIcon={<X8 />}>
                                        보장
                                    </Button>
                                </div>
                            </div>
                            <Button variant="small">전체 삭제</Button>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub1" onClick={TagClose}>
                        적용 취소
                    </Button>
                    <Button variant="primary" onClick={TagClose}>
                        선택항목 적용
                    </Button>
                </DialogActions>
                <IconButton
                    className="dialog-close ico-rect23 x"
                    onClick={TagClose}
                >
                    <Plus9 />
                </IconButton>
            </Dialog>
        </div>
    );
};

export default MuiPopup;
