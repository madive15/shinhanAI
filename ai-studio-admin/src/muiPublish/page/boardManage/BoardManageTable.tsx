// necessary set
import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import Switch from "@mui/material/Switch";

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
 * admin-front: BoardManageTable
 */
const BoardManageTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <TableContainer
            className="table-content"
            style={
                {
                    "--heiTitSearch": props.heiTitSearch + "px",
                } as React.CSSProperties
            }
        >
            <Table
                stickyHeader
                className="table-defult-style"
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        {/* <TableCell width={38} align="center">
                            <Checkbox
                                icon={<ChkDefault />}
                                checkedIcon={<ChkChecked />}
                            />
                        </TableCell> */}
                        <TableCell width={48} align="center">
                            번호
                        </TableCell>
                        <TableCell width={658} align="center">
                            게시글 제목
                        </TableCell>
                        <TableCell width={144} align="center">
                            작성자
                        </TableCell>
                        <TableCell width={144} align="center">
                            작성일
                        </TableCell>
                        <TableCell width={144} align="center">
                            조회수
                        </TableCell>
                        <TableCell width={86} align="center">
                            삭제 유무
                        </TableCell>
                        <TableCell width={320} align="center">
                            게시글 관리
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                        <TableRow key={idx}>
                            {/* <TableCell width={38} align="center">
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            </TableCell> */}
                            <TableCell width={48} align="center">
                                {idx}
                            </TableCell>
                            <TableCell width={658} align="left">
                                <p className="ellipsis">게시글 제목</p>
                            </TableCell>
                            <TableCell width={144} align="center">
                                김멀더 (MulderKim)
                            </TableCell>
                            <TableCell width={144} align="center">
                                2024-10-08
                            </TableCell>
                            <TableCell width={144} align="center">
                                129999
                            </TableCell>
                            <TableCell width={86} align="center">
                                Y
                            </TableCell>
                            <TableCell width={320} align="center">
                                <div className="btn-root-wrap center">
                                    <Button variant="small">보기</Button>
                                    <Button variant="small">수정</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BoardManageTable;
