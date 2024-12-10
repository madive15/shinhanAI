// necessary set
import React from "react";

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
 * admin-front: SearchProductMeta
 * 상품메타관리 Search
 */
const SearchProductMeta: React.FC<IPageProps> = (props) => {
    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };
    const [radioGroup, setRadioGroup] = React.useState("all");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };

    return (
        <>
            <div className="search-contnet">
                <div className="search-item-box">
                    <div className="search-item">
                        <span className="tit">기간 조회</span>
                        <div className="item-box ">
                            <Select
                                className="select-box"
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
                        </div>
                    </div>
                    <div className="search-item">
                        <span className="tit">권한구분</span>
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
                                        value="all"
                                        control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                        label="전체"
                                    />
                                    <FormControlLabel
                                        value="user"
                                        control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                        label="사용자 권한"
                                    />
                                    <FormControlLabel
                                        value="admin"
                                        control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                        label="관리자 권한"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="search-item-box full">
                    <div className="search-item">
                        <span className="tit">상품 분류</span>
                        <div className="select-group">
                            <Select
                                className="select-box"
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
                                    대분류
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>TwentyTwenty</MenuItem>
                            </Select>
                            <Select
                                className="select-box"
                                value={ageSelect}
                                onChange={selectChange}
                                IconComponent={Arrow}
                                MenuProps={{
                                    classes: {
                                        paper: "select-option-class",
                                    },
                                }}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    중분류
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>TwentyTwenty</MenuItem>
                            </Select>
                            <Select
                                className="select-box"
                                value={ageSelect}
                                onChange={selectChange}
                                IconComponent={Arrow}
                                MenuProps={{
                                    classes: {
                                        paper: "select-option-class",
                                    },
                                }}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    소분류
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>TwentyTwenty</MenuItem>
                            </Select>
                            <Select
                                className="select-box"
                                value={ageSelect}
                                onChange={selectChange}
                                IconComponent={Arrow}
                                MenuProps={{
                                    classes: {
                                        paper: "select-option-class",
                                    },
                                }}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    세분류
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>TwentyTwenty</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchProductMeta;
