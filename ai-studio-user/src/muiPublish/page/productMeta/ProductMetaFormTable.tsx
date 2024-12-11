// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// need content

// import Cardlist from "~/publish/components/Cardlist";

// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: ProductMeta
 * 상품메타관리 page
 */
const ProductMetaFormTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const [radioGroup, setRadioGroup] = React.useState("female");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };

    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    return (
        <TableContainer className="" component={Paper}>
            <div className="table-title">
                <div className="tit-sum">
                    <h2>{props.pageName}</h2>
                    <span className="sum">총 00건</span>
                </div>
            </div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">상품 분류</TableCell>
                        <TableCell colSpan={3}>
                            <RadioGroup
                                className="radio-group"
                                row
                                aria-labelledby="radio-group"
                                name="group1"
                                value={radioGroup}
                                onChange={radioGroupChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    className="cr-label"
                                    value="male"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="Male"
                                />
                            </RadioGroup>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상위 분류</TableCell>
                        <TableCell colSpan={3}>
                            <div className="select-group">
                                <FormControl fullWidth>
                                    <Select
                                        className="select-box"
                                        value={ageSelect}
                                        onChange={selectChange}
                                        IconComponent={Arrow}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>
                                            전체
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <Select
                                        className="select-box"
                                        value={ageSelect}
                                        onChange={selectChange}
                                        IconComponent={Arrow}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>
                                            전체
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <Select
                                        className="select-box"
                                        value={ageSelect}
                                        onChange={selectChange}
                                        IconComponent={Arrow}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>
                                            전체
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상품 코드</TableCell>
                        <TableCell colSpan={3}>
                            <div className="text-area required">
                                <textarea name="" id=""></textarea>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상품 명</TableCell>
                        <TableCell colSpan={3}>
                            <TextField fullWidth placeholder="상품 명 입력" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">사용 여부</TableCell>
                        <TableCell colSpan={3}>
                            <RadioGroup
                                className="radio-group"
                                row
                                aria-labelledby="radio-group"
                                name="group1"
                                value={radioGroup}
                                onChange={radioGroupChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    className="cr-label"
                                    value="male"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="Male"
                                />
                            </RadioGroup>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">전략 상품 여부</TableCell>
                        <TableCell colSpan={3}>
                            <RadioGroup
                                className="radio-group"
                                row
                                aria-labelledby="radio-group"
                                name="group1"
                                value={radioGroup}
                                onChange={radioGroupChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    className="cr-label"
                                    value="male"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="Male"
                                />
                            </RadioGroup>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">등록 일시</TableCell>
                        <TableCell>2024-05-06 10:10:05</TableCell>
                        <TableCell component="th">등록자</TableCell>
                        <TableCell>김멀더 (MulderKim)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">수정 일시</TableCell>
                        <TableCell>2024-05-06 10:10:05</TableCell>
                        <TableCell component="th">수정자</TableCell>
                        <TableCell>김멀더 (MulderKim)</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductMetaFormTable;
