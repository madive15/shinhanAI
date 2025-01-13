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
 * admin-front: MyTargetDetailTable
 * MyTargetDetailTable
 */
const MyTargetDetailTable: React.FC<IPageProps> = (props) => {
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
                    <h3>조합 데이터</h3>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={54} align="center">
                                분류
                            </TableCell>
                            <TableCell width={320} align="center">
                                모델/지수명
                            </TableCell>
                            <TableCell width={1066} align="left">
                                등급값
                            </TableCell>
                            <TableCell width={320} align="center">
                                개별 타겟 수
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell width={54} align="center">
                                모델
                            </TableCell>
                            <TableCell width={320} align="center">
                                적금 신규
                            </TableCell>
                            <TableCell width={1066} align="left">
                                1등급,2등급,3등급,4등급
                            </TableCell>
                            <TableCell width={320} align="center">
                                27,345,483
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={54} align="center">
                                지수
                            </TableCell>
                            <TableCell width={320} align="center">
                                내 계좌 자신 모으기 지수
                            </TableCell>
                            <TableCell width={1066} align="left">
                                1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급,
                                8등급, 9등급, 10등급
                            </TableCell>
                            <TableCell width={320} align="center">
                                99,999,999
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={54} align="center">
                                모델
                            </TableCell>
                            <TableCell width={320} align="center">
                                적금 신규
                            </TableCell>
                            <TableCell width={1066} align="left">
                                1등급,2등급,3등급,4등급
                            </TableCell>
                            <TableCell width={320} align="center">
                                27,345,483
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={54} align="center">
                                지수
                            </TableCell>
                            <TableCell width={320} align="center">
                                내 계좌 자신 모으기 지수
                            </TableCell>
                            <TableCell width={1066} align="left">
                                1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급,
                                8등급, 9등급, 10등급
                            </TableCell>
                            <TableCell width={320} align="center">
                                99,999,999
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default MyTargetDetailTable;
