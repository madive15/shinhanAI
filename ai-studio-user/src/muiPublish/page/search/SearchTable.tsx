// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
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
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
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
 * admin-front: SearchTable
 * SearchTable
 */
const SearchTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [selectOne, setAgeSelectOne] = React.useState("1");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };

    const [radioGroup2, setRadioGroup2] = React.useState("전체");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div className="notice-list-table">
            <div className="search-category">
                <FormControl>
                    <RadioGroup
                        className="filter-radio type2"
                        row
                        aria-labelledby="radio-group"
                        name="group2"
                        value={radioGroup2}
                        onChange={radioGroupChange2}
                    >
                        <FormControlLabel
                            value="전체"
                            control={<Radio />}
                            label="전체"
                        />
                        <FormControlLabel
                            value="신용대출(대면)"
                            control={<Radio />}
                            label="신용대출(대면)"
                        />
                        <FormControlLabel
                            value="신용대출(비대면)"
                            control={<Radio />}
                            label="신용대출(비대면)"
                        />
                        <FormControlLabel
                            value="자동차대출"
                            control={<Radio />}
                            label="자동차대출"
                        />
                        <FormControlLabel
                            value="서민금융"
                            control={<Radio />}
                            label="서민금융"
                        />
                        <FormControlLabel
                            value="담보대출"
                            control={<Radio />}
                            label="담보대출"
                        />
                        <FormControlLabel
                            value="기금재원대출"
                            control={<Radio />}
                            label="기금재원대출"
                        />
                        <FormControlLabel
                            value="가계여신기타대출"
                            control={<Radio />}
                            label="가계여신기타대출"
                        />
                        <FormControlLabel
                            value="신택대출"
                            control={<Radio />}
                            label="신택대출"
                        />
                        <FormControlLabel
                            value="일반자금대출"
                            control={<Radio />}
                            label="일반자금대출"
                        />
                        <FormControlLabel
                            value="전세대출"
                            control={<Radio />}
                            label="전세대출"
                        />
                        <FormControlLabel
                            value="주택담보대출"
                            control={<Radio />}
                            label="주택담보대출"
                        />
                        <FormControlLabel
                            value="특별대환대출"
                            control={<Radio />}
                            label="특별대환대출"
                        />
                    </RadioGroup>
                </FormControl>
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
                            <TableCell width={812} align="left">
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
                                <TableCell width={812} align="left">
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
                            <TableCell width={812} align="left">
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
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
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
                                <TableCell width={812} align="left">
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
                            </TableRow>
                        ))}
                    </TableBody> */}
                    <div className="no-data search">
                        <p>검색 결과가 없습니다.</p>
                    </div>
                </Table>
            </TableContainer>
        </div>
    );
};
export default SearchTable;
