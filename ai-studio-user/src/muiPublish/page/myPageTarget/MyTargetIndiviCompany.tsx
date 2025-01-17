// necessary set
import React from "react";

// need content
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

// need style
import "~/muiPublish/components/indiviCompany/indiviCompany.scss";

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
 * user-front: indiviCompany
 * indiviCompany
 * 개인 기업 선택
 *
 */
const IndiviCompany: React.FC<IPageProps> = (props) => {
    const [radioGroup, setRadioGroup] = React.useState("개인");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };
    return (
        <>
            <div className="indivi-company between">
                {/* <div className="refresh-box">
                    <span>타겟 추출 완료된 항목이 있습니다.</span>
                    <button type="button">새로고침</button>
                </div> */}
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
        </>
    );
};

export default IndiviCompany;
