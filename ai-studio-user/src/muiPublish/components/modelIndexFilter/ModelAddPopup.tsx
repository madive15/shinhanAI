// necessary set
import React from "react";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";

// need content
import Hash from "~/muiPublish/components/Hash";

// need style

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    popupStauts: boolean;
    popupClose: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: ModelAddPopup
 * ModelAddPopup page
 * 모델 추가 팝업
 */
const ModelAddPopup: React.FC<IPageProps> = (props) => {
    const popupClose = () => {
        props.popupClose(false);
    };

    return (
        <>
            <Dialog
                className="layer-box large"
                open={props.popupStauts}
                onClose={popupClose}
            >
                <DialogTitle>{"적금"}</DialogTitle>
                <DialogContent>
                    <div className="model-add-tit">
                        적금 신규 가입 예측 모델
                    </div>
                    <div className="hash-wrap">
                        <Hash value="#TAG" type="type2" />
                        <Hash value="#TAG" type="type2" />
                        <Hash value="#TAG" type="type2" />
                        <Hash value="+5" type="type2 bg" />
                    </div>
                    <div className="model-sum-tit">
                        총타겟수
                        <span className="num"> 27,345,479</span>
                    </div>
                    <TableContainer
                        className="table-content"
                        sx={{ maxHeight: 410, scrollbarWidth: "thin" }}
                    >
                        <Table
                            stickyHeader
                            className="table-defult-style"
                            aria-label="모델추가 리스트"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell width={48} align="center">
                                        <Checkbox
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                        />
                                    </TableCell>
                                    <TableCell width={200} align="center">
                                        등급값
                                    </TableCell>
                                    <TableCell width={200} align="center">
                                        타겟 수
                                    </TableCell>
                                    <TableCell width={200} align="center">
                                        비율
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                                <TableRow hover sx={{ cursor: "pointer" }}>
                                    <TableCell align="center">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<ChkDefault />}
                                            checkedIcon={<ChkChecked />}
                                            // checked={}
                                            // onChange={""}
                                        />
                                    </TableCell>
                                    <TableCell align="center">1등급</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                    <TableCell align="center">0.1</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub2" onClick={popupClose}>
                        닫기
                    </Button>
                    <Button variant="primary">적용</Button>
                </DialogActions>
                <IconButton className="dialog-close" onClick={popupClose}>
                    <Icons15 fill="#222 " />
                </IconButton>
            </Dialog>
        </>
    );
};

export default ModelAddPopup;
