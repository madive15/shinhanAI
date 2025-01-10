// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
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
 * admin-front: MyModelListTable
 * MyModelListTable
 */
const MyModelListTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [selectOne, setAgeSelectOne] = React.useState("10");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    const [confirmStauts, setConfirmStauts] = React.useState(false);
    const confirmOpen = () => {
        setConfirmStauts(true);
    };
    const confirmClose = () => {
        setConfirmStauts(false);
    };
    return (
        <>
            <div className="between-box">
                <div className="left">
                    <h2>모델 생성 내역</h2>
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
                            label="영업점에서 추출한 내역 보기"
                        />
                    </FormGroup>
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
                            <TableCell width={54} align="center">
                                대상
                            </TableCell>
                            <TableCell width={160} align="center">
                                사용 모델
                            </TableCell>
                            <TableCell width={746} align="left">
                                모델명
                            </TableCell>
                            <TableCell width={160} align="center">
                                상태
                            </TableCell>
                            <TableCell width={160} align="center">
                                타겟추출
                            </TableCell>
                            <TableCell width={160} align="center">
                                생성 요청자
                            </TableCell>
                            <TableCell width={160} align="center">
                                생성 요청일
                            </TableCell>
                            <TableCell width={160} align="center">
                                재 생성 신청
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell width={54} align="center">
                                대상
                            </TableCell>
                            <TableCell width={160} align="center">
                                사용 모델
                            </TableCell>
                            <TableCell width={746} align="left">
                                <a className="ellipsis">
                                    이용자가 설정한 모델명
                                </a>
                            </TableCell>
                            <TableCell width={160} align="center">
                                상태
                            </TableCell>
                            <TableCell width={160} align="center">
                                <button type="button" className="txt-btn">
                                    타겟추출
                                </button>
                            </TableCell>
                            <TableCell width={160} align="center">
                                박흥부
                            </TableCell>
                            <TableCell width={160} align="center">
                                2024-10-08
                            </TableCell>
                            <TableCell width={160} align="center">
                                -
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={54} align="center">
                                대상
                            </TableCell>
                            <TableCell width={160} align="center">
                                사용 모델
                            </TableCell>
                            <TableCell width={746} align="left">
                                <a className="ellipsis">
                                    이용자가 설정한 모델명
                                </a>
                            </TableCell>
                            <TableCell width={160} align="center">
                                상태
                            </TableCell>
                            <TableCell width={160} align="center">
                                <button type="button" className="txt-btn">
                                    타겟추출
                                </button>
                            </TableCell>
                            <TableCell width={160} align="center">
                                박흥부
                            </TableCell>
                            <TableCell width={160} align="center">
                                2024-10-08
                            </TableCell>
                            <TableCell width={160} align="center">
                                -
                            </TableCell>
                        </TableRow>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                            <TableRow key={idx}>
                                <TableCell width={54} align="center">
                                    개인
                                </TableCell>
                                <TableCell width={160} align="center">
                                    새희망홀씨대출
                                </TableCell>
                                <TableCell width={746} align="left">
                                    <a className="ellipsis">
                                        이용자가 설정한 모델명
                                    </a>
                                </TableCell>
                                <TableCell width={160} align="center">
                                    상태
                                </TableCell>
                                <TableCell width={160} align="center">
                                    <button
                                        type="button"
                                        className="txt-btn"
                                        disabled
                                    >
                                        불가
                                    </button>
                                </TableCell>
                                <TableCell width={160} align="center">
                                    임꺽정
                                </TableCell>
                                <TableCell width={160} align="center">
                                    2024-10-08
                                </TableCell>
                                <TableCell width={160} align="center">
                                    <Button
                                        variant="small"
                                        onClick={confirmOpen}
                                    >
                                        재 생성 신청
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="pagination-wrap">
                <div className="pagination">
                    <button type="button" className="first" disabled>
                        처음으로
                    </button>
                    <button type="button" className="prev" disabled>
                        이전
                    </button>
                    <button type="button" className="active">
                        1
                    </button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button">4</button>
                    <button type="button">5</button>
                    <button type="button">6</button>
                    <button type="button">7</button>
                    <button type="button">8</button>
                    <button type="button">9</button>
                    <button type="button">10</button>
                    <button type="button" className="next">
                        다음
                    </button>
                    <button type="button" className="last">
                        맨끝으로
                    </button>
                </div>
                <div className="page">
                    <div className="now">1</div>
                    <span>/</span>
                    <span className="total">17</span>
                </div>
            </div>
            <Dialog
                className="confirm-box"
                open={confirmStauts}
                onClose={confirmClose}
            >
                <DialogTitle>알림</DialogTitle>
                <DialogContent>
                    <div className="txt-box">
                        선택하신 항목의 모델을 다시 생성 신청 하시겠습니까?
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
export default MyModelListTable;
