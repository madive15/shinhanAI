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
import Hash from "~/muiPublish/components/Hash";
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
 * admin-front: SingleViewOfficeTable
 * SingleViewOfficeTable
 */
const SingleViewOfficeTable: React.FC<IPageProps> = (props) => {
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
                            구분
                        </TableCell>
                        <TableCell width={260} align="center">
                            타겟 리스트 명
                        </TableCell>
                        <TableCell width={1100} align="left">
                            타겟 리스트 설명
                        </TableCell>
                        <TableCell width={260} align="center">
                            관련 키워드
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell
                            rowSpan={3}
                            className="row-span-first"
                            width={180}
                            align="center"
                        >
                            외환
                        </TableCell>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">환전 가망 고객 타겟 리스트</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                향후 3개월 내 환전 가능성이 높은 타겟 리스트
                                입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260} align="center">
                            <div className="hash-wrap center">
                                <Hash value="#외환" type="type2" />
                                <Hash value="#환전" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">외화계좌 신규 가망 고객 리스트</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                향후 1개월 내 외화계좌 신규 가능성이 높은
                                타겟리스트 입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#외환" type="type2" />
                                <Hash value="#외화계좌" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">쏠트레블 카드 가망 고객 리스트</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                향후 3개월 내 쏠트레블 카드 신규 가능성이 높은
                                타겟리스트 입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#외환" type="type2" />
                                <Hash value="#체크카드" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            rowSpan={3}
                            className="row-span-first"
                            width={180}
                            align="center"
                        >
                            통합CODE분류레벨 1레벨명
                        </TableCell>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">프리빌트 명</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                프리빌트 설명 노출되는 영역입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">프리빌트 명</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                프리빌트 설명 노출되는 영역입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">프리빌트 명</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                프리빌트 설명 노출되는 영역입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            rowSpan={3}
                            className="row-span-first"
                            width={180}
                            align="center"
                        >
                            통합CODE분류레벨 1레벨명
                        </TableCell>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">프리빌트명</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                프리빌트 설명 노출되는 영역입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">프리빌트명</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                프리빌트 설명 노출되는 영역입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">프리빌트명</a>
                            </strong>
                        </TableCell>
                        <TableCell width={1100}>
                            <p className="ellipsis">
                                프리빌트 설명 노출되는 영역입니다. 프리빌트 설명
                                노출되는 영역입니다. 프리빌트 설명 노출되는
                                영역입니다. 프리빌트 설명 노출되는
                                영역입니다.프리빌트 설명 노출되는 영역입니다.
                                프리빌트 설명 노출되는 영역입니다.
                            </p>
                        </TableCell>
                        <TableCell width={260}>
                            <div className="hash-wrap center">
                                <Hash value="#태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default SingleViewOfficeTable;
