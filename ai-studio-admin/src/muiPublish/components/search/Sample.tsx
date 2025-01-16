// necessary set
import React from "react";
import { useState } from "react";
// need content
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import FormGroup from "@mui/material/FormGroup";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";
// need style

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
 * admin-front: SearchTaskRequest
 * 상품메타관리 Search
 */
const SearchTaskRequest: React.FC<IPageProps> = (props) => {
    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };
    const [radioGroup, setRadioGroup] = React.useState("female");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };
    const [startDate, setStartDate] = useState();
    return (
        <div className="search-contnet">
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">기간 조회</span>
                    <div className="item-box ">
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
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">관리유형</span>
                    <div className="item-box">
                        <FormControl>
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
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="Female"
                                />
                                <FormControlLabel
                                    className="cr-label"
                                    value="male"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="Male"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">조회항목</span>
                    <div className="item-box">
                        <div className="input-group">
                            <Select
                                className="select-box x-small"
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
                                <MenuItem value="">전체</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>TwentyTwenty</MenuItem>
                            </Select>
                            <TextField
                                className="input-field"
                                placeholder="검색할 과제를 입력하세요"
                            />
                        </div>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">조회항목</span>
                    <div className="item-box">
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
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">부서명</span>
                    <div className="item-box">
                        <div className="text-area required">
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">모델 ID</span>
                    <div className="item-box select-long">
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
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="search-item-box full">
                <div className="search-item">
                    <span className="tit">진행 상태</span>
                    <FormGroup row className="chk-group">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Label"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Label"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Label"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Label"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Label"
                        />
                        <FormControlLabel
                            required
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Required"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Disabled"
                        />
                    </FormGroup>
                </div>
            </div>
            <div className="search-item-box full">
                <div className="search-item">
                    <span className="tit">진행 상태</span>
                    <div className="text-area required">
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
            </div>
            <div className="search-item-box full">
                <div className="search-item">
                    <span className="tit">상품 분류</span>
                    <div className="select-group">
                        <Select
                            className="select-box"
                            value={ageSelect}
                            onChange={selectChange}
                            IconComponent={Arrow}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                대분류
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                        <Select
                            className="select-box"
                            value={ageSelect}
                            onChange={selectChange}
                            IconComponent={Arrow}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                중분류
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                        <Select
                            className="select-box"
                            value={ageSelect}
                            onChange={selectChange}
                            IconComponent={Arrow}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                소분류
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                        <Select
                            className="select-box"
                            value={ageSelect}
                            onChange={selectChange}
                            IconComponent={Arrow}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                세분류
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="search-item-box full">
                <div className="search-item">
                    <span className="tit">상품 분류</span>
                    <div className="date-picker-area">
                        <DatePicker
                            selected={startDate}
                            onChange={(date: any) => setStartDate(date)}
                            // showYearDropdown
                            // showMonthDropdown
                            dropdownMode="select"
                            dateFormat="yyyy-MM-dd"
                            // isClearable={true}
                            locale={ko}
                            placeholderText="기간을 선택해주세요"
                        />
                        <div className="date-month-btn">
                            <button type="button" className="active">
                                3개월
                            </button>
                            <button type="button">6개월</button>
                            <button type="button">1년</button>
                            <button type="button">3년</button>
                            <button type="button">5년</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">상품 분류</span>
                    <div className="item-box select-long">
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
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">상품 분류</span>
                    <div className="item-box select-long">
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
                            <MenuItem value={20}>TwentyTwenty</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchTaskRequest;
