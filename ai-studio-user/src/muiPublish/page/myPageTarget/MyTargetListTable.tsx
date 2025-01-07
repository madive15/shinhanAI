// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
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
 * admin-front: MyTargetListTable
 * MyTargetListTable
 */
const MyTargetListTable: React.FC<IPageProps> = (props) => {
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

    return (
        <div className="task-list-table">
            <div className="between-box">
                <div className="left">
                    <h2>타겟 추출 내역</h2>
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
                            <TableCell width={120} align="center">
                                구분
                            </TableCell>
                            <TableCell width={386} align="left">
                                타겟명
                            </TableCell>
                            <TableCell width={120} align="center">
                                상태
                            </TableCell>
                            <TableCell width={240} align="center">
                                타겟수
                            </TableCell>
                            <TableCell width={160} align="center">
                                엑셀
                            </TableCell>
                            <TableCell width={120} align="center">
                                LMS 발송
                            </TableCell>
                            <TableCell width={120} align="center">
                                자체 마케팅
                            </TableCell>
                            <TableCell width={120} align="center">
                                추출 요청자
                            </TableCell>
                            <TableCell width={160} align="center">
                                추출일
                            </TableCell>
                            <TableCell width={160} align="center">
                                재추출
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell width={54} align="center">
                                개인
                            </TableCell>
                            <TableCell width={120} align="center">
                                직접추출
                            </TableCell>
                            <TableCell width={386} align="left">
                                <p className="ellipsis">
                                    유저가 생성한 타겟 추출 조건명
                                </p>
                            </TableCell>
                            <TableCell width={120} align="center">
                                추출중
                            </TableCell>
                            <TableCell width={240} align="center">
                                1,202,312
                            </TableCell>
                            <TableCell width={160} align="center">
                                <button type="button" className="txt-btn">
                                    다운로드
                                </button>
                            </TableCell>
                            <TableCell width={120} align="center">
                                -
                            </TableCell>
                            <TableCell width={120} align="center">
                                -
                            </TableCell>
                            <TableCell width={120} align="center">
                                홍길동
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
                                개인
                            </TableCell>
                            <TableCell width={120} align="center">
                                직접추출
                            </TableCell>
                            <TableCell width={386} align="left">
                                <p className="ellipsis">
                                    유저가 생성한 타겟 추출 조건명
                                </p>
                            </TableCell>
                            <TableCell width={120} align="center">
                                추출중
                            </TableCell>
                            <TableCell width={240} align="center">
                                1,202,312
                            </TableCell>
                            <TableCell width={160} align="center">
                                <button
                                    type="button"
                                    className="txt-btn"
                                    disabled
                                >
                                    다운로드 불가
                                </button>
                            </TableCell>
                            <TableCell width={120} align="center">
                                -
                            </TableCell>
                            <TableCell width={120} align="center">
                                -
                            </TableCell>
                            <TableCell width={120} align="center">
                                홍길동
                            </TableCell>
                            <TableCell width={160} align="center">
                                2024-10-08
                            </TableCell>
                            <TableCell width={160} align="center">
                                -
                            </TableCell>
                        </TableRow>
                        {[1, 2, 3, 4, 5, 6].map((idx) => (
                            <TableRow key={idx}>
                                <TableCell width={54} align="center">
                                    개인
                                </TableCell>
                                <TableCell width={120} align="center">
                                    프리빌트
                                </TableCell>
                                <TableCell width={386} align="left">
                                    <p className="ellipsis">
                                        프리빌트된 타켓 추출 조건명
                                    </p>
                                </TableCell>
                                <TableCell width={120} align="center">
                                    상태
                                </TableCell>
                                <TableCell width={240} align="center">
                                    타겟수
                                </TableCell>
                                <TableCell width={160} align="center">
                                    엑셀
                                </TableCell>
                                <TableCell width={120} align="center">
                                    LMS 발송
                                </TableCell>
                                <TableCell width={120} align="center">
                                    자체 마케팅
                                </TableCell>
                                <TableCell width={120} align="center">
                                    추출 요청자
                                </TableCell>
                                <TableCell width={160} align="center">
                                    추출일
                                </TableCell>
                                <TableCell width={160} align="center">
                                    재추출
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default MyTargetListTable;
