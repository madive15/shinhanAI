// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import Checkbox from "@mui/material/Checkbox";
import Badge from "~/muiPublish/components/Badge";
import Hash from "~/muiPublish/components/Hash";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { ReactComponent as Sort } from "~assets/images/svg/icon-sort.svg";
// need content
import Loading from "~/muiPublish/loading/Loading";
import NoData from "~/muiPublish/components/noData/noData";

// need style

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
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
    align: any;
}
/**
 * @author shinhanAI
 * @description
 * user-front: PrebulitMetaCard
 * PrebulitMetaCard
 */
const PrebulitMetaCard: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };
    useEffect(() => {
        setLoading(false);
    }, []);

    const tumbnail: any[] = [
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
    ];
    const headCells: readonly HeadCell[] = [
        {
            id: "name",
            numeric: false,
            disablePadding: true,
            label: "분류",
            width: 80,
            align: "center",
        },
        {
            id: "calories",
            numeric: true,
            disablePadding: false,
            label: "타이틀",
            width: 322,
            align: "center",
        },
        {
            id: "fat",
            numeric: true,
            disablePadding: false,
            label: "상세설명",
            width: 300,
            align: "left",
        },
        {
            id: "carbs",
            numeric: true,
            disablePadding: false,
            label: "태그",
            width: 260,
            align: "center",
        },
        {
            id: "protein",
            numeric: true,
            disablePadding: false,
            label: "상세보기",
            width: 120,
            align: "center",
        },
    ];

    const [order, setOrder] = React.useState<"asc" | "desc">("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    function TableHeadElement(props: EnhancedTableProps) {
        const { order, orderBy, onRequestSort } = props;
        const createSortHandler =
            (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
                onRequestSort(event, property);
            };

        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={headCell.align}
                            sortDirection={
                                orderBy === headCell.id ? order : false
                            }
                            width={headCell.width}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={
                                    orderBy === headCell.id ? order : "asc"
                                }
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
    function createData(
        id: number,
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
        use: number
    ): Data {
        return {
            id,
            name,
            calories,
            fat,
            carbs,
            protein,
            use,
        };
    }
    const rows = [
        createData(1, "Cupcake", 305, 3.7, 67, 4.3, 1),
        createData(2, "Donut", 452, 25.0, 51, 4.9, 2),
        createData(3, "Eclair", 262, 16.0, 24, 6.0, 3),
        createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0, 4),
        createData(5, "Gingerbread", 356, 16.0, 49, 3.9, 5),
        createData(6, "Honeycomb", 408, 3.2, 87, 6.5, 6),
        createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3, 7),
        createData(8, "Jelly Bean", 375, 0.0, 94, 0.0, 8),
        createData(9, "KitKat", 518, 26.0, 65, 7.0, 9),
        createData(10, "Lollipop", 392, 0.2, 98, 0.0, 10),
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
    ): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string }
    ) => number {
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    const visibleRows = React.useMemo(
        () => [...rows].sort(getComparator(order, orderBy)),
        [order, orderBy]
    );
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const switchChange = (event: any) => {
        setIsSwitchOn(event.target.checked);
    };
    return (
        <>
            <div className="between-box">
                <div className="left">
                    <h3>상품단위</h3>
                </div>
                <div className="right">
                    <Select
                        className="select-box small"
                        value={ageSelect}
                        onChange={selectChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                    >
                        <MenuItem value="" disabled>
                            전체
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>TwentyTwenty</MenuItem>
                    </Select>
                    <Switch
                        className="switch-btn view-type"
                        checked={isSwitchOn}
                        onChange={switchChange}
                    />
                </div>
            </div>
            {isSwitchOn ? (
                <TableContainer className="table-content">
                    <Table
                        stickyHeader
                        className="table-defult-style"
                        aria-label="simple table"
                    >
                        <TableHeadElement
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {visibleRows.map((row, idx) => (
                                <TableRow
                                    key={row.id}
                                    hover
                                    sx={{ cursor: "pointer" }}
                                >
                                    <TableCell align="center">
                                        <Badge value="중분류" color="navy" />
                                    </TableCell>
                                    <TableCell align="left">
                                        프리빌트 항목 명
                                        <div className="badge-wrap">
                                            <Badge value="추천" color="black" />
                                            <Badge value="N" color="red" />
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <p className="ellipsis">
                                            프리빌트된 항목에 대한 설명
                                        </p>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className="hash-wrap">
                                            <Hash value="#TAG" type="type2" />
                                            <Hash value="#TAG" type="type2" />
                                            <Hash value="#TAG" type="type2" />
                                            <Hash value="#TAG" type="type2" />
                                            <Hash value="#TAG" type="type2" />
                                            <Hash value="+5" type="type2" />
                                        </div>
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
            ) : tumbnail.length > 0 ? (
                <div className="card-box-wrap">
                    <div className="card-box">
                        <a href="#" className="active">
                            <div className="badge-wrap">
                                <Badge value="전략" color="black " />
                                <Badge value="중분류" color="navy " />
                                <Badge value="N" color="red" />
                            </div>
                            <p className="card-box-tit">
                                <strong>
                                    프리빌트 된 항목에 대한제제제제제제제
                                </strong>
                            </p>
                            <p className="card-box-desc">
                                프리빌트된 항목에 대한 간략한 설명이 들어갑니다.
                                최대 2줄 까지 들어갑니다. 그 이후에는 말줄임표로
                                생략됩니다.
                            </p>
                            <div className="card-box-bottom">
                                <div className="hash-wrap">
                                    <Hash value="#TAG" type="type2" />
                                    <Hash value="#TAG" type="type2" />
                                    <Hash value="#TAG" type="type2" />
                                    <Hash value="+5" type="type2" />
                                </div>
                                <IconButton className="ico-circle20">
                                    <Search12 />
                                </IconButton>
                            </div>
                        </a>
                    </div>
                    {tumbnail.map((v: string, i: number) => (
                        <div className="card-box" key={i}>
                            <a href="#" className="">
                                <div className="badge-wrap">
                                    <Badge value="전략" color="black " />
                                    <Badge value="중분류" color="navy " />
                                    <Badge value="N" color="red" />
                                </div>
                                <p className="card-box-tit">
                                    <strong>
                                        프리빌트 된 항목에 대한제제제제제제제
                                    </strong>
                                </p>
                                <p className="card-box-desc">
                                    프리빌트된 항목에 대한 간략한 설명이
                                    들어갑니다. 최대 2줄 까지 들어갑니다. 그
                                    이후에는 말줄임표로 생략됩니다.
                                </p>
                                <div className="card-box-bottom">
                                    <div className="hash-wrap">
                                        <Hash value="#TAG" type="type2" />
                                        <Hash value="#TAG" type="type2" />
                                        <Hash value="#TAG" type="type2" />
                                        <Hash value="+5" type="type2" />
                                    </div>
                                    <IconButton className="ico-circle20">
                                        <Search12 />
                                    </IconButton>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <NoData pageName={"타겟추출리스트"} />
            )}
        </>
    );
};

export default PrebulitMetaCard;
