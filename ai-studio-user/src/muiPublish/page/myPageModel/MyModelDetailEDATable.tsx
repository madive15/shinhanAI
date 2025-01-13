// necessary set
import React, { useState, useEffect } from "react";

// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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

/**
 * @author shinhanAI
 * @description
 * admin-front: MyModelDetailEDATable
 * MyModelDetailEDATable
 */
const MyModelDetailEDATable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="box">
            <div className="between-box">
                <div className="left">
                    <h3>모델링 변수 EDA</h3>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={1160} align="center">
                                변수명
                            </TableCell>
                            <TableCell width={200} align="center">
                                Lv
                            </TableCell>
                            <TableCell width={200} align="center">
                                Lv-direction
                            </TableCell>
                            <TableCell width={200} align="center">
                                Ar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3, 4, 5].map((v, i) => (
                            <TableRow key={i}>
                                <TableCell width={1160} align="center">
                                    타발 송금 개인외 이전거래 금액합 6개월 대비
                                    증가 비율
                                </TableCell>
                                <TableCell width={200} align="center">
                                    2.22997
                                </TableCell>
                                <TableCell width={200} align="center">
                                    D
                                </TableCell>
                                <TableCell width={200} align="center">
                                    0.108696
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default MyModelDetailEDATable;
