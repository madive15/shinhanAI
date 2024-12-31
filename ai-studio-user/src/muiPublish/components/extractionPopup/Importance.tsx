import React, { useState, useEffect } from "react";
import { Box, Typography, Slider } from "@mui/material";

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
    const {
        changeMonth,
        gubunType,
        monthType,
        values,
        min,
        max,
        thresholdMarks,
        thresholdMarksTitles,
        style,
        ...rest
    } = props;

    const gbType = gubunType === 12 ? 120 : 100;

    const [value, setValue] = useState(values);
    const [marks, setMarks] = useState(thresholdMarks);
    const [perc, setPerc] = useState(values.map((val: any) => (val / max) * gbType));

    const onChange = (e: any, tValues: any) => {
        const [minVal, maxVal] = tValues;

        if (max > minVal && max !== minVal) {
            if (minVal > 0) {
                setValue(tValues);
                setMarks([Math.floor((min + minVal) / 2), Math.floor((minVal + max) / 2), Math.floor(max / 2)]);
                setPerc(tValues.map((val: any) => (val / max) * gbType));
            }
        }
    };

    // console.log(values);
    // console.log(perc[0]);

    const learning = monthType === true ? Math.floor(perc[0] / 10) * 2 : Math.floor(perc[0] / 10);
    const verifiCalc = max - perc[0];
    const verifi = monthType === true ? Math.floor(verifiCalc / 10) * 2 : Math.floor(verifiCalc / 10);
    // const testCalc = gbType - perc[1];
    // const test = monthType === true ? Math.floor(testCalc / 10) * 2 : Math.floor(testCalc / 10);

    useEffect(() => {
        if (learning >= 5) {
            changeMonth(false);
        } else {
            changeMonth(true);
        }
    }, [learning]);

    return (
        <Box className="LearningType-slider">
            <div className="import-box">
                <div className="sum1">
                    시간 : <span>{learning}</span>
                </div>
                <div className="sum2">
                    성능 : <span>{verifi}</span>
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
                        background: `linear-gradient(to right, #15B86C 0% ${perc[0]}%, #EB8D19 ${perc[0]}% 100%, #6D19DB 100% 100%)`,
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

const Importance: React.FC<IPageProps> = (props) => {
    const [gubunType, setGubunType] = useState(10); // 10, 12
    // const [monthType, setMonthType] = useState(false); // true : 24개월, falce :12개월

    const changeMonth = (data: boolean) => {
        props.setMonthType(data);
    };

    return (
        <Box>
            <DiscreteSlider
                changeMonth={changeMonth}
                gubunType={gubunType}
                monthType={false}
                step={10}
                values={[10]}
                min={0}
                max={100}
                thresholdMarks={[10, 50, 100]}
                thresholdMarksTitles={["학습", "검증", "테스트"]}
            />
        </Box>
    );
};
export default Importance;
