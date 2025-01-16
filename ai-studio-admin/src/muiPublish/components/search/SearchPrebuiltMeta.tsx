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
import TextField from "@mui/material/TextField";
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
 * admin-front: SearchPromptMetatsx
 * 프롬프트메타관리 Search
 */
const SearchPromptMeta: React.FC<IPageProps> = (props) => {
    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };
    const [radioGroup, setRadioGroup] = React.useState("all");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };

    return (
        <div className="search-contnet">
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">개인/기업구분</span>
                    <div className="item-box ">
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
                                    value="전체"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="전체"
                                />
                                <FormControlLabel
                                    value="개인"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="개인"
                                />
                                <FormControlLabel
                                    value="기업"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="기업"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">콘텐츠 분류</span>
                    <div className="item-box">
                        <Select
                            className="select-box"
                            value={ageSelect}
                            onChange={selectChange}
                            IconComponent={Arrow}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                전체
                            </MenuItem>
                            <MenuItem value={10}>건전성</MenuItem>
                            <MenuItem value={20}>마케팅</MenuItem>
                            <MenuItem value={20}>내부통제</MenuItem>
                            <MenuItem value={20}>고객관리</MenuItem>
                            <MenuItem value={20}>해당없음 </MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="search-item-box">
                <div className="search-item">
                    <span className="tit">사용 여부</span>
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
                                    value="전체"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="전체"
                                />
                                <FormControlLabel
                                    value="사용"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="사용"
                                />
                                <FormControlLabel
                                    value="미사용"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="미사용"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className="search-item">
                    <span className="tit">노출 여부</span>
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
                                    value="전체"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="전체"
                                />
                                <FormControlLabel
                                    value="노출"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="노출"
                                />
                                <FormControlLabel
                                    value="미노출"
                                    control={
                                        <Radio
                                            checkedIcon={<RadioChecked />}
                                            icon={<RadioDefault />}
                                        />
                                    }
                                    label="미노출"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPromptMeta;
