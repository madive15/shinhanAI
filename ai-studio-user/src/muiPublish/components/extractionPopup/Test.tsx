import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";

function DiscreteSlider(props: any) {
    const { entityName, reverse, values, min, max, thresholdMarks, thresholdMarksTitles, style, ...rest } = props;

    const [value, setValue] = useState(reverse ? values.map((val: any) => -val) : values);
    const [marks, setMarks] = useState(reverse ? thresholdMarks.map((val: any) => -val) : thresholdMarks);
    const [perc, setPerc] = useState(
        reverse
            ? // ? values.map((val) => parseInt((1 - Math.abs(val / max)) * 100))
              values.map((val: any) => Math.floor((1 - Math.abs(val / max)) * 100))
            : values.map((val: any) => (val / max) * 100)
    );
    // Math.floor(Number(val))
    const onChange = (e: any, tValues: any) => {
        console.log(tValues);
        const [minVal, maxVal] = tValues;
        if (maxVal > minVal && maxVal !== minVal) {
            setValue(tValues);
            if (!reverse) {
                setMarks([
                    Math.floor((min + minVal) / 2),
                    Math.floor((minVal + maxVal) / 2),
                    Math.floor((maxVal + max) / 2),
                ]);
                setPerc(tValues.map((val: any) => (val / max) * 100));
            } else {
                setMarks([
                    Math.floor((-max + minVal) / 2),
                    Math.floor((minVal + maxVal) / 2),
                    Math.floor((maxVal + -min) / 2),
                ]);
                setPerc(tValues.map((val: any) => Math.floor((1 - Math.abs(val / max)) * 100)));
            }
        }
    };

    // console.log(value, perc, marks);
    // console.log(perc[0], perc[1], perc[2]);
    const ss1 = perc[0];
    const ss2 = perc[1] - perc[0];
    const ss3 = 100 - perc[1];
    // console.log(ss1, ss2, ss3);
    // const aa = (e: any) => {
    //     console.log(e.target.value);
    //     // console.log(reverse ? -min : max);
    //     // onChange([e.target.value]);
    // };

    return (
        <Box
            sx={{
                width: "80%",
                margin: "16px",
            }}
        >
            <Typography
                id="discrete-slider"
                gutterBottom
                sx={{
                    marginBottom: "40px",
                }}
            >
                {entityName}
            </Typography>

            <div className="">
                <span>{ss1}</span>,<span>{ss2}</span>,<span>{ss3}</span>
            </div>

            <Slider
                sx={{
                    "& .MuiSlider-track": {
                        background: "yellow",
                        borderColor: "white",
                    },
                    "& .MuiSlider-thumb": {
                        [`&:nth-of-type(${1}n)`]: {
                            background: "red",
                            "& span": {
                                background: "red",
                            },
                        },
                        [`&:nth-of-type(${2}n)`]: {
                            background: "green",
                            "& span": {
                                background: "green",
                            },
                        },
                    },
                    "& .MuiSlider-mark": {
                        background: "none",
                    },
                    "& .MuiSlider-rail": {
                        background: `linear-gradient(to right, red 0% ${perc[0]}%, yellow ${perc[0]}% ${perc[1]}%, green ${perc[1]}% 100%)`,
                    },
                    "& .MuiSlider-valueLabel": {},
                    ...style,
                }}
                valueLabelDisplay="off"
                valueLabelFormat={(x) => `${x}`}
                value={value}
                min={reverse ? -max : min}
                max={reverse ? -min : max}
                scale={(x) => (reverse ? -x : x)}
                marks={[
                    { value: reverse ? -max : min, label: reverse ? max : min },
                    ...marks.map((val: any, idx: number) => ({
                        value: val,
                        label: thresholdMarksTitles[idx],
                    })),
                    { value: reverse ? -min : max, label: reverse ? min : max },
                ]}
                onChange={onChange}
                // disabled
                {...rest}
            />
        </Box>
    );
}

export default function Test() {
    return (
        <Box>
            <DiscreteSlider
                // entityName="Normal range"
                reverse={false}
                step={10}
                values={[0, 100]}
                min={0}
                max={100}
                thresholdMarks={[0, 5, 10]}
                thresholdMarksTitles={["학습", "검증", "테스트"]}
            />
        </Box>
    );
}
