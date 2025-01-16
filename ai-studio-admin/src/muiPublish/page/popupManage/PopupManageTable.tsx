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
 * admin-front: PopupManageTable
 */
const PopupManageTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    const data = "/images/temp-img-box.png";
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
                        <TableCell width={38} align="center">
                            <Checkbox
                                icon={<ChkDefault />}
                                checkedIcon={<ChkChecked />}
                            />
                        </TableCell>
                        <TableCell width={810} align="center">
                            이미지
                        </TableCell>
                        <TableCell width={144} align="center">
                            팝업 노출 페이지
                        </TableCell>
                        <TableCell width={144} align="center">
                            노출기간
                        </TableCell>
                        <TableCell width={144} align="center">
                            등록일/수정일
                        </TableCell>
                        <TableCell width={144} align="center">
                            수정
                        </TableCell>
                        <TableCell width={120} align="center">
                            노출 여부
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                        <TableRow key={idx}>
                            <TableCell width={38} align="center">
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            </TableCell>
                            <TableCell width={810} align="center">
                                <div className="pop-img-wrap">
                                    <div className="img-box">
                                        <img src={data} alt="임시 이미지" />
                                    </div>
                                    <div className="img-info-txt">
                                        <p>팝업명 : {"팝업명 노출"}</p>
                                        <p>용량 : {"없음"}</p>
                                        <p>형식 : {"없음"}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell width={144} align="center">
                                /asslgrment/1
                            </TableCell>
                            <TableCell width={144} align="center">
                                {"시작일"} / <br />
                                {"종료일"}
                            </TableCell>
                            <TableCell width={144} align="center">
                                {"등록일"} / <br />
                                {"수정일"}
                            </TableCell>
                            <TableCell width={144} align="center">
                                <Button variant="small">수정</Button>
                            </TableCell>
                            <TableCell width={120} align="center">
                                <Switch className="switch-btn" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PopupManageTable;
