import React, { useState, useEffect } from "react";
import { Box, Typography, Slider } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

import "./catlogPriceFilter.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    monthType: boolean;
    setMonthType: (data: boolean) => void;
}

function DiscreteSlider(props: any) {
    const { gubunType, monthType, values, min, max, thresholdMarks, thresholdMarksTitles, style, ...rest } = props;

    const [gbType, setGbType] = useState(100);
    const [value, setValue] = useState(values);
    const [marks, setMarks] = useState(thresholdMarks);
    const [perc, setPerc] = useState(values.map((val: any) => (val / max) * gbType));

    useEffect(() => {
        if (gubunType === 12) {
            setGbType(120);
            setValue([10, 110]);
            setMarks([10, 60, 120]);
            setPerc(values.map((val: any) => (val / max) * 120));
        } else {
            setGbType(100);
            setValue([10, 90]);
            setMarks([10, 50, 100]);
            setPerc(values.map((val: any) => (val / max) * 100));
        }
    }, [gubunType]);

    // console.log(perc);

    const onChange = (e: any, tValues: any) => {
        const [minVal, maxVal] = tValues;

        if (maxVal > minVal && maxVal !== minVal) {
            if (minVal > 0 && maxVal < gbType) {
                setValue(tValues);
                setMarks([
                    Math.floor((min + minVal) / 2),
                    Math.floor((minVal + maxVal) / 2),
                    Math.floor((maxVal + max) / 2),
                ]);
                setPerc(tValues.map((val: any) => (val / max) * gbType));
            }
        }
    };

    const learning = gubunType === 12 && monthType === true ? Math.floor(perc[0] / 10) * 2 : Math.floor(perc[0] / 10);
    const verifiCalc = perc[1] - perc[0];
    const verifi =
        gubunType === 12 && monthType === true ? Math.floor(verifiCalc / 10) * 2 : Math.floor(verifiCalc / 10);
    const testCalc = gbType - perc[1];
    const test = gubunType === 12 && monthType === true ? Math.floor(testCalc / 10) * 2 : Math.floor(testCalc / 10);

    return (
        <Box className="LearningType-slider">
            <div className="import-box">
                <div className="sum1">
                    학습 : <span>{learning}</span>
                </div>
                <div className="sum2">
                    검증 : <span>{verifi}</span>
                </div>
                <div className="sum3">
                    테스트 : <span>{test}</span>
                </div>
            </div>
            <Slider
                sx={{
                    "& .MuiSlider-thumb": {
                        [`&:nth-of-type(${1}n)`]: {
                            background: "#15B86C",
                            "& span": {
                                background: "#15B86C",
                            },
                        },
                        [`&:nth-of-type(${2}n)`]: {
                            background: "#6D19DB",
                            "& span": {
                                background: "#6D19DB",
                            },
                        },
                    },
                    "& .MuiSlider-rail": {
                        opacity: "1",
                        background: `linear-gradient(to right, #15B86C 0% ${
                            gubunType === 10 ? perc[0] : perc[0] > 70 ? perc[0] - 20 : perc[0]
                        }%, #EB8D19 ${gubunType === 10 ? perc[0] : perc[0] - 10}% ${
                            gubunType === 10 ? perc[1] : perc[1] - 20
                        }%, #6D19DB ${gubunType === 10 ? perc[1] : perc[1] - 20}% ${gubunType === 10 ? 100 : 100}%)`,
                    },
                    ...style,
                }}
                value={value}
                min={min}
                max={max}
                marks={[
                    { value: min, label: min },
                    ...marks.map((val: any, idx: number) => ({
                        value: val,
                        label: thresholdMarksTitles[idx],
                    })),
                    { value: max, label: max },
                ]}
                onChange={onChange}
                // disabled
                {...rest}
            />
        </Box>
    );
}

const LearningType: React.FC<IPageProps> = (props) => {
    const [gubunType, setGubunType] = useState(10); // 10, 12
    // const [monthType, setMonthType] = useState(false); // true : 24개월, falce :12개월

    // const [radioGroup2, setRadioGroup2] = useState("10");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setGubunType((event.target as HTMLInputElement).value);
        setGubunType(Number(event.target.value));
    };

    return (
        <Box>
            <div className="learning-division">
                <FormControl>
                    <RadioGroup
                        className="filter-radio"
                        row
                        aria-labelledby="radio-group"
                        name="group2"
                        value={gubunType}
                        onChange={radioGroupChange}
                    >
                        <FormControlLabel value="10" control={<Radio />} label="비율분할" />
                        <FormControlLabel value="12" control={<Radio />} label="기간분할" />
                    </RadioGroup>
                </FormControl>
            </div>
            <DiscreteSlider
                gubunType={gubunType}
                monthType={props.monthType}
                step={10}
                values={gubunType === 12 ? [10, 110] : [10, 90]}
                min={0}
                max={gubunType === 12 ? 120 : 100}
                thresholdMarks={gubunType === 12 ? [10, 60, 120] : [10, 50, 100]}
                thresholdMarksTitles={["학습", "검증", "테스트"]}
            />
        </Box>
    );
};
export default LearningType;
