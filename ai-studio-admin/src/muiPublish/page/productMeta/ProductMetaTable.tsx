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
import { ReactComponent as Sort } from "~assets/images/svg/icon-sort.svg";

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
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
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
 * admin-front: ProductMetaTable
 * 상품메타관리 table page
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

    // table sort data
    const headCells: readonly HeadCell[] = [
        {
            id: "name",
            numeric: false,
            disablePadding: true,
            label: "번호",
            width: 48,
        },
        {
            id: "calories",
            numeric: true,
            disablePadding: false,
            label: "상품분류",
            width: 149,
        },
        {
            id: "fat",
            numeric: true,
            disablePadding: false,
            label: "상품코드",
            width: 149,
        },
        {
            id: "carbs",
            numeric: true,
            disablePadding: false,
            label: "상품명",
            width: 149,
        },
        {
            id: "protein",
            numeric: true,
            disablePadding: false,
            label: "상위분류",
            width: 149,
        },
        {
            id: "protein",
            numeric: true,
            disablePadding: false,
            label: "사용여부",
            width: 120,
        },
    ];

    const [order, setOrder] = React.useState<"asc" | "desc">("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    function TableHeadElement(props: EnhancedTableProps) {
        const { order, orderBy, onRequestSort } = props;
        const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={"center"}
                            sortDirection={orderBy === headCell.id ? order : false}
                            width={headCell.width}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : "asc"}
                                onClick={createSortHandler(headCell.id)}
                                hideSortIcon={true}
                                tabIndex={-1}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <span className="icon-sort">
                                        {order === "desc" ? (
                                            <Sort className="class-color-path3" />
                                        ) : (
                                            <Sort className="class-color-path3" />
                                        )}
                                    </span>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }

    // table list data
    function createData(id: number, name: string, calories: number, fat: number, carbs: number, protein: number): Data {
        return {
            id,
            name,
            calories,
            fat,
            carbs,
            protein,
        };
    }
    const rows = [
        createData(1, "Cupcake", 305, 3.7, 67, 4.3),
        createData(2, "Donut", 452, 25.0, 51, 4.9),
        createData(3, "Eclair", 262, 16.0, 24, 6.0),
        createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
        createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
        createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
        createData(9, "KitKat", 518, 26.0, 65, 7.0),
        createData(10, "Lollipop", 392, 0.2, 98, 0.0),
        createData(11, "Marshmallow", 318, 0, 81, 2.0),
        createData(12, "Nougat", 360, 19.0, 9, 37.0),
        createData(13, "Oreo", 437, 18.0, 63, 4.0),
    ];
    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    function getComparator<Key extends keyof any>(
        order: "asc" | "desc",
        orderBy: Key
    ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    const visibleRows = React.useMemo(() => [...rows].sort(getComparator(order, orderBy)), [order, orderBy]);

    return (
        <TableContainer
            className="table-content"
            style={{ "--heiTitSearch": props.heiTitSearch + "px" } as React.CSSProperties}
        >
            <Table stickyHeader className="table-defult-style" aria-label="simple table">
                <TableHeadElement order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                <TableBody>
                    {visibleRows.map((row, idx) => (
                        <TableRow key={row.id} hover sx={{ cursor: "pointer" }}>
                            <TableCell width={48} align="center">
                                {row.id}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">
                                <Badge value="사용" color="green" size="large" />
                                {/* <Badge value="미사용" color="gray" size="large" /> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default ProductMetaTable;
