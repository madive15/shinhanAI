// necessary set
import React, { useState } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
// need content
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
// need style

// Props type
export interface IPageProps {
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: OcrSearch
 * OcrSearch
 * ocr
 */
const OcrSearch: React.FC<IPageProps> = (props) => {
    const [selectOne, setAgeSelectOne] = React.useState("1");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };
    const [selectTwo, setAgeSelectTwo] = React.useState("1");
    const selectTwoChange = (event: SelectChangeEvent) => {
        setAgeSelectTwo(event.target.value as string);
    };
    const [selectThree, setAgeSelectThree] = React.useState("1");
    const selectThreeChange = (event: SelectChangeEvent) => {
        setAgeSelectThree(event.target.value as string);
    };

    const [dateRange, setDateRange] = useState([null, null]);
    const [rangeStartDate, rangeEndDate]: any = dateRange;
    return (
        <div className="search-contnet">
            <h2>OCR 검증 결과 조회</h2>
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">기간</span>
                    <div className="date-picker-area">
                        <div className="picker-area">
                            <DatePicker
                                selectsRange={true}
                                startDate={rangeStartDate}
                                endDate={rangeEndDate}
                                onChange={(update: any) => {
                                    setDateRange(update);
                                }}
                                // isClearable={true}
                                dateFormat="yyyy-MM-dd"
                                locale={ko}
                            />
                        </div>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">과제명</span>
                    <div className="search-box">
                        <Select
                            className="select-box"
                            value={selectOne}
                            onChange={selectOneChange}
                            IconComponent={Arrow}
                            displayEmpty
                            MenuProps={{
                                classes: {
                                    paper: "select-option-class",
                                },
                            }}
                        >
                            <MenuItem value={1}>
                                차량미납과태료자동등록
                            </MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">검증 결과</span>
                    <div className="search-box">
                        <Select
                            className="select-box"
                            value={selectTwo}
                            onChange={selectTwoChange}
                            IconComponent={Arrow}
                            displayEmpty
                            MenuProps={{
                                classes: {
                                    paper: "select-option-class",
                                },
                            }}
                        >
                            <MenuItem value={1}>전체</MenuItem>
                            <MenuItem value={2}>성공</MenuItem>
                            <MenuItem value={3}>실패</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">검증 상태</span>
                    <div className="search-box">
                        <Select
                            className="select-box"
                            value={selectThree}
                            onChange={selectThreeChange}
                            IconComponent={Arrow}
                            displayEmpty
                            MenuProps={{
                                classes: {
                                    paper: "select-option-class",
                                },
                            }}
                        >
                            <MenuItem value={1}>전체</MenuItem>
                            <MenuItem value={2}>검증 완료</MenuItem>
                            <MenuItem value={3}>검증 미완료</MenuItem>
                            <MenuItem value={3}>검증 진행중</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">파일명</span>
                    <div className="input-area">
                        <TextField className="input-field" placeholder="" />
                    </div>
                </div>
                <div className="search-item"></div>
            </div>
            <div className="btn-wrap end">
                <Button variant="sub1">초기화</Button>
                <Button variant="sub2">조회</Button>
            </div>
        </div>
    );
};

export default OcrSearch;
