// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";

// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
// need style
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
 * admin-front: TempBoardListTable
 * TempBoardListTable
 */
const TempBoardListTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [selectOne, setAgeSelectOne] = React.useState("1");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div className="notice-list-table">
            <div className="between-box">
                <div className="left">
                    <h2>검색 결과</h2>
                    <span className="sum">총 00건</span>
                </div>
                <div className="right">
                    <div className="input-group">
                        <Select
                            className="select-box small"
                            value={selectOne}
                            onChange={selectOneChange}
                            IconComponent={Arrow}
                            displayEmpty
                            MenuProps={{
                                classes: {
                                    paper: "select-option-class",
                                },
                            }}
                        >
                            <MenuItem value={1}>제목 및 내용</MenuItem>
                            <MenuItem value={2}>제목</MenuItem>
                            <MenuItem value={3}>내용</MenuItem>
                        </Select>
                        <TextField
                            className="input-field"
                            placeholder="텍스트를 입력하세요."
                        />
                    </div>
                    <Button variant="sub2">조회</Button>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={56} align="center">
                                번호
                            </TableCell>
                            <TableCell width={1224} align="left">
                                제목
                            </TableCell>
                            <TableCell width={160} align="center">
                                조회수
                            </TableCell>
                            <TableCell width={160} align="center">
                                작성자
                            </TableCell>
                            <TableCell width={160} align="center">
                                작성일
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3, 4, 5, 6].map((idx) => (
                            <TableRow key={idx}>
                                <TableCell width={48} align="center">
                                    {idx}
                                </TableCell>
                                <TableCell width={1232} align="left">
                                    <a className="txt-end-icon ellipsis file">
                                        글 제목 글 제목 글 제목 글 제목 글 제목
                                        글 제목 글 제목 글 제목 글 제목 글 제목
                                        글 제목 글 제목 글 제목 글 제목 글 제목
                                        글 제목 글 제목 글 제목 글 제목 글 제목
                                        글 제목 글 제목 글 제목 글 제목 글 제목
                                        글 제목 글 제목 글 제목 글 제목글 제목
                                    </a>
                                </TableCell>
                                <TableCell width={160} align="center">
                                    99999999
                                </TableCell>
                                <TableCell width={160} align="center">
                                    작성자
                                </TableCell>
                                <TableCell width={160} align="center">
                                    2024-10-19
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default TempBoardListTable;
