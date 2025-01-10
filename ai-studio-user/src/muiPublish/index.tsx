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
        name: "메인",
        link: "/muipublish/main",
        etc: "",
    },
    {
        id: "4",
        name: "타겟추출",
        link: "/muipublish/target",
        etc: "",
    },
    {
        id: "5",
        name: "싱글뷰",
        link: "/muipublish/single",
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
        id: "7",
        name: "과제신청목록",
        link: "/muipublish/tasklist",
        etc: "",
    },
    {
        id: "8",
        name: "과제신청",
        link: "/muipublish/taskapply",
        etc: "",
    },
    {
        id: "9",
        name: "과제신청상세",
        link: "/muipublish/taskdetail",
        etc: "",
    },
    {
        id: "10",
        name: "공지사항목록",
        link: "/muipublish/noticelist",
        etc: "",
    },
    {
        id: "11",
        name: "공지사항상세",
        link: "/muipublish/noticedetail",
        etc: "",
    },
    {
        id: "12",
        name: "임시게시판목록",
        link: "/muipublish/tempBoardlist",
        etc: "",
    },
    {
        id: "13",
        name: "임시게시판등록",
        link: "/muipublish/tempBoardapply",
        etc: "",
    },
    {
        id: "14",
        name: "임시게시판상세",
        link: "/muipublish/tempBoarddetail",
        etc: "",
    },
    {
        id: "15",
        name: "마이페이지-과제신청내역",
        link: "/muipublish/mytask",
        etc: "",
    },
    {
        id: "16",
        name: "마이페이지-타겟추출내역",
        link: "/muipublish/mytarget",
        etc: "",
    },
    {
        id: "17",
        name: "마이페이지-타겟추출상세내역",
        link: "/muipublish/mytargetdetail",
        etc: "",
    },
    {
        id: "18",
        name: "마이페이지-모델생성내역",
        link: "/muipublish/mymodel",
        etc: "",
    },
    {
        id: "19",
        name: "마이페이지-모델생성상세내역",
        link: "/muipublish/mymodeldetail",
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
                            <TableCell width={200} align="center">
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
                        {pubList.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell width={120} align="center">
                                    {row.id}
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
