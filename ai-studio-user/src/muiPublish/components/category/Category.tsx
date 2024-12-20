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
const Category: React.FC<IPageProps> = (props) => {
    const [radioGroup2, setRadioGroup2] = React.useState("인기/추천");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };
    return (
        <>
            <FormControl>
                <RadioGroup
                    className="filter-radio"
                    row
                    aria-labelledby="radio-group"
                    name="group2"
                    value={radioGroup2}
                    onChange={radioGroupChange2}
                >
                    <FormControlLabel value="인기/추천" control={<Radio />} label="인기/추천" />
                    <FormControlLabel value="전체" control={<Radio />} label="전체" />
                    <FormControlLabel value="예적금" control={<Radio />} label="예적금" />
                    <FormControlLabel value="외환" control={<Radio />} label="외환" />
                    <FormControlLabel value="퇴직연금" control={<Radio />} label="퇴직연금" />
                    <FormControlLabel value="투자상품" control={<Radio />} label="투자상품" />
                    <FormControlLabel value="보험/방카" control={<Radio />} label="보험/방카" />
                    <FormControlLabel value="대출" control={<Radio />} label="대출" />
                    <FormControlLabel value="급여" control={<Radio />} label="급여" />
                    <FormControlLabel value="연금" control={<Radio />} label="연금" />
                    <FormControlLabel value="고자산" control={<Radio />} label="고자산" />
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default Category;
