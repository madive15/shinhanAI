// necessary set
import React from "react";
import { useState } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
// need content
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import TextField from "@mui/material/TextField";
import "~/muiPublish/guide/guide.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";

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
 * admin-front: SearchBoardManage
 */
const SearchBoardManage: React.FC<IPageProps> = (props) => {
    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    const [startDate, setStartDate] = useState();
    const [popupStauts, setpopupStauts] = React.useState(false);
    const popupOpen = () => {
        setpopupStauts(true);
    };
    const popupClose = () => {
        setpopupStauts(false);
    };
    return (
        <>
            <div className="search-contnet">
                <div className="search-item-box ">
                    <div className="search-item">
                        <span className="tit">게시판 선택</span>
                        <div className="item-box ">
                            <div className="input-group">
                                <TextField
                                    className="input-field"
                                    placeholder=""
                                />
                                <Button variant="sub2" onClick={popupOpen}>
                                    게시판 설정
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="search-item">
                        <span className="tit">게시글 검색</span>
                        <div className="item-box ">
                            <div className="input-group">
                                <Select
                                    className="select-box small"
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
                                    <MenuItem value={20}>TwentyTwenty</MenuItem>
                                </Select>
                                <TextField
                                    className="input-field"
                                    placeholder="검색어를 입력해주세요."
                                />
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <input type="radio" name="date1" id="1d" />
                                    <label htmlFor="1d">오늘</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="7d" />
                                    <label htmlFor="7d">7일</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="14d" />
                                    <label htmlFor="14d">14일</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="1m" />
                                    <label htmlFor="1m">1개월</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="3m" />
                                    <label htmlFor="3m">3개월</label>
                                </span>
                                <span className="date-ym-radio">
                                    <input type="radio" name="date1" id="6m" />
                                    <label htmlFor="6m">6개월</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                className="layer-box "
                open={popupStauts}
                onClose={popupClose}
            >
                <DialogTitle>게시판 설정</DialogTitle>
                <DialogContent>
                    <div className="search-contnet">
                        <div className="search-item-box full">
                            <div className="search-item">
                                <span className="tit">게시판 선택</span>
                                <div className="item-box ">
                                    <div className="input-group">
                                        <Select
                                            className="select-box small"
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
                                            <MenuItem value={20}>
                                                TwentyTwenty
                                            </MenuItem>
                                        </Select>
                                        <TextField
                                            className="input-field"
                                            placeholder="검색어를 입력해주세요."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-item-box full">
                            <div className="search-item">
                                <span className="tit">게시판 사용 여부</span>
                                <Switch className="switch-btn" />
                            </div>
                        </div>
                    </div>
                    <div className="popup-box">
                        <p className="popup-box-tit">변경 전</p>
                        <div className="text-area ">
                            <textarea name="" id="" disabled>
                                IT 및 기술 분야의 최신 동향과 기술적인 특징을
                                제공하는 서비스입니다.
                            </textarea>
                        </div>
                    </div>
                    <div className="popup-box">
                        <p className="popup-box-tit">변경 후</p>
                        <div className="text-area ">
                            <textarea name="" id="">
                                IT 및 기술 분야의 최신 동향과 기술적인 특징을
                                제공하는 서비스입니다. 새로운 기술과 제품,
                                그리고 산업 동향을 파악할 수 있으며, 다양한
                                분야의 전문가들의 인사이트를 얻을 수 있습니다.
                                빠르게 변화하는 기술과 시장 환경에서는 최신
                                정보를 빠르게 수집하고 분석하는 것이 비즈니스
                                전략 수립 및 개인의 전문성 향상에 큰 도움을 줄
                                것입니다.
                            </textarea>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="sub2" onClick={popupClose}>
                        닫기
                    </Button>
                    <Button variant="primary">설정 저장</Button>
                </DialogActions>
                <IconButton className="dialog-close" onClick={popupClose}>
                    <Icons15 fill="#222 " />
                </IconButton>
            </Dialog>
        </>
    );
};

export default SearchBoardManage;
