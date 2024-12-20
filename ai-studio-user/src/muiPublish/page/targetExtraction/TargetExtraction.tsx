// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import { ReactComponent as Home } from "~assets/images/svg/icon_navi_home.svg";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

// need style
import "~/muiPublish/layout/layout.scss";

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
 * user-front: TargetExtraction
 * TargetExtraction page
 */
const TargetExtraction: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //table 탭
    const adminMenu = [
        "HOME",
        "타겟추출 관리",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴2",
        "메뉴3",
    ];

    const [radioGroup, setRadioGroup] = React.useState("개인");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };

    const [radioGroup2, setRadioGroup2] = React.useState("인기/추천");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <div className="list-content">
                    <div className="tit-gnb-box">
                        <div className="nav">
                            <Home className="home" />
                            <span className="deps">{props.pageName}</span>
                            <span className="deps">{props.pageName}</span>
                        </div>
                    </div>
                    <div className="sub-title-tab-box">
                        <div className="tit-tabs-box">
                            <div className="sub-tit">타겟 추출</div>
                            <div className="sub-tabs">
                                <span className="active">프리빌트</span>
                                <span>직접추출</span>
                            </div>
                        </div>
                        <div className="sub-searth">
                            <TextField
                                hiddenLabel
                                variant="outlined"
                                placeholder="검색어를 입력해주세요"
                            />
                            <IconButton
                                type="button"
                                aria-label="search"
                                className="icon-search"
                            >
                                <Search />
                            </IconButton>
                        </div>
                    </div>
                    <div className="sub-tab-content">
                        <div className="radio-box">
                            <FormControl>
                                <RadioGroup
                                    className="filter-radio"
                                    row
                                    aria-labelledby="radio-group"
                                    name="group1"
                                    value={radioGroup}
                                    onChange={radioGroupChange}
                                >
                                    <FormControlLabel
                                        value="개인"
                                        control={<Radio />}
                                        label="개인"
                                    />
                                    <FormControlLabel
                                        value="기업"
                                        control={<Radio />}
                                        label="기업"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <RadioGroup
                                    className="filter-radio"
                                    row
                                    aria-labelledby="radio-group"
                                    name="group2"
                                    value={radioGroup2}
                                    onChange={radioGroupChange2}
                                >
                                    <FormControlLabel
                                        value="인기/추천"
                                        control={<Radio />}
                                        label="인기/추천"
                                    />
                                    <FormControlLabel
                                        value="전체"
                                        control={<Radio />}
                                        label="전체"
                                    />
                                    <FormControlLabel
                                        value="예적금"
                                        control={<Radio />}
                                        label="예적금"
                                    />
                                    <FormControlLabel
                                        value="외환"
                                        control={<Radio />}
                                        label="외환"
                                    />
                                    <FormControlLabel
                                        value="퇴직연금"
                                        control={<Radio />}
                                        label="퇴직연금"
                                    />
                                    <FormControlLabel
                                        value="투자상품"
                                        control={<Radio />}
                                        label="투자상품"
                                    />
                                    <FormControlLabel
                                        value="보험/방카"
                                        control={<Radio />}
                                        label="보험/방카"
                                    />
                                    <FormControlLabel
                                        value="대출"
                                        control={<Radio />}
                                        label="대출"
                                    />
                                    <FormControlLabel
                                        value="급여"
                                        control={<Radio />}
                                        label="급여"
                                    />
                                    <FormControlLabel
                                        value="연금"
                                        control={<Radio />}
                                        label="연금"
                                    />
                                    <FormControlLabel
                                        value="고자산"
                                        control={<Radio />}
                                        label="고자산"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>필터</div>
                    </div>
                </div>
                <div className="list-setting">
                    <div className="no-data">
                        <div>
                            <div className="no-data-img"></div>
                            <strong>AI가 미리 생성해놓은 조건</strong>을
                            선택해서
                            <br /> 타겟을 추출하세요.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TargetExtraction;
