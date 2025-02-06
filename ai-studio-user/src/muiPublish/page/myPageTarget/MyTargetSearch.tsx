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
 * user-front: MyTargetSearch
 * MyTargetSearch
 * ocr
 */
const MyTargetSearch: React.FC<IPageProps> = (props) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [rangeStartDate, rangeEndDate]: any = dateRange;
    return (
        <div className="search-contnet">
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">기간 조회</span>
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
                        <div className="date-month-btn">
                            <span className="date-ym-radio">
                                <input type="radio" name="date1" id="3m" />
                                <label htmlFor="3m">7일</label>
                            </span>
                            <span className="date-ym-radio">
                                <input type="radio" name="date1" id="6m" />
                                <label htmlFor="6m">15일</label>
                            </span>
                            <span className="date-ym-radio">
                                <input type="radio" name="date1" id="1y" />
                                <label htmlFor="1y">1개월</label>
                            </span>
                            <span className="date-ym-radio">
                                <input type="radio" name="date1" id="3y" />
                                <label htmlFor="3y">3개월</label>
                            </span>
                            <span className="date-ym-radio">
                                <input type="radio" name="date1" id="5y" />
                                <label htmlFor="5y">전체</label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-wrap end">
                <Button variant="sub2">조회</Button>
            </div>
        </div>
    );
};

export default MyTargetSearch;
