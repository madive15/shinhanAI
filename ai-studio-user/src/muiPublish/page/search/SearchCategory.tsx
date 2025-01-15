// necessary set
import React from "react";

// need content
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

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
 * user-front: Category
 * Category
 * 카테고리 - 인기/추천, 전체, 등등
 *
 */
const SearchCategory: React.FC<IPageProps> = (props) => {
    const [radioGroup2, setRadioGroup2] = React.useState("프리빌트");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };
    return (
        <>
            <FormControl className="filter-radio-wrap">
                <RadioGroup
                    className="filter-radio"
                    row
                    aria-labelledby="radio-group"
                    name="group2"
                    value={radioGroup2}
                    onChange={radioGroupChange2}
                >
                    <FormControlLabel
                        value="프리빌트"
                        control={<Radio />}
                        label="프리빌트(999+)"
                    />
                    <FormControlLabel
                        value="AI모델 생성"
                        control={<Radio />}
                        label="AI모델 생성(0)"
                    />
                    <FormControlLabel
                        value="고객 성향 지수"
                        control={<Radio />}
                        label="고객 성향 지수(0)"
                    />
                    <FormControlLabel
                        value="고객 필터 조건"
                        control={<Radio />}
                        label="고객 필터 조건(100)"
                    />
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default SearchCategory;
