// necessary set
import React, { useState, useEffect } from "react";

// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
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
 * admin-front: MyModelDetailInfoTable2
 * MyModelDetailInfoTable2
 */
const MyModelDetailInfoTable2: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="box">
            <div className="between-box">
                <div className="left">
                    <h3>모델 설정 정보</h3>
                </div>
            </div>
            <TableContainer className="row-table" component={Paper}>
                <Table>
                    <colgroup>
                        <col style={{ width: "160px" }} />
                        <col />
                        <col style={{ width: "160px" }} />
                        <col />
                        <col style={{ width: "160px" }} />
                        <col />
                    </colgroup>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th">사용모델</TableCell>
                            <TableCell>신용카드</TableCell>
                            <TableCell component="th">가입 구분</TableCell>
                            <TableCell>신규</TableCell>
                            <TableCell component="th">예측 기간</TableCell>
                            <TableCell>6개월</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">고객 요건</TableCell>
                            <TableCell colSpan={5}>
                                거래기간 6개월 이상 / 6개월 수신평잔 100만원
                                이상
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">분류 모델 종류</TableCell>
                            <TableCell>LGBM</TableCell>
                            <TableCell component="th">중요도</TableCell>
                            <TableCell>8:2(시간:성능)</TableCell>
                            <TableCell component="th">관측 기간</TableCell>
                            <TableCell>12개월</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">분할 조건</TableCell>
                            <TableCell>비율 분할</TableCell>
                            <TableCell component="th">학습 형태 분할</TableCell>
                            <TableCell colSpan={3}>
                                7:2:1(학습:검증:테스트)
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default MyModelDetailInfoTable2;
