// necessary set
import React, { useState, useEffect } from "react";

import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Badge from "~/muiPublish/components/Badge";
import Hash from "~/muiPublish/components/Hash";
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
 * admin-front: SearchTable2
 * SearchTable2
 */
const SearchTable2: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [selectOne, setAgeSelectOne] = React.useState("1");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div className="notice-list-table">
            <div className="between-box">
                <div className="left">
                    <h3>검색 결과</h3>
                    <span className="sum">총 00건</span>
                </div>
                <div className="right"></div>
            </div>
            <TableContainer className="table-content">
                <Table className="table-defult-style">
                    <TableHead>
                        <TableRow>
                            <TableCell width={48} align="center">
                                번호
                            </TableCell>
                            <TableCell width={80} align="center">
                                분류
                            </TableCell>
                            <TableCell width={320} align="center">
                                프리빌트명
                            </TableCell>
                            <TableCell width={692} align="left">
                                상세설명
                            </TableCell>
                            <TableCell width={260} align="center">
                                태그
                            </TableCell>
                            <TableCell width={120} align="center">
                                상세보기
                            </TableCell>
                            <TableCell width={120} align="center">
                                타겟추출
                            </TableCell>
                            <TableCell width={120} align="center">
                                모델생성
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                            <TableRow key={idx}>
                                <TableCell width={48} align="center">
                                    {idx + 1}
                                </TableCell>
                                <TableCell width={80} align="center">
                                    <Badge value="퇴직연금" color="orange" />
                                </TableCell>
                                <TableCell width={320} align="left">
                                    <strong>프리빌트 항목 명</strong>
                                </TableCell>
                                <TableCell width={692} align="left">
                                    <p className="ellipsis">
                                        프리빌트된 항목에 대한 설명
                                    </p>
                                </TableCell>
                                <TableCell width={260} align="center">
                                    <div className="hash-wrap">
                                        <Hash
                                            value="#해시태그해시태그해시태그해시태그해시태그해시태그"
                                            type="type2"
                                        />
                                        <Hash value="#해시태그" type="type2" />
                                        <Hash value="#해시태그" type="type2" />
                                        <Hash value="#해시태그" type="type2" />
                                        <Hash value="#해시태그" type="type2" />
                                    </div>
                                </TableCell>
                                <TableCell width={120} align="center">
                                    <IconButton className="ico-circle20">
                                        <Search12 />
                                    </IconButton>
                                </TableCell>
                                <TableCell width={120} align="center">
                                    <Button variant="small">타겟 추출</Button>
                                </TableCell>
                                <TableCell width={120} align="center">
                                    <Button variant="small">모델 생성</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default SearchTable2;
