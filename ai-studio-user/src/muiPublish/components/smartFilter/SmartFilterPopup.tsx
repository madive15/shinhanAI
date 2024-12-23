// necessary set
import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";

// need content
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Category from "~/muiPublish/components/category/Category";
import Hash from "~/muiPublish/components/Hash";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

// need style
import "~/muiPublish/components/smartFilter/smartFilter.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    popupStauts: boolean;
    setPopupStauts: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: SmartFilterPopup
 * SmartFilterPopup
 * 스마트 필터 팝업
 *
 */
const SmartFilterPopup: React.FC<IPageProps> = (props) => {
    const popupClose = () => {
        props.setPopupStauts(false);
    };

    const [radioGroup, setRadioGroup] = React.useState("개인");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };

    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    return (
        <Dialog className="layer-box x-large" open={props.popupStauts} onClose={popupClose}>
            <DialogTitle>{"스마트 필터"}</DialogTitle>
            <DialogContent>
                <TableContainer className="row-table" component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th">검색어 추가</TableCell>
                                <TableCell colSpan={3}>
                                    <div className="input-area">
                                        <TextField
                                            className="input-field"
                                            id="text1"
                                            placeholder="추가할 검색어를 입력해주세요."
                                            fullWidth
                                        />
                                        {/* <p className="positive-ico-txt">체크 완료</p> */}
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">타겟 구분</TableCell>
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
                                            value="개인"
                                            control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                            label="개인"
                                        />
                                        <FormControlLabel
                                            className="cr-label"
                                            value="기업"
                                            control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                            label="기업"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">카테고리</TableCell>
                                <TableCell colSpan={3}>
                                    <div className="select-group">
                                        <FormControl fullWidth>
                                            <Select
                                                className="select-box"
                                                value={ageSelect}
                                                onChange={selectChange}
                                                IconComponent={Arrow}
                                                displayEmpty
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class",
                                                    },
                                                }}
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
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class",
                                                    },
                                                }}
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
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class",
                                                    },
                                                }}
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
                                <TableCell component="th">포함 고객 필터 조건</TableCell>
                                <TableCell colSpan={3}>
                                    {" "}
                                    <FormGroup row className="chk-group">
                                        <FormControlLabel
                                            control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                                            label="만나이(연령대)"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                                            label="직업 구분"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                                            label="노란우산 공제보유 여부"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                                            label="땡겨요 적금 가입 여부"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                                            label="수신 유동성 최근 3개월 평잔"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                                            label="해당 월 SOL 접속 유무"
                                        />
                                    </FormGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">태그</TableCell>
                                <TableCell colSpan={3}>
                                    <Category />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="no-space" colSpan={4}>
                                    <div className="smart-filter smart-filter-popup">
                                        <div className="smart-box">
                                            <div className="smart-poup-tit">선택항목</div>
                                            <div className="hash-wrap smart-filer-view open">
                                                <div className="filer-box">
                                                    <Hash value="개인" type="check" />
                                                    <Hash value="상품 > 퇴직연금 > IRP" type="check" />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                    <Hash value="재유입" del={true} />
                                                </div>
                                                <div className="btn-box">
                                                    <Button variant="small">전체삭제</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button variant="sub1" onClick={popupClose}>
                    적용 취소
                </Button>
                <Button variant="primary">선택항목 적용</Button>
            </DialogActions>
            <IconButton className="dialog-close" onClick={popupClose}>
                <Icons15 fill="#222 " />
            </IconButton>
        </Dialog>
    );
};

export default SmartFilterPopup;
