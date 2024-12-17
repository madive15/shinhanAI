// necessary set
import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";

// import Cardlist from "~/publish/components/Cardlist";

// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: ProductMeta
 * 상품메타관리 page
 */
const ProductMetaTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <TableContainer className="">
            <div className="table-title">
                <div className="tit-sum">
                    <h2>{props.pageName}</h2>
                    <span className="sum">총 00건</span>
                </div>
            </div>
            <Table className="table-defult-style" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width={48} align="center">
                            <strong>번호</strong>
                        </TableCell>
                        <TableCell width={149} align="center">
                            <strong>상품분류</strong>
                        </TableCell>
                        <TableCell width={149} align="center">
                            <strong>상품코드</strong>
                        </TableCell>
                        <TableCell width={149} align="center">
                            <strong>상품명</strong>
                        </TableCell>
                        <TableCell width={149} align="center">
                            <strong>상위분류</strong>
                        </TableCell>
                        <TableCell width={120} align="center">
                            <strong>사용여부</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell width={48} align="center">
                            번호
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품분류
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품코드
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품명
                        </TableCell>
                        <TableCell width={149} align="center">
                            상위분류
                        </TableCell>
                        <TableCell width={120} align="center">
                            사용여부
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={48} align="center">
                            번호
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품분류
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품코드
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품명
                        </TableCell>
                        <TableCell width={149} align="center">
                            상위분류
                        </TableCell>
                        <TableCell width={120} align="center">
                            사용여부
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={48} align="center">
                            번호
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품분류
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품코드
                        </TableCell>
                        <TableCell width={149} align="center">
                            상품명
                        </TableCell>
                        <TableCell width={149} align="center">
                            상위분류
                        </TableCell>
                        <TableCell width={120} align="center">
                            사용여부
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductMetaTable;
