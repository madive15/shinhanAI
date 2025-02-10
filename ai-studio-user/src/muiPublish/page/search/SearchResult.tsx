// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Badge from "~/muiPublish/components/Badge";
import Hash from "~/muiPublish/components/Hash";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    heiTitSearch?: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: SearchResult
 * SearchResult
 */
const SearchResult: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [selectOne, setAgeSelectOne] = React.useState("1");
    const selectOneChange = (event: SelectChangeEvent) => {
        setAgeSelectOne(event.target.value as string);
    };

    const [radioGroup2, setRadioGroup2] = React.useState("전체");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div className="search-result-wrap">
            <div className="search-category">
                <FormControl>
                    <RadioGroup
                        className="filter-radio type2"
                        row
                        aria-labelledby="radio-group"
                        name="group2"
                        value={radioGroup2}
                        onChange={radioGroupChange2}
                    >
                        <FormControlLabel
                            value="전체"
                            control={<Radio />}
                            label="전체"
                        />
                        <FormControlLabel
                            value="신용대출(대면)"
                            control={<Radio />}
                            label="신용대출(대면)"
                        />
                        <FormControlLabel
                            value="신용대출(비대면)"
                            control={<Radio />}
                            label="신용대출(비대면)"
                        />
                        <FormControlLabel
                            value="자동차대출"
                            control={<Radio />}
                            label="자동차대출"
                        />
                        <FormControlLabel
                            value="서민금융"
                            control={<Radio />}
                            label="서민금융"
                        />
                        <FormControlLabel
                            value="담보대출"
                            control={<Radio />}
                            label="담보대출"
                        />
                        <FormControlLabel
                            value="기금재원대출"
                            control={<Radio />}
                            label="기금재원대출"
                        />
                        <FormControlLabel
                            value="가계여신기타대출"
                            control={<Radio />}
                            label="가계여신기타대출"
                        />
                        <FormControlLabel
                            value="신택대출"
                            control={<Radio />}
                            label="신택대출"
                        />
                        <FormControlLabel
                            value="일반자금대출"
                            control={<Radio />}
                            label="일반자금대출"
                        />
                        <FormControlLabel
                            value="전세대출"
                            control={<Radio />}
                            label="전세대출"
                        />
                        <FormControlLabel
                            value="주택담보대출"
                            control={<Radio />}
                            label="주택담보대출"
                        />
                        <FormControlLabel
                            value="특별대환대출"
                            control={<Radio />}
                            label="특별대환대출"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <ul className="search-result-list">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <li key={i} className="search-result-item">
                        <div className="result-item">
                            <div className="search-result-tit">
                                <Hash
                                    value="가계여신 > 전세대출"
                                    type="type3"
                                />
                                <a href="#">
                                    <strong>
                                        <span>검색어</span>와 연관된 프리빌트
                                        타이틀
                                        <span>검색어</span>와 연관된 프리빌트
                                        타이틀
                                        <span>검색어</span>와 연관된 프리빌트
                                        타이틀
                                        <span>검색어</span>와 연관된 프리빌트
                                        타이틀
                                        <span>검색어</span>와 연관된 프리빌트
                                        타이틀
                                        <span>검색어</span>와 연관된 프리빌트
                                        타이틀
                                    </strong>
                                </a>
                                <IconButton className="ico-circle20">
                                    <Search12 />
                                </IconButton>
                            </div>
                            <p className="search-result-txt">
                                이곳에는 모델 상세 내용이 간략하게 노출되는
                                영역입니다. <span>검색어</span>와 연관된 내용이
                                있으면 노출됩니다. 이곳에는 모델 상세 내용이
                                간략하게 노출되는 영역입니다.
                                <span>검색어</span>와 연관된 내용이 있으면
                                노출됩니다. 이곳에는 모델 상세 내용이 간략하게
                                노출되는 영역입니다. <span>검색어</span>와
                                연관된 내용이 있으면 노출됩니다. 이곳에는
                                프리빌트 상세 내용이 간략하게 노출되는
                                영역입니다. <span>검색어</span>와 연관된 내용이
                                있으면 노출됩니다.
                            </p>
                            <div className="hash-wrap">
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                                <Hash value="#해시태그" type="type2" />
                            </div>
                        </div>
                        <Button variant="sub1">타겟추출</Button>
                    </li>
                ))}
            </ul>
            {/* <div className="no-data search">
                <p>검색 결과가 없습니다.</p>
            </div> */}
        </div>
    );
};
export default SearchResult;
