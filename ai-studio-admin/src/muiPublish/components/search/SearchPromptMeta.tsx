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
        <>
            <div className="search-contnet">
                <div className="search-item-box">
                    <div className="search-item">
                        <span className="tit">프롬프트 ID</span>
                        <div className="item-box ">
                            <TextField className="input-field" />
                        </div>
                    </div>
                    <div className="search-item">
                        <span className="tit">화면 ID / 화면명</span>
                        <div className="item-box ">
                            <TextField className="input-field" />
                        </div>
                    </div>
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
                                        value="all"
                                        control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                        label="전체"
                                    />
                                    <FormControlLabel
                                        value="user"
                                        control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                        label="사용"
                                    />
                                    <FormControlLabel
                                        value="admin"
                                        control={<Radio checkedIcon={<RadioChecked />} icon={<RadioDefault />} />}
                                        label="미사용"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPromptMeta;
