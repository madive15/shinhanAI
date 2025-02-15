// necessary set
import React, { useState, useEffect } from "react";

// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MyModelTopFiveChart from "~/muiPublish/page/myPageModel/MyModelTopFiveChart";
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
 * admin-front: MyModelDetailTable
 * MyModelDetailTable
 */
const MyModelDetailTable: React.FC<IPageProps> = (props) => {
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
                    <h3>변수 중요도 상위 TOP 5</h3>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={54} align="center">
                                순위
                            </TableCell>
                            <TableCell width={1386} align="center">
                                변수명
                            </TableCell>
                            <TableCell width={320} align="center">
                                중요도 수치
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3, 4, 5].map((v, i) => (
                            <TableRow key={i}>
                                <TableCell width={54} align="center">
                                    {i + 1}
                                </TableCell>
                                <TableCell width={1386} align="center">
                                    신용카드 이용금액
                                </TableCell>
                                <TableCell width={320} align="center">
                                    999
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <MyModelTopFiveChart />
        </div>
    );
};
export default MyModelDetailTable;
