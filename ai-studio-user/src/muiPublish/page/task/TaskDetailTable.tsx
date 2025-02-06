// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Badge from "~/muiPublish/components/Badge";
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
 * admin-front: TaskDetailTable
 * TaskDetailTable
 */
const TaskDetailTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const [showAll, setShowAll] = useState<boolean>(false);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const tableData = [
        {
            date: "2024-11-25 11:30",
            result: "검색 결과 내용 1",
            status: "과제신청",
        },
        {
            date: "2024-11-26 12:00",
            result: "검색 결과 내용 2",
            status: "과제신청",
        },
        {
            date: "2024-11-27 09:15",
            result: "검색 결과 내용 3",
            status: "과제신청",
        },
        {
            date: "2024-11-28 14:45",
            result: "검색 결과 내용 4",
            status: "과제신청",
        },
        {
            date: "2024-11-29 08:30",
            result: "검색 결과 내용 5",
            status: "과제신청",
        },
        {
            date: "2024-11-30 17:10",
            result: "검색 결과 내용 6",
            status: "과제신청",
        },
    ];
    const visibleData = showAll ? tableData : tableData.slice(0, 1);
    return (
        <div className="task-list-table">
            <div className="between-box">
                <div className="left">
                    <h3>검색 결과</h3>
                </div>
                <div className="right">
                    <Button
                        variant="small"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "히스토리 닫기" : "히스토리 열기"}
                    </Button>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={144} align="center">
                                일시
                            </TableCell>
                            <TableCell width={1616} align="center">
                                결과
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleData.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell width={144} align="center">
                                    {row.date}
                                </TableCell>
                                <TableCell width={1616} align="left">
                                    <Badge
                                        value="과제 신청"
                                        color="blue2"
                                        type="line"
                                    />
                                    {row.result}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default TaskDetailTable;
