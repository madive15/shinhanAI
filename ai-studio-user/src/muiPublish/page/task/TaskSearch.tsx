// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
// need content
import Button from "@mui/material/Button";
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
 * user-front: TaskSearch
 * TaskSearch
 */
const OcrSearch: React.FC<IPageProps> = (props) => {
    const [selectOne, setAgeSelectOne] = React.useState("1");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };
    return (
        <div className="search-contnet">
            <h2>과제 검색</h2>
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">과제검색</span>
                    <div className="search-box">
                        <Select
                            className="select-box custom-select "
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
                            <MenuItem value={1}>전체</MenuItem>
                            <MenuItem value={2}>추후 추가 예정</MenuItem>
                            <MenuItem value={3}>추후 추가 예정</MenuItem>
                            <MenuItem value={4}>추후 추가 예정</MenuItem>
                        </Select>
                        <div className="input-area">
                            <TextField
                                className="input-field"
                                placeholder="텍스트를 입력하세요."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="btn-wrap end">
                <Button variant="sub1">초기화</Button>
                <Button variant="sub2">조회</Button>
            </div>
        </div>
    );
};

export default OcrSearch;
