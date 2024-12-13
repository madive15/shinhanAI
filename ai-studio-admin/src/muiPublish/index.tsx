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
        name: "폼요소 샘플",
        link: "/muipublish/MuiSampleform",
        etc: "",
    },
    {
        id: "4",
        name: "상품메타관리",
        link: "/muipublish/meta",
        etc: "",
    },
    {
        id: "5",
        name: "과제 신청",
        link: "/muipublish/task",
        etc: "",
    },
    {
        id: "6",
        name: "프롬프트메타관리",
        link: "/muipublish/promptmeta",
        etc: "",
    },
    // {
    //     id: "5",
    //     name: "관리자메뉴 권한관리",
    //     link: "/muipublish/manager",
    //     etc: "",
    // },
    // {
    //     id: "6",
    //     name: "권한그룹관리",
    //     link: "/muipublish/permission",
    //     etc: "",
    // },
    // {
    //     id: "7",
    //     name: "회원관리",
    //     link: "/muipublish/member",
    //     etc: "",
    // },
    // {
    //     id: "8",
    //     name: "AI-OCR 검증 결과 관리",
    //     link: "/muipublish/ocr",
    //     etc: "",
    // },
    // {
    //     id: "9",
    //     name: "상품메타관리",
    //     link: "/muipublish/meta",
    //     etc: "",
    // },
    // {
    //     id: "10",
    //     name: "과제 신청",
    //     link: "/muipublish/task",
    //     etc: "",
    // },
];

export default function MuiPubIndex() {
    return (
        <Container className="index-wrap" maxWidth={false}>
            <Typography variant="h1" component="h1" className="title">
                퍼블리싱 BO작업 리스트
            </Typography>
            <TableContainer component={Paper}>
                <Table className="pub-list-table" sx={{ minWidth: 650 }} aria-label="simple table">
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
