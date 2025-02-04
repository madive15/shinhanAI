// necessary set
import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Badge from "~/muiPublish/components/Badge";
import ProgressBar from "~/muiPublish/components/ProgressBar";

// need content

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

interface EnhancedTableProps {
    numSelected?: number;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => void;
    onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: "asc" | "desc";
    orderBy: string;
    rowCount?: number;
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
interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
    width: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: SingleViewTable
 * SingleViewTable
 */
const SingleViewTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <TableContainer className="table-content ">
            <Table className="table-defult-style rowspan-table">
                <TableHead>
                    <TableRow>
                        <TableCell width={180} align="center">
                            분류
                        </TableCell>
                        <TableCell width={260} align="center">
                            추천
                        </TableCell>
                        <TableCell width={780} align="left">
                            사유
                        </TableCell>
                        <TableCell width={320} align="center">
                            확률
                        </TableCell>
                        <TableCell width={220} align="center">
                            등급
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                        <TableRow key={idx}>
                            <TableCell
                                className="row-span-first"
                                width={180}
                                align="center"
                            >
                                Profile 기반 추천
                            </TableCell>
                            <TableCell width={260} align="center">
                                <strong>퇴직연금 IRP 추가 불입</strong>
                            </TableCell>
                            <TableCell width={780}>
                                <p className="ellipsis">
                                    최근 1년 내 해외여행 관련 항공권, 숙박 예약
                                    내역이 다수 확인최근 1년 내 해외여행 관련
                                    항공권, 숙박 예약 내역이 다수 확인최근 1년
                                    내 해외여행 관련 항공권, 숙박 예약 내역이
                                    다수 확인최근 1년 내 해외여행 관련 항공권,
                                    숙박 예약 내역이 다수 확인
                                </p>
                            </TableCell>
                            <TableCell width={320}>
                                <ProgressBar percent={81} />
                            </TableCell>
                            <TableCell width={220} align="center">
                                3등급
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default SingleViewTable;
