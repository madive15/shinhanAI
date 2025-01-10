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
 * admin-front: MyTargetDetailTable
 * MyTargetDetailTable
 */
const MyTargetDetailTable: React.FC<IPageProps> = (props) => {
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
                    <h2>신청 정보</h2>
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
                            <TableCell component="th">타겟명</TableCell>
                            <TableCell colSpan={5}>
                                <div className="td-flex between">
                                    <span>
                                        타겟명 노출 (유저가 생성한 타겟 추출
                                        조건명, 또는 프리빌트 명)
                                    </span>
                                    <button type="button" className="txt-btn">
                                        재추출
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">설명</TableCell>
                            <TableCell colSpan={5}>
                                타겟 설명 노출 (유저가 생성한 설명, 또는
                                프리빌트 간략 설명)
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">대상</TableCell>
                            <TableCell>개인</TableCell>
                            <TableCell component="th">구분</TableCell>
                            <TableCell>직접추출</TableCell>
                            <TableCell component="th">신청번호</TableCell>
                            <TableCell>T000001</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">추출 요청자</TableCell>
                            <TableCell>홍길동</TableCell>
                            <TableCell component="th">추출일</TableCell>
                            <TableCell>2024-10-08</TableCell>
                            <TableCell component="th">상태</TableCell>
                            <TableCell>생성 완료</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="between-box">
                <div className="right">
                    <div className="count">
                        <span>조건이 적용된 타겟 수: </span>
                        <em>총 12건</em>
                    </div>
                    <div className="btn-wrap">
                        <Button variant="small" disabled>
                            엑셀 다운로드
                        </Button>
                        <Button variant="small">LMS 대량발송</Button>
                        <Button variant="small">영업점 자체 마케팅</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyTargetDetailTable;
