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
import Tooltip from "@mui/material/Tooltip";

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
    heiTitSearch?: number;
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
        <TableContainer
            className="table-content row-table"
            style={{ "--heiTitSearch": props.heiTitSearch + "px" } as React.CSSProperties}
        >
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">프롬프트 ID</TableCell>
                        <TableCell colSpan={3}>prom000005</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">적용화면(ID)</TableCell>
                        <TableCell colSpan={3}>통합검색 결과 (SCSE0001)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">콘텐츠 입력방식</TableCell>
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
                                    value="JSON"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="JSON"
                                />
                                <FormControlLabel
                                    className="cr-label"
                                    value="DB입력"
                                    control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                    label="DB입력"
                                />
                            </RadioGroup>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">프롬프트 콘텐츠</TableCell>
                        <TableCell colSpan={3}>
                            <div className="text-area required">
                                <textarea name="" id=""></textarea>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">사용 여부</TableCell>
                        <TableCell>
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
                        <TableCell component="th">배치 여부</TableCell>
                        <TableCell>
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
