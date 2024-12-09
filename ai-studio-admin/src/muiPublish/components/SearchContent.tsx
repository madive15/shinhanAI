// necessary set
import React, { useState } from "react";

// need content

import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as ChkDisabled } from "~assets/images/svg/Icons-chk-disabled.svg";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as RadioDisabled } from "~assets/images/svg/Icons-radio-disabled.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
// need style
import "./search.scss";

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
 * admin-front: SubTitle
 * SubTitle page
 */
const SearchContent: React.FC<IPageProps> = (props) => {
  //셀렉트
  const [ageSelect, setAgeSelect] = React.useState("");
  const selectChange = (event: SelectChangeEvent) => {
    setAgeSelect(event.target.value as string);
  };
  const [radioGroup, setRadioGroup] = React.useState("female");
  const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioGroup((event.target as HTMLInputElement).value);
  };
  //인풋
  const [text, setText] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const optionsRadio = ["일자별", "과제별", "라디오3"];

  //체크박스
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(true);
  const [isChecked9, setIsChecked9] = useState(false);

  //데이터 픽커
  const [startDate, setStartDate] = useState();
  return (
    <>
      <div className="search-contnet">
        {/* <div className="search-item-box">
          <div className="search-item">
            <span className="tit">조회항목</span>
            <div className="item-box">
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
              <InputText
                // label="인풋 라벨"
                id="inputText1"
                value={text}
                onChange={setText}
                placeholder="플레이스홀더"
                maxLength={30}
              />
            </div>
          </div>
          <div className="search-item">
            <span className="tit">권한구분</span>
            <div className="item-box select-long">
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
            </div>
          </div>
        </div> */}

        {/* {props.pageName === "AI-OCR 검증 결과 관리" && (
          <>
            <div className="search-item-box">
              <div className="search-item">
                <span className="tit">관리유형</span>
                <div className="item-box">
                  <RadioGroup
                    options={optionsRadio}
                    selectedOption={selectedRadio}
                    onChange={setSelectedRadio}
                    name="RadioGroup1"
                  />
                </div>
              </div>
              <div className="search-item">
                <span className="tit">기간 조회</span>
                <div className="item-box select-long">
                  <Select
                    options={options}
                    placeholder="옵션을 선택하세요"
                    disabled={false}
                  />
                </div>
              </div>
            </div>
            <div className="search-item-box">
              <div className="search-item">
                <span className="tit">부서명</span>
                <div className="item-box">
                  <InputText
                    // label="인풋 라벨"
                    id="inputText1"
                    value={text}
                    onChange={setText}
                    placeholder="플레이스홀더"
                    maxLength={30}
                  />
                </div>
              </div>
              <div className="search-item">
                <span className="tit">모델 ID</span>
                <div className="item-box select-long">
                  <Select
                    options={options}
                    placeholder="옵션을 선택하세요"
                    disabled={false}
                  />
                </div>
              </div>
            </div>
          </>
        )} */}
        {props.pageName === "샘플폼" && (
          <>
            <div className="search-item-box">
              <div className="search-item">
                <span className="tit">기간 조회</span>
                <div className="item-box select-long">
                  <Select
                    value={ageSelect}
                    onChange={selectChange}
                    IconComponent={Arrow}
                    displayEmpty
                    id="test1111111"
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
                  <Select
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
                <span className="tit">조회항목</span>
                <div className="item-box">
                  <TextField />
                </div>
              </div>
            </div>
            {/* <div className="search-item">
              <span className="tit">부서명</span>
              <div className="item-box">
                <TextField />
              </div>
            </div>
            <div className="search-item">
              <span className="tit">모델 ID</span>
              <div className="item-box select-long">
                <Select
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
            </div> */}
            {/* <div className="search-item-box full">
              <div className="search-item">
                <span className="tit">진행 상태</span>
                <CheckboxGroup>
                  <Checkbox
                    id="chk1-1"
                    label="체크박스1"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />
                  <Checkbox
                    id="chk1-2"
                    label="체크박스2"
                    checked={isChecked2}
                    onChange={setIsChecked2}
                  />
                  <Checkbox
                    id="chk1-3"
                    label="체크박스3"
                    checked={isChecked3}
                    onChange={setIsChecked3}
                  />
                  <Checkbox
                    id="chk1-4"
                    label="체크박스4"
                    checked={isChecked4}
                    onChange={setIsChecked4}
                  />
                  <Checkbox
                    id="chk1-5"
                    label="체크박스5"
                    checked={isChecked5}
                    onChange={setIsChecked5}
                  />
                  <Checkbox
                    id="chk1-6"
                    label="체크박스6"
                    checked={isChecked6}
                    onChange={setIsChecked6}
                  />
                  <Checkbox
                    id="chk1-7"
                    label="체크박스7"
                    checked={isChecked7}
                    onChange={setIsChecked7}
                  />
                  <Checkbox
                    id="chk1-8"
                    label="체크박스8"
                    checked={isChecked8}
                    onChange={setIsChecked8}
                  />
                  <Checkbox
                    id="chk1-9"
                    label="체크박스9"
                    checked={isChecked9}
                    onChange={setIsChecked9}
                  />
                </CheckboxGroup>
              </div>
            </div>
            <div className="search-item-box full">
              <div className="search-item">
                <span className="tit">상품 분류</span>
                <div className="select-group">
                  <Select
                    options={options}
                    placeholder="대분류"
                    disabled={false}
                  />
                  <Select
                    options={options}
                    placeholder="중분류"
                    disabled={false}
                  />
                  <Select
                    options={options}
                    placeholder="소분류"
                    disabled={false}
                  />
                  <Select
                    options={options}
                    placeholder="세분류"
                    disabled={false}
                  />
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
                    options={options}
                    placeholder="소분류"
                    disabled={false}
                  />
                </div>
              </div>
              <div className="search-item">
                <span className="tit">상품 분류</span>
                <div className="item-box select-long">
                  <Select
                    options={options}
                    placeholder="세분류"
                    disabled={false}
                  />
                </div>
              </div>
            </div> */}
          </>
        )}
      </div>

      {/* <ButtonWrap viewType="end">
        <Button value="초기화" viewType="sub1" />
        <Button value="조회" viewType="sub2" />
      </ButtonWrap> */}
    </>
  );
};

export default SearchContent;
