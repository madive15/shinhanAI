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
        <TableContainer className="table-content">
            <Table className="table-defult-style">
                <TableHead>
                    <TableRow>
                        <TableCell width={180} align="center">
                            유형
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
                            <TableCell width={180} align="center">
                                1
                            </TableCell>
                            <TableCell width={260} align="center">
                                {idx}
                            </TableCell>
                            <TableCell width={780} align="left">
                                Sogo 우량고객 이탈 예측 과제
                            </TableCell>
                            <TableCell width={320} align="center">
                                <ProgressBar percent={81} />
                            </TableCell>
                            <TableCell width={220} align="center">
                                상품명
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default SingleViewTable;
