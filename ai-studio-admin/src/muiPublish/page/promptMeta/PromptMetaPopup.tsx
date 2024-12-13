// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";

import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";

// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    popupStauts: boolean;
    setpopupStauts: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: ProductMeta
 * 상품메타관리 page
 */
const ProductMetaPopup: React.FC<IPageProps> = (props) => {
    const popupClose = () => {
        props.setpopupStauts(false);
    };

    const [radioGroup, setRadioGroup] = React.useState("female");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };

    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    const tooptipText = (
        <div>
            <strong>타이틀</strong>
            <br />
            툴팁 작업 예정 툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업
            예정툴팁 작업 예정툴팁 작업 예정.
        </div>
    );

    const tooptipText2 = (
        <div>
            <strong>타이틀</strong>
            <br />
            툴팁 작업 예정 툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업
            예정툴팁 작업 예정툴팁 작업 예정.
        </div>
    );

    return (
        <Dialog className="layer-box " open={props.popupStauts} onClose={popupClose}>
            <DialogTitle>{"상품 메타 등록"}</DialogTitle>
            <DialogContent>
                <TableContainer className="table-content row-table">
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
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class required",
                                                    },
                                                }}
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
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class required",
                                                    },
                                                }}
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
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class required",
                                                    },
                                                }}
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
                                    <TextField className="input-field required" fullWidth placeholder="상품 코드" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">
                                    상품 명
                                    <Tooltip
                                        className="tooltip"
                                        disableFocusListener
                                        disableTouchListener
                                        title={tooptipText}
                                        placement="right"
                                    >
                                        <i className="ico-text">?</i>
                                    </Tooltip>
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <TextField className="input-field required" fullWidth placeholder="상품 명 입력" />
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
                                <TableCell component="th">
                                    전략 상품 여부
                                    <Tooltip
                                        className="tooltip"
                                        disableFocusListener
                                        disableTouchListener
                                        title={tooptipText2}
                                        placement="right"
                                    >
                                        <i className="ico-text">?</i>
                                    </Tooltip>
                                </TableCell>
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
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button variant="sub2" onClick={popupClose}>
                    등록취소
                </Button>
                <Button variant="primary">상품메타 등록</Button>
            </DialogActions>
            <IconButton className="dialog-close" onClick={popupClose}>
                <Icons15 fill="#222 " />
            </IconButton>
        </Dialog>
    );
};

export default ProductMetaPopup;
