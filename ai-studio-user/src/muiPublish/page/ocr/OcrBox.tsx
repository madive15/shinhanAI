// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
import IconButton from "@mui/material/IconButton";
// need style

// Props type
export interface IPageProps {
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: OcrBox
 * OcrBox
 * ocr
 */
const OcrBox: React.FC<IPageProps> = (props) => {
    const [selectOne, setAgeSelectOne] = React.useState("30");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };
    const [searchBox, setSearchBox] = useState(false);

    const searchBoxOpen = () => {
        setSearchBox(true);
    };

    const searchBoxClose = () => {
        setSearchBox(false);
    };
    const [dateRange, setDateRange] = useState([null, null]);
    const [rangeStartDate, rangeEndDate]: any = dateRange;
    const arr = [
        "검증 요청",
        "검증 처리 성공",
        "검증 처리 실패",
        "검증 완료",
        "검증 미완료",
    ];
    return (
        <div className="ocr-box-wrap">
            <div className="ocr-box-top">
                <h2>프로세스별 현황</h2>
                <div className="ocr-condition-area">
                    <div className="ocr-box-condition">
                        <span>{"2024-07-01 ~ 07-31"}</span>
                        <span>{"차량미납과태료자동등록"}</span>
                    </div>
                    <Button variant="small" onClick={searchBoxOpen}>
                        조회 조건 수정
                    </Button>
                    <div
                        className={`ocr-search-box ${
                            searchBox ? "active" : ""
                        }`}
                    >
                        <h3>조회 조건 수정</h3>
                        <div className="popup-search">
                            <div className="search-item">
                                <span className="tit">기간</span>
                                <div className="search-box ">
                                    <div className="date-picker-area">
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
                                <div className="search-box ">
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
                                        <MenuItem value={30}>
                                            차량미납과태료자동등록
                                        </MenuItem>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrap end">
                            <Button variant="sub1">재설정</Button>
                            <Button variant="primary">조건 수정</Button>
                        </div>
                        <IconButton
                            className="ico-rect23 x"
                            onClick={searchBoxClose}
                        >
                            <Plus9 />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="ocr-box-content">
                {arr.map((v, i) => {
                    return (
                        <div className="ocr-box" key={i}>
                            <strong>{v}</strong>
                            <div className="count">
                                <em>{9999}</em>
                                <span>건</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OcrBox;
