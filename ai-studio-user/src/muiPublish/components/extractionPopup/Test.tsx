import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";

function DiscreteSlider(props: any) {
    const { entityName, reverse, values, min, max, thresholdMarks, thresholdMarksTitles, style, ...rest } = props;

    const [value, setValue] = useState(reverse ? values.map((val: any) => -val) : values);
    const [marks, setMarks] = useState(reverse ? thresholdMarks.map((val: any) => -val) : thresholdMarks);
    const [perc, setPerc] = useState(
        reverse
            ? // ? values.map((val) => parseInt((1 - Math.abs(val / max)) * 100))
              values.map((val: any) => Math.floor(1 - Math.abs(val / max)))
            : values.map((val: any) => val / max)
    );
    // Math.floor(Number(val))
    const onChange = (e: any, tValues: any) => {
        const [minVal, maxVal] = tValues;
        if (maxVal > minVal && maxVal !== minVal) {
            setValue(tValues);
            if (!reverse) {
                setMarks([
                    Math.floor((min + minVal) / 2),
                    Math.floor((minVal + maxVal) / 2),
                    Math.floor((maxVal + max) / 2),
                ]);
                setPerc(tValues.map((val: any) => val / max));
            } else {
                setMarks([
                    Math.floor((-max + minVal) / 2),
                    Math.floor((minVal + maxVal) / 2),
                    Math.floor((maxVal + -min) / 2),
                ]);
                setPerc(tValues.map((val: any) => Math.floor(1 - Math.abs(val / max))));
            }
        }
    };

    // console.log(value, perc, marks);

    console.log(perc[0], perc[1], marks);
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
                valueLabelDisplay="on"
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
            {/* <DiscreteSlider
                entityName="Reverse custom range"
                reverse={true}
                step={1}
                values={[10.0, 4.0]}
                min={0}
                max={24}
                thresholdMarks={[17, 7, 2]}
                thresholdMarksTitles={["R", "Y", "G"]}
            /> */}
            <DiscreteSlider
                entityName="Normal range"
                reverse={true}
                step={1}
                values={[0, 10]}
                min={0}
                max={10}
                thresholdMarks={[0, 5, 10]}
                thresholdMarksTitles={["학습", "검증", "테스트"]}
            />
        </Box>
    );
}
