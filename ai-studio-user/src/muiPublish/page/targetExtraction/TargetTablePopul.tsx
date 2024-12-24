// necessary set
import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Badge from "~/muiPublish/components/Badge";

// need style

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
    width: number;
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
    bookmark: boolean;
    bunru: string;
    title: string;
    des: string;
    taglist: string[];
    view: number;
}

/**
 * @author shinhanAI
 * @description
 * user-front: TargetTable
 * TargetTable page
 * 타겟추출 - TargetTable 리스트
 */
const TargetTablePopul: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const headCells: readonly HeadCell[] = [
        {
            id: "bookmark",
            numeric: false,
            disablePadding: true,
            label: "즐겨찾기",
            width: 64,
        },
        {
            id: "bunru",
            numeric: true,
            disablePadding: false,
            label: "분류",
            width: 80,
        },
        {
            id: "title",
            numeric: true,
            disablePadding: false,
            label: "제목",
            width: 280,
        },
        {
            id: "des",
            numeric: true,
            disablePadding: false,
            label: "상세설명",
            width: 470,
        },
        {
            id: "taglist",
            numeric: true,
            disablePadding: false,
            label: "태그",
            width: 260,
        },
        {
            id: "view",
            numeric: true,
            disablePadding: false,
            label: "상세보기",
            width: 160,
        },
    ];

    const [order, setOrder] = React.useState<"asc" | "desc">("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data | any>("bookmark");
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
                    {headCells.map((headCell, idx) => (
                        <TableCell
                            key={headCell.id}
                            align={headCell.id === "des" ? "left" : "center"}
                            sortDirection={orderBy === headCell.id ? order : false}
                            width={headCell.width}
                        >
                            <TableSortLabel
                                // active={orderBy === headCell.id}
                                // direction={orderBy === headCell.id ? order : "asc"}
                                // onClick={createSortHandler(headCell.id)}
                                hideSortIcon={true}
                                tabIndex={-1}
                            >
                                {idx === 0 ? <BookmarkOn /> : headCell.label}
                                {/* {orderBy === headCell.id ? (
                                    <span className="icon-sort">
                                        {order === "desc" ? (
                                            <Sort className="class-color-path3" />
                                        ) : (
                                            <Sort className="class-color-path3" />
                                        )}
                                    </span>
                                ) : null} */}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }

    // table list data
    function createData(
        bookmark: boolean,
        bunru: string,
        title: string,
        des: string,
        taglist: string[],
        view: number
    ): Data {
        return {
            bookmark,
            bunru,
            title,
            des,
            taglist,
            view,
        };
    }
    const rows = [
        createData(true, "중분류", "프리빌트 항목 명", "프리빌트된 항목에 대한 설명", ["#TAG", "#TAG"], 1),
        createData(
            true,
            "중분류",
            "프리빌트 항목 명",
            "프리빌트된 항목에 대한 설명",
            ["#TAG", "#TAG", "#TAG", "#TAG"],
            2
        ),
        createData(true, "중분류", "프리빌트 항목 명", "프리빌트된 항목에 대한 설명", ["#TAG", "#TAG"], 3),
        createData(
            true,
            "중분류",
            "프리빌트 항목 명",
            "프리빌트된 항목에 대한 설명",
            ["#TAG", "#TAG", "#TAG", "#TAG", "#TAG"],
            4
        ),
        createData(false, "중분류", "프리빌트 항목 명", "프리빌트된 항목에 대한 설명", ["#TAG", "#TAG", "#TAG"], 5),
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
    ): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
        return order === "asc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    const visibleRows = React.useMemo(() => [...rows].sort(getComparator(order, orderBy)), [order, orderBy]);
    return (
        <TableContainer className="table-content">
            <Table stickyHeader className="table-defult-style" aria-label="인기 리스트">
                <TableHeadElement order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                <TableBody>
                    {visibleRows.map((row, idx) => (
                        <TableRow key={idx} hover sx={{ cursor: "pointer" }}>
                            <TableCell align="center">
                                <Checkbox
                                    icon={<Bookmark />}
                                    checkedIcon={<BookmarkOn />}
                                    checked={row.bookmark === true ? true : false}
                                    // onChange={""}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Badge value={row.bunru} color="navy " />
                            </TableCell>
                            <TableCell align="center">
                                {row.title}
                                <Badge value="전략" color="black " />
                                <Badge value="N" color="red" />
                            </TableCell>
                            <TableCell align="left">{row.des}</TableCell>
                            <TableCell align="center">
                                {row.taglist.map((row: any, tagidx) => (
                                    <span className="tag" key={tagidx}>
                                        {row}
                                    </span>
                                ))}
                            </TableCell>
                            <TableCell align="center">
                                <IconButton className="ico-circle20">
                                    <Search12 />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TargetTablePopul;
