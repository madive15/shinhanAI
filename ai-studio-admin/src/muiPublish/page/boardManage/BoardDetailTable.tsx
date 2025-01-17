// necessary set
import React, { useState, useEffect, useRef } from "react";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { ReactComponent as Download } from "~assets/images/svg/Icons-download.svg";
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
 * admin-front: BoardDetailTable
 */
const BoardDetailTable: React.FC<IPageProps> = (props) => {
    const [modify, setModify] = useState<boolean>(false);
    const modifyOpen = () => {
        setModify(true);
    };
    const modifyClose = () => {
        setModify(false);
    };
    return (
        <>
            <TableContainer className="table-content view-table row-table">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th">작성자</TableCell>
                            <TableCell>김멀더 (MulderKim)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">등록일</TableCell>
                            <TableCell>2024-10-08</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">내용</TableCell>
                            <TableCell>내용이 들어갑니다.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">파일 첨부</TableCell>
                            <TableCell>
                                <div className="btn-root-wrap">
                                    <Button
                                        variant="iconLine"
                                        endIcon={<Download fill="#333" />}
                                    >
                                        버튼 텍스트
                                    </Button>
                                    <Button
                                        variant="iconLine"
                                        endIcon={<Download fill="#333" />}
                                    >
                                        버튼 텍스트
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="board-comment-wrap">
                <div className="comment-top">
                    댓글 <strong>총 {"12"}개</strong>
                </div>
                <ul className="comment-list">
                    <li className="comment-list-item">
                        <div className="comment-item-top">
                            <span className="name">관리자</span>
                            <span className="date">
                                2022-02-22{" "}
                                <span className="time">02:22:22</span>
                            </span>
                        </div>
                        <div className="comment-item">
                            <div className="txt">
                                <p>댓글</p>
                                <p>댓글</p>
                            </div>
                            <div className="btn-wrap">
                                <Button variant="small">삭제</Button>
                                <Button
                                    variant="smallSub1"
                                    onClick={modifyOpen}
                                >
                                    수정
                                </Button>
                            </div>
                        </div>
                        {modify && (
                            <div className="comment-modify">
                                <div className="text-area ">
                                    <textarea name="" id=""></textarea>
                                </div>
                                <div className="btn-wrap">
                                    {/* <Button
                                        variant="sub1"
                                        onClick={modifyClose}
                                    >
                                        취소
                                    </Button> */}
                                    <Button variant="sub2">댓글 수정</Button>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
                <div className="comment-write">
                    <div className="text-area ">
                        <textarea name="" id=""></textarea>
                    </div>
                    <Button variant="sub2">댓글 등록</Button>
                </div>
            </div>
        </>
    );
};

export default BoardDetailTable;
