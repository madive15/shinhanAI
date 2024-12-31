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
const OcrSearchTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="ocr-search-table">
            <div className="between-box">
                <div className="left">
                    <h2>검증 결과</h2>
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
                            label="검증 미완료만 표시"
                        />
                    </FormGroup>
                    <div className="btn-wrap">
                        <Button variant="small">전체 초기화</Button>
                        <Button variant="small">엑셀 다운</Button>
                    </div>
                </div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={48} align="center">
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            </TableCell>
                            <TableCell width={48} align="center">
                                번호
                            </TableCell>
                            <TableCell width={440} align="left">
                                모델ID
                            </TableCell>
                            <TableCell width={136} align="center">
                                실행일자
                            </TableCell>
                            <TableCell width={440} align="left">
                                문서 파일명
                            </TableCell>
                            <TableCell width={80} align="center">
                                페이지 수
                            </TableCell>
                            <TableCell width={104} align="center">
                                모델 결과
                            </TableCell>
                            <TableCell width={120} align="center">
                                검증 상태
                            </TableCell>
                            <TableCell width={96} align="center">
                                검증자
                            </TableCell>
                            <TableCell width={136} align="center">
                                검증 일시
                            </TableCell>
                            <TableCell width={112} align="center">
                                검증 화면
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                            <TableRow key={idx}>
                                <TableCell width={48} align="center">
                                    <Checkbox
                                        icon={<ChkDefault />}
                                        checkedIcon={<ChkChecked />}
                                    />
                                </TableCell>
                                <TableCell width={48} align="center">
                                    {idx}
                                </TableCell>
                                <TableCell width={440} align="left">
                                    차량미납과태료자동등록
                                </TableCell>
                                <TableCell width={136} align="center">
                                    2024-10-08
                                </TableCell>
                                <TableCell width={440} align="left">
                                    과태료파일_01.tif
                                </TableCell>
                                <TableCell width={80} align="center">
                                    4장
                                </TableCell>
                                <TableCell width={104} align="center">
                                    <Badge
                                        value="성공"
                                        color="green"
                                        size="large"
                                    />
                                </TableCell>
                                <TableCell width={120} align="center">
                                    <span className="complete">검증완료</span>
                                </TableCell>
                                <TableCell width={96} align="center">
                                    이신한
                                </TableCell>
                                <TableCell width={136} align="center">
                                    2024-10-08
                                </TableCell>
                                <TableCell width={112} align="center">
                                    <IconButton className="ico-circle20">
                                        <Search12 />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default OcrSearchTable;
