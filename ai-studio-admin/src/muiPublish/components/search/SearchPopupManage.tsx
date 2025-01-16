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

    const [startDate, setStartDate] = useState();

    const [radioGroup, setRadioGroup] = React.useState("전체");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };
    return (
        <>
            <div className="search-contnet">
                <div className="search-item-box full">
                    <div className="search-item">
                        <span className="tit">기간 조회</span>
                        <div className="date-picker-area">
                            <DatePicker
                                selected={startDate}
                                onChange={(date: any) => setStartDate(date)}
                                dropdownMode="select"
                                dateFormat="yyyy-MM-dd"
                                locale={ko}
                                placeholderText="기간을 선택해주세요"
                            />
                            <div className="date-month-btn">
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="3m" />
                                    <label htmlFor="3m">3개월</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="6m" />
                                    <label htmlFor="6m">6개월</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="1y" />
                                    <label htmlFor="1y">1년</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="3y" />
                                    <label htmlFor="3y">3년</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="5y" />
                                    <label htmlFor="5y">5년</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-item-box full">
                    <div className="search-item">
                        <span className="tit">팝업 검색</span>
                        <div className="item-box ">
                            <TextField
                                className="input-field"
                                placeholder="검색어를 입력해주세요."
                            />
                        </div>
                    </div>
                    <div className="search-item">
                        <span className="tit">과제 검색</span>
                        <div className="item-box ">
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
                                        value="전체"
                                        control={
                                            <Radio
                                                checkedIcon={<RadioChecked />}
                                                icon={<RadioDefault />}
                                            />
                                        }
                                        label="전체"
                                    />
                                    <FormControlLabel
                                        value="노출"
                                        control={
                                            <Radio
                                                checkedIcon={<RadioChecked />}
                                                icon={<RadioDefault />}
                                            />
                                        }
                                        label="노출"
                                    />
                                    <FormControlLabel
                                        value="비노출"
                                        control={
                                            <Radio
                                                checkedIcon={<RadioChecked />}
                                                icon={<RadioDefault />}
                                            />
                                        }
                                        label="비노출"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchTaskRequest;
