import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "~/muiPublish/pubilsh.scss";

const pubList = [
    {
        id: "1",
        name: "가이드",
        link: "/muipublish/guide",
        etc: "",
    },
    {
        id: "2",
        name: "레이아웃",
        link: "/muipublish/layout",
        etc: "",
    },
    {
        id: "3",
        name: "로그인",
        link: "/muipublish/login",
        etc: "",
    },
    {
        id: "3",
        name: "메인",
        link: "/muipublish/main",
        etc: "",
    },
    {
        id: "UI_USR_0140",
        name: "타겟추출",
        link: "/muipublish/target",
        etc: "",
    },
    {
        id: "UI_USR_0390",
        name: "싱글뷰-개인",
        link: "/muipublish/single",
        etc: "",
    },
    {
        id: "UI_USR_0400",
        name: "싱글뷰-기업",
        link: "/muipublish/singleCorporation",
        etc: "",
    },
    {
        id: "UI_USR_0410",
        name: "싱글뷰-영업점",
        link: "/muipublish/singleOffice",
        etc: "",
    },

    {
        id: "6",
        name: "ocr",
        link: "/muipublish/ocr",
        etc: "",
    },
    {
        id: "6",
        name: "ocr검증",
        link: "/muipublish/ocrveri",
        etc: "",
    },
    {
        id: "UI_USR_0450",
        name: "과제신청목록",
        link: "/muipublish/tasklist",
        etc: "",
    },
    {
        id: "UI_USR_0460",
        name: "과제신청상세",
        link: "/muipublish/taskdetail",
        etc: "",
    },
    {
        id: "UI_USR_0470",
        name: "과제신청",
        link: "/muipublish/taskapply",
        etc: "",
    },
    {
        id: "UI_USR_0480",
        name: "공지사항목록",
        link: "/muipublish/noticelist",
        etc: "",
    },
    {
        id: "UI_USR_0490",
        name: "공지사항상세",
        link: "/muipublish/noticedetail",
        etc: "",
    },
    {
        id: "UI_USR_0500",
        name: "임시게시판목록",
        link: "/muipublish/tempBoardlist",
        etc: "",
    },
    {
        id: "UI_USR_0510",
        name: "임시게시판등록",
        link: "/muipublish/tempBoardapply",
        etc: "",
    },
    {
        id: "UI_USR_0520",
        name: "임시게시판상세",
        link: "/muipublish/tempBoarddetail",
        etc: "",
    },

    {
        id: "UI_USR_0030",
        name: "마이페이지-타겟추출내역",
        link: "/muipublish/mytarget",
        etc: "",
    },
    {
        id: "UI_USR_0040",
        name: "마이페이지-타겟추출상세내역",
        link: "/muipublish/mytargetdetail",
        etc: "",
    },
    {
        id: "UI_USR_0070",
        name: "마이페이지-모델생성내역",
        link: "/muipublish/mymodel",
        etc: "",
    },
    {
        id: "UI_USR_0080",
        name: "마이페이지-모델생성상세내역",
        link: "/muipublish/mymodeldetail",
        etc: "",
    },
    {
        id: "UI_USR_0110",
        name: "마이페이지-즐겨찾기 관리",
        link: "/muipublish/mymodeldetail",
        etc: "",
    },
    {
        id: "UI_USR_0090",
        name: "마이페이지-과제신청내역",
        link: "/muipublish/mytask",
        etc: "",
    },
    {
        id: "UI_USR_0110",
        name: "마이페이지-즐겨찾기 관리(프리빌트)",
        link: "/muipublish/mybookmark",
        etc: "",
    },
    {
        id: "UI_USR_0020",
        name: "통합검색",
        link: "/muipublish/search",
        etc: "",
    },
    {
        id: "",
        name: "팝업 모음",
        link: "/muipublish/popupBundle",
        etc: "",
    },
    {
        id: "",
        name: "에러 페이지",
        link: "/muipublish/error",
        etc: "",
    },
];

export default function MuiPubIndex() {
    return (
        <Container className="index-wrap" maxWidth={false}>
            <Typography variant="h1" component="h1" className="title">
                퍼블리싱 user 작업 리스트
            </Typography>
            <TableContainer component={Paper}>
                <Table
                    className="pub-list-table"
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell width={120} align="center">
                                <strong>No</strong>
                            </TableCell>
                            <TableCell width={200} align="center">
                                <strong>화면아이디</strong>
                            </TableCell>
                            <TableCell width={300} align="center">
                                <strong>화면명</strong>
                            </TableCell>
                            <TableCell width={300} align="center">
                                <strong>링크</strong>
                            </TableCell>
                            <TableCell align="center">
                                <strong>비고</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pubList.map((row, i) => (
                            <TableRow key={row.name}>
                                <TableCell width={120} align="center">
                                    {i + 1}
                                </TableCell>
                                <TableCell width={200} align="center">
                                    {row.id}
                                </TableCell>
                                <TableCell width={200} align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell width={200} align="center">
                                    <NavLink target="_blank" to={row.link}>
                                        {row.link}
                                    </NavLink>
                                </TableCell>
                                <TableCell align="center">{row.etc}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
