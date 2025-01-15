// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import FormControlLabel from "@mui/material/FormControlLabel";
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
 * admin-front: PrebulitMetaCategory
 * PrebulitMetaCategory
 */
const PrebulitMetaCategory: React.FC<IPageProps> = (props) => {
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
                        value="상품 단위"
                        control={<Radio />}
                        label="상품 단위"
                    />
                    <FormControlLabel
                        value="업무 단위"
                        control={<Radio />}
                        label="업무 단위"
                    />
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default PrebulitMetaCategory;
