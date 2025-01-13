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
 * admin-front: MyModelDetailInfoTable
 * MyModelDetailInfoTable
 */
const MyModelDetailInfoTable: React.FC<IPageProps> = (props) => {
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
                    <h3>신청 정보</h3>
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
                            <TableCell component="th">모델명</TableCell>
                            <TableCell colSpan={5}>
                                <div className="td-flex between">
                                    <span>
                                        모델명 노출 (유저가 생성한 모델 조건명,
                                        또는 유저가 설정한 이름)
                                    </span>
                                    <button type="button" className="txt-btn">
                                        재 생성 신청
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">설명</TableCell>
                            <TableCell colSpan={5}>
                                모델 설명 노출 (유저가 생성한 설명, 또는 모델
                                설명)
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">대상</TableCell>
                            <TableCell>개인</TableCell>
                            <TableCell component="th">신청번호</TableCell>
                            <TableCell>N000001</TableCell>
                            <TableCell component="th">생성요청자</TableCell>
                            <TableCell>홍길동</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">생성 요청일</TableCell>
                            <TableCell>2024-12-11</TableCell>
                            <TableCell component="th">승인일</TableCell>
                            <TableCell>2024-12-11</TableCell>
                            <TableCell component="th">생성 완료일</TableCell>
                            <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">상태</TableCell>
                            <TableCell>생성중</TableCell>
                            <TableCell component="th">타겟 추출</TableCell>
                            <TableCell colSpan={3}>
                                <button type="button" className="txt-btn">
                                    타겟 추출
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default MyModelDetailInfoTable;
