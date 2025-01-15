// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
import { ReactComponent as Next } from "~assets/images/svg/icon-page-next.svg";
import { ReactComponent as Prev } from "~assets/images/svg/icon-page-prev.svg";
import { ReactComponent as First } from "~assets/images/svg/icon-page-first.svg";
import { ReactComponent as Last } from "~assets/images/svg/icon-page-last.svg";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Badge from "~/muiPublish/components/Badge";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { Pagination, PaginationItem } from "@mui/material";
import Stack from "@mui/material/Stack";
// import Pagi
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
 * admin-front: MyBookmarkTable
 * MyBookmarkTable
 */
const MyBookmarkTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [selectOne, setAgeSelectOne] = React.useState("1");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };
    const [selectTwo, setAgeSelectTwo] = React.useState("10");
    const selectTwoChange = (event: SelectChangeEvent) => {
        setAgeSelectTwo(event.target.value as string);
    };

    const [confirmStauts, setConfirmStauts] = React.useState(false);
    const confirmOpen = () => {
        setConfirmStauts(true);
    };
    const confirmClose = () => {
        setConfirmStauts(false);
    };
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <div className="between-box">
                <div className="left">
                    <h3>{"서브탭메뉴명"} 즐겨찾기 내역</h3>
                    <span className="sum">총 00건</span>
                </div>
                <div className="right">
                    <FormGroup row className="chk-group">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="즐겨찾기 먼저보기"
                        />
                    </FormGroup>
                    <Button variant="sub2" onClick={confirmOpen}>
                        즐겨찾기 초기화
                    </Button>
                    <Select
                        className="select-box x-small"
                        value={selectOne}
                        onChange={selectOneChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                    >
                        <MenuItem value={1}>가나다순</MenuItem>
                        <MenuItem value={2}>추천순</MenuItem>
                        <MenuItem value={3}>인기순</MenuItem>
                        <MenuItem value={4}>최신순</MenuItem>
                    </Select>
                    <Select
                        className="select-box x-small"
                        value={selectTwo}
                        onChange={selectTwoChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                    >
                        <MenuItem value={10}>10개</MenuItem>
                        <MenuItem value={20}>30개</MenuItem>
                        <MenuItem value={30}>50개</MenuItem>
                    </Select>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={64} align="center">
                                <div className="book-mark">
                                    <Checkbox
                                        className="book-mark"
                                        icon={<Bookmark />}
                                        checkedIcon={<BookmarkOn />}
                                        defaultChecked
                                    />
                                </div>
                            </TableCell>
                            <TableCell width={240} align="center">
                                카테고리
                            </TableCell>
                            <TableCell width={728} align="left">
                                이름
                            </TableCell>
                            <TableCell width={728} align="left">
                                설명
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => (
                            <TableRow key={i}>
                                <TableCell width={64} align="center">
                                    <div className="book-mark">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<Bookmark />}
                                            checkedIcon={<BookmarkOn />}
                                            defaultChecked
                                        />
                                    </div>
                                </TableCell>
                                <TableCell width={240} align="center">
                                    1뎁스 카테고리
                                </TableCell>
                                <TableCell width={728} align="left">
                                    <strong>프리빌트 항목 명</strong>
                                    <div className="badge-wrap">
                                        <Badge value="추천" color="black " />
                                        <Badge value="N" color="red" />
                                    </div>
                                </TableCell>
                                <TableCell width={728} align="left">
                                    <p className="ellipsis">
                                        프리빌트의 간략 설명
                                    </p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                className="pagination"
                count={10}
                showFirstButton
                showLastButton
                renderItem={(item) => (
                    <PaginationItem
                        slots={{
                            previous: Prev,
                            next: Next,
                            first: First,
                            last: Last,
                        }}
                        {...item}
                    />
                )}
            />
            <Dialog
                className="confirm-box"
                open={confirmStauts}
                onClose={confirmClose}
            >
                <DialogTitle>알림</DialogTitle>
                <DialogContent>
                    <div className="txt-box">
                        {"$탭이름"} 탭의 즐겨찾기 항목이 모두 <br />
                        삭제되며 복구할 수 없습니다.
                        <br />
                        삭제하시겠습니까?
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub2" onClick={confirmClose}>
                        취소
                    </Button>
                    <Button variant="primary">확인</Button>
                </DialogActions>
                <IconButton className="dialog-close" onClick={confirmClose}>
                    <Icons15 fill="#222 " />
                </IconButton>
            </Dialog>
        </>
    );
};
export default MyBookmarkTable;
