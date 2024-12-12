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
  return (
    <>
      <div className="search-contnet">
        <div className="search-item-box full">
          <div className="search-item">
            <span className="tit">과제 검색</span>
            <div className="item-box ">
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
                <MenuItem value="">전체</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>TwentyTwenty</MenuItem>
              </Select>
              <TextField
                className="input-field"
                fullWidth
                placeholder="검색할 과제를 입력하세요"
              />
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
                label="전체"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="과제신청"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="부서 내 검토"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="반려"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="담당자 검토"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="미채택"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="진행중"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="1차 결과"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ChkDefault />}
                    checkedIcon={<ChkChecked />}
                  />
                }
                label="과제 종료"
              />
            </FormGroup>
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
      </div>
    </>
  );
};

export default SearchTaskRequest;
