// necessary set
import React, { useState } from "react";

// need content
import Select from "~/publish/components/Select";
import InputText from "~/publish/components/InputText";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";
// import Radio from "../components/Radio";
import RadioGroup from "~/publish/components/RadioGroup";
import Checkbox from "~/publish/components/Checkbox";
import CheckboxGroup from "~/publish/components/CheckboxGroup";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
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
    const options = [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
        { value: "option4", label: "옵션 4" },
        { value: "option5", label: "옵션 5" },
        { value: "option6", label: "옵션 6" },
        { value: "option7", label: "옵션 7" },
        { value: "option8", label: "옵션 8" },
    ];

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
                <div className="search-item-box">
                    <div className="search-item">
                        <span className="tit">조회항목</span>
                        <div className="item-box">
                            <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
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
                            <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
                        </div>
                    </div>
                </div>

                {props.pageName === "AI-OCR 검증 결과 관리" && (
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
                                    <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
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
                                    <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {props.pageName === "샘플폼" && (
                    <>
                        <div className="search-item-box">
                            <div className="search-item">
                                <span className="tit">기간 조회</span>
                                <div className="item-box select-long">
                                    <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
                                </div>
                            </div>
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
                        </div>
                        <div className="search-item-box">
                            <div className="search-item">
                                <span className="tit">조회항목</span>
                                <div className="item-box">
                                    <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
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
                                    <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
                                </div>
                            </div>
                        </div>
                        <div className="search-item-box full">
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
                                    <Select options={options} placeholder="대분류" disabled={false} />
                                    <Select options={options} placeholder="중분류" disabled={false} />
                                    <Select options={options} placeholder="소분류" disabled={false} />
                                    <Select options={options} placeholder="세분류" disabled={false} />
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
                                    <Select options={options} placeholder="소분류" disabled={false} />
                                </div>
                            </div>
                            <div className="search-item">
                                <span className="tit">상품 분류</span>
                                <div className="item-box select-long">
                                    <Select options={options} placeholder="세분류" disabled={false} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <ButtonWrap viewType="end">
                <Button value="초기화" viewType="sub1" />
                <Button value="조회" viewType="sub2" />
            </ButtonWrap>
        </>
    );
};

export default SearchContent;
