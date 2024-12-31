// necessary set
import React, { useState, useEffect, useRef } from "react";

import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Badge from "~/muiPublish/components/Badge";
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

interface Data {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
    use: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: OcrSearchTable
 * OcrSearchTable
 */
const TaskListTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="task-list-table">
            <div className="between-box">
                <div className="left">
                    <h2>검색 결과</h2>
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
                            label="내 신청 현황만 보기"
                        />
                    </FormGroup>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={48} align="center">
                                번호
                            </TableCell>
                            <TableCell width={1232} align="left">
                                신청 과제명
                            </TableCell>
                            <TableCell width={160} align="center">
                                작성자
                            </TableCell>
                            <TableCell width={160} align="center">
                                등록일
                            </TableCell>
                            <TableCell width={160} align="center">
                                진행 현황
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell width={48} align="center">
                                1
                            </TableCell>
                            <TableCell width={1232} align="left">
                                <p className="is-file">
                                    SOHO 우량고객 이탈 예측 과제
                                </p>
                            </TableCell>
                            <TableCell width={160} align="center">
                                김멀더 (MulderKim)
                            </TableCell>
                            <TableCell width={160} align="center">
                                2024-10-08
                            </TableCell>
                            <TableCell width={160} align="center">
                                <Badge
                                    value="과제 신청"
                                    color="blue"
                                    type="line"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={48} align="center">
                                2
                            </TableCell>
                            <TableCell width={1232} align="left">
                                <p className="is-file">
                                    SOHO 우량고객 이탈 예측 과제
                                </p>
                            </TableCell>
                            <TableCell width={160} align="center">
                                김멀더 (MulderKim)
                            </TableCell>
                            <TableCell width={160} align="center">
                                2024-10-08
                            </TableCell>
                            <TableCell width={160} align="center">
                                <Badge value="미채택" color="red" type="line" />
                            </TableCell>
                        </TableRow>
                        {[1, 2, 3, 4, 5, 6].map((idx) => (
                            <TableRow key={idx}>
                                <TableCell width={48} align="center">
                                    {idx + 2}
                                </TableCell>
                                <TableCell width={1232} align="left">
                                    <a className="is-file ellipsis">
                                        SOHO 우량고객 이탈 예측 과제SOHO
                                        우량고객 이탈 예측 과제SOHOSOHO 우량고객
                                        이탈 예측 과제SOHOSOHO 우량고객 이탈
                                        예측 과제SOHOSOHO 우량고객 이탈 예측
                                        과제SOHOSOHO 우량고객 이탈 예측
                                        과제SOHOSOHO 우량고객 이탈 예측
                                        과제SOHOSOHO 우량고객 이탈 예측
                                        과제SOHOSOHO 우량고객 이탈 예측
                                        과제SOHOSOHO 우량고객 이탈 예측
                                        과제SOHOSOHO
                                    </a>
                                </TableCell>
                                <TableCell width={160} align="center">
                                    김멀더 (MulderKim)
                                </TableCell>
                                <TableCell width={160} align="center">
                                    2024-10-08
                                </TableCell>
                                <TableCell width={160} align="center">
                                    <Badge
                                        value="과제 종료"
                                        color="gray"
                                        type="line"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default TaskListTable;
