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
 * admin-front: SingleViewCorporTable2
 * SingleViewCorporTable2
 */
const SingleViewCorporTable2: React.FC<IPageProps> = (props) => {
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
                            유형
                        </TableCell>
                        <TableCell width={260} align="center">
                            타겟 리스트
                        </TableCell>
                        <TableCell width={1020} align="center">
                            설명
                        </TableCell>
                        <TableCell width={400} align="center">
                            태그
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
                            성과명
                        </TableCell>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">성과명의 프리빌트</a>
                            </strong>
                        </TableCell>

                        <TableCell width={1020}>
                            <p className="ellipsis">프리빌트 간략 설명 노출</p>
                        </TableCell>
                        <TableCell width={400} align="center">
                            <div className="hash-wrap center">
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">성과명의 프리빌트</a>
                            </strong>
                        </TableCell>

                        <TableCell width={1020}>
                            <p className="ellipsis">프리빌트 간략 설명 노출</p>
                        </TableCell>
                        <TableCell width={400} align="center">
                            <div className="hash-wrap center">
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">성과명의 프리빌트</a>
                            </strong>
                        </TableCell>

                        <TableCell width={1020}>
                            <p className="ellipsis">프리빌트 간략 설명 노출</p>
                        </TableCell>
                        <TableCell width={400} align="center">
                            <div className="hash-wrap center">
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
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
                            성과명
                        </TableCell>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">성과명의 프리빌트</a>
                            </strong>
                        </TableCell>

                        <TableCell width={1020}>
                            <p className="ellipsis">프리빌트 간략 설명 노출</p>
                        </TableCell>
                        <TableCell width={400} align="center">
                            <div className="hash-wrap center">
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">성과명의 프리빌트</a>
                            </strong>
                        </TableCell>

                        <TableCell width={1020}>
                            <p className="ellipsis">프리빌트 간략 설명 노출</p>
                        </TableCell>
                        <TableCell width={400} align="center">
                            <div className="hash-wrap center">
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={260} align="center">
                            <strong>
                                <a href="#">성과명의 프리빌트</a>
                            </strong>
                        </TableCell>

                        <TableCell width={1020}>
                            <p className="ellipsis">프리빌트 간략 설명 노출</p>
                        </TableCell>
                        <TableCell width={400} align="center">
                            <div className="hash-wrap center">
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default SingleViewCorporTable2;
