import { createTheme } from "@mui/material/styles";
import requiredIcon from "../../assets/images/svg/Icons-required.svg";
import requiredIconDisabled from "../../assets/images/svg/Icons-required-disabled.svg";
import { colors } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { he } from "date-fns/locale";
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        sub1: true;
        sub2: true;
        secondary: true;
        primary: true;
        primaryBig: true;
        small: true;
        icon: true;
        smallSub1: true;
        iconDashed: true;
        iconLine: true;
    }
}
const theme = createTheme({
    typography: {
        fontFamily: "Pretendard, sans-serif",
        h1: {
            fontFamily: "OneShinhan",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "-0.5px",
        },
        h2: {
            fontFamily: "OneShinhan",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.5px",
        },
        h3: {
            fontFamily: "OneShinhan",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "21px",
            letterSpacing: "-0.5px",
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: "h1",
                    h2: "h2",
                    h3: "h3",
                    h4: "h4",
                    h5: "h5",
                    h6: "h6",
                    subtitle1: "h2",
                    subtitle2: "h2",
                    body1: "span",
                    body2: "span",
                },
            },
        },
        // 버튼
        MuiButton: {
            styleOverrides: {
                root: {
                    lineHeight: "20px",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    height: "38px",
                    textTransform: "none",
                    "&:disabled": {
                        border: "1px solid var(--border-color3)",
                        background: "var(--background-color2)",
                        "& svg": {
                            fill: "#888",
                        },
                    },
                },
            },
            variants: [
                {
                    props: { variant: "primary" },
                    style: {
                        backgroundColor: "#0046FF",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: "700",
                        letterSpacing: "-0.35px",
                        "&:hover": {
                            backgroundColor: "#0039CE",
                        },
                        "&:active": {
                            backgroundColor: "#002EA5",
                        },
                    },
                },
                {
                    props: { variant: "secondary" },
                    style: {
                        backgroundColor: "#00236E",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "700",
                        letterSpacing: "-0.35px",
                        "&:hover": {
                            backgroundColor: "#001D59",
                        },
                        "&:active": {
                            backgroundColor: "#001748",
                        },
                    },
                },
                {
                    props: { variant: "sub1" },
                    style: {
                        backgroundColor: "#FFF",
                        color: "#222",
                        fontSize: "14px",
                        fontWeight: "700",
                        letterSpacing: "-0.35px",
                        border: "1px solid #DDD",
                        "&:hover": {
                            backgroundColor: "#FAFAFA",
                        },
                        "&:active": {
                            backgroundColor: "#DDD",
                        },
                    },
                },
                {
                    props: { variant: "sub2" },
                    style: {
                        backgroundColor: "#FFF",
                        color: "#0046FF",
                        fontSize: "14px",
                        fontWeight: "700",
                        letterSpacing: "-0.35px",
                        border: "1px solid #0046FF",
                        "&:hover": {
                            backgroundColor: "#E8EEFF",
                        },
                        "&:active": {
                            backgroundColor: "#D1DDFF",
                        },
                    },
                },

                {
                    props: { variant: "primaryBig" },
                    style: {
                        background: "linear-gradient(97deg, #0046ff 1.56%, #4baff5 100%);",
                        color: "#FFF",
                        fontSize: "16px",
                        fontWeight: "700",
                        letterSpacing: "-0.35px",
                        lineHeight: "19px",
                        padding: "12px 20px",
                        borderRadius: "0px 6px 6px 6px",
                        "&:hover": {
                            background: "linear-gradient(97deg, #114ce7 1.56%, #429adc 100%);",
                        },
                        "&:active": {
                            background: "linear-gradient(97deg, #1045d0 1.56%, #3a8ac6 100%);",
                        },
                    },
                },
                {
                    props: { variant: "small" },
                    style: {
                        backgroundColor: "#FFF",
                        color: "#222",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "-0.275px",
                        lineHeight: "14px",
                        padding: "8px 10px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        minWidth: "unset",
                        height: "28px",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                        },
                        "&:active": {
                            backgroundColor: "rgba(0, 0, 0, 0.10)",
                        },
                    },
                },
                {
                    props: { variant: "smallSub1" },
                    style: {
                        backgroundColor: "#FFF",
                        color: "#0046FF",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "-0.275px",
                        lineHeight: "14px",
                        padding: "8px 10px",
                        borderRadius: "8px",
                        border: "1px solid #0046FF",
                        minWidth: "unset",
                        height: "28px",
                        "&:hover": {
                            backgroundColor: "#E8EEFF",
                        },
                        "&:active": {
                            backgroundColor: "#D1DDFF",
                        },
                    },
                },
                {
                    props: { variant: "icon" },
                    style: {
                        minWidth: "unset",
                        width: "24px",
                        height: "24px",
                        padding: "0px",
                        "& svg": {
                            width: "24px",
                            height: "24px",
                        },
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                        },
                        "&:active": {
                            backgroundColor: "rgba(0, 0, 0, 0.10)",
                        },
                    },
                },
                {
                    props: { variant: "iconDashed" },
                    style: {
                        minWidth: "unset",
                        height: "38px",
                        padding: "7px 8px",
                        borderRadius: "8px",
                        border: "1px dashed #888",
                        fontSize: "14px",
                        lineHeight: "18px",
                        letterSpacing: "-0.35px",
                        fontWeight: "700",
                        "& svg": {
                            width: "24px",
                            height: "24px",
                        },
                        "& .MuiButton-startIcon": {
                            marginLeft: "0",
                            marginRight: "4px",
                        },
                        "& .MuiButton-endIcon": {
                            marginLeft: "4px",
                            marginRight: "0",
                        },
                    },
                },
                {
                    props: { variant: "iconLine" },
                    style: {
                        minWidth: "unset",
                        height: "38px",
                        padding: "7px 8px 7px 12px",
                        borderRadius: "8px",
                        border: "1px solid #CCC",
                        fontSize: "14px",
                        lineHeight: "18px",
                        letterSpacing: "-0.35px",
                        fontWeight: "700",
                        backgroundColor: " var(--color2)",
                        "& svg": {
                            width: "24px",
                            height: "24px",
                        },
                        "& .MuiButton-startIcon": {
                            marginLeft: "0",
                            marginRight: "4px",
                        },
                        "& .MuiButton-endIcon": {
                            marginLeft: "4px",
                            marginRight: "0",
                        },
                    },
                },
            ],
        },
        // 버튼 끝
        // 체크박스
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: "0px",
                    //   marginBottom: "-4px",
                    marginRight: "6px",
                    "& svg": {},
                    "&.Mui-checked ": {
                        boxShadow: "0px 2px 4px 0px rgba(0, 70, 255, 0.30)",
                        "&.book-mark ": {
                            boxShadow: "none !important",
                        },
                    },
                    "&.Mui-disabled svg ": {
                        fill: "#fafafa",
                    },
                    "&.Mui-disabled svg path:nth-of-type(1)": {
                        stroke: "#DDD",
                    },
                    "&.Mui-disabled svg path:nth-of-type(2)": {
                        stroke: "#EEE",
                    },
                    "&.Mui-disabled svg path:nth-of-type(3)": {
                        fill: "#DDD",
                    },
                    // "&.Mui-checked": {
                    //   "& svg": {
                    //     boxShadow: "0px 4px 6px rgba(0, 70, 255, 0.1)", // checked 상태의 box-shadow
                    //   },
                    // },
                },
            },
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    "&.chk-group": {
                        "& label": {
                            margin: 0,
                        },
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: "0px",
                    marginRight: "0px",
                },
            },
        },
        // 체크박스 끝
        // 라디오
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: "0",
                    marginRight: "6px",

                    "&.Mui-checked ": {
                        boxShadow: "0px 2px 4px 0px rgba(0, 70, 255, 0.30)",
                    },

                    "&.Mui-disabled": {
                        cursor: "not-allowed",
                        "& svg": {
                            fill: "#fafafa",
                            "& rect": {
                                stroke: "#DDD",
                            },
                        },
                        "& input": {
                            cursor: "not-allowed",
                        },
                    },
                    "& label ": {
                        color: "var(--font-color1)",
                        margin: "0",
                    },
                },
            },
        },

        // 라디오 끝
        // 셀렉트
        MuiSelect: {
            styleOverrides: {
                root: {
                    "&.select-box": {
                        position: "relative",
                        border: "1px solid var(--border-color1)",
                        padding: "0",
                        fontSize: "14px",
                        lineHeight: "18px",
                        letterSpacing: "-0.35px",
                        maxWidth: "480px",
                        minWidth: "80px",
                        minHeight: "auto",
                        width: "100%",
                        backgroundColor: "var(--color2)",
                        height: "36px",
                        borderRadius: "8px",
                        "& .MuiSelect-select": {
                            minHeight: "auto",
                        },
                        "& +.input-field": {
                            marginLeft: "4px",
                        },
                    },
                    "&.small": {
                        maxWidth: "100px",
                    },
                    "&.Mui-focused": {
                        borderColor: "var(--color1)",
                    },
                    "& legend ": {
                        display: "none",
                    },
                    "& fieldset ": {
                        border: "none",
                    },
                    "& svg ": {
                        fill: "#222222",
                    },
                    "& .MuiSelect-icon ": {
                        top: "calc(50% - 0.2em)",
                    },
                    "& .MuiSelect-select ": {
                        padding: "9px 25px 9px 12px !important",
                    },
                    "&.Mui-disabled ": {
                        border: "1px solid var(--border-color3)",
                        background: "var(--background-color2)",
                        "&.required ": {
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                top: "-1px",
                                left: "-1px",
                                width: "8px",
                                height: "8px",
                                background: ` url(${requiredIcon}) top left no-repeat`,
                                zIndex: "2",
                            },
                        },
                        "& svg ": {
                            fill: "#888888",
                        },
                    },
                    "&.required ": {
                        "&:before": {
                            content: '""',
                            position: "absolute",
                            top: "-1px",
                            left: "-1px",
                            width: "8px",
                            height: "8px",
                            background: ` url(${requiredIcon}) top left no-repeat`,
                            zIndex: "2",
                        },
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&.MuiMenu-paper": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: "14px",
                    padding: "8px",
                    marginBottom: "4px",
                    "&:hover": {
                        backgroundColor: "var(--background-color1)",
                    },
                },
            },
        },
        // 셀렉트 끝
        // 아이콘 버튼
        MuiIconButton: {
            styleOverrides: {
                root: {
                    minWidth: "unset",
                    width: "24px",
                    height: "24px",
                    padding: "0",
                },
            },
        },
        // 아이콘 버튼 끝
        // 다이얼로그
        MuiDialog: {
            styleOverrides: {
                root: {
                    "&.alert-box": {
                        "& .MuiPaper-root": {
                            position: "relative",
                            width: "368px",
                            padding: "16px",
                            borderRadius: "16px",
                            boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.1)",
                            "& h2": {
                                fontFamily: "var(--font-style1)",
                                fontSize: "14px",
                                padding: "0",
                                marginBottom: "12px",
                            },
                            "& .MuiDialogContent-root": {
                                fontSize: "15px",
                                padding: "0",
                                margin: "36px 0 24px",
                            },
                            "& .MuiDialogActions-root": { padding: "0" },
                            "& .dialog-close": {
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                            },
                        },
                    },
                    "&.confirm-box": {
                        "& .MuiPaper-root": {
                            position: "relative",
                            width: "500px",
                            padding: "16px",
                            borderRadius: "16px",
                            boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.1)",
                            "& h2": {
                                fontFamily: "var(--font-style1)",
                                fontSize: "14px",
                                padding: "0",
                                marginBottom: "12px",
                            },
                            "& .MuiDialogContent-root": {
                                fontSize: "15px",
                                padding: "0",
                                marginBottom: "24px",
                            },
                            "& .MuiDialogActions-root": { padding: "0" },
                            "& .dialog-close": {
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                            },
                        },
                        "& .txt-box": {
                            padding: "12px 12px",
                            backgroundColor: "var(--background-color5)",
                        },
                    },
                    "&.layer-box": {
                        "& .MuiPaper-root": {
                            position: "relative",
                            width: "560px",
                            padding: "16px",
                            borderRadius: "16px",
                            boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.1)",
                            "& h2": {
                                fontFamily: "var(--font-style1)",
                                fontSize: "14px",
                                padding: "0",
                                marginBottom: "12px",
                            },
                            "& .MuiDialogContent-root": {
                                fontSize: "15px",
                                padding: "0",
                                marginBottom: "24px",
                            },
                            "& .MuiDialogActions-root": { padding: "0" },
                            "& .dialog-close": {
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                            },
                        },
                        "&.semi-large": {
                            "& .MuiPaper-root": {
                                width: "600px",
                                maxWidth: "600px",
                            },
                        },
                        "&.large": {
                            "& .MuiPaper-root": {
                                width: "680px",
                                maxWidth: "680px",
                            },
                        },
                        "&.x-large": {
                            "& .MuiDialog-paper": {
                                width: "800px",
                                maxWidth: "800px",
                                "& .MuiPaper-root": {
                                    width: "768px",
                                    padding: "0 0",
                                    borderRadius: "0 0",
                                },
                            },
                        },
                    },
                },
            },
        },
        // 다이얼로그 끝
        //로우 테이블
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    "&.row-table": {
                        borderTop: "1px solid var(--border-color4)",
                        borderRadius: "0",
                        boxShadow: "none",
                        "& table": {
                            // maxWidth: "764px",
                            borderCollapse: "collapse",
                            tableLayout: "fixed",
                            "& th, & td": {
                                borderBottom: "1px solid var(--border-color4)",
                                padding: "12px 16px",
                                fontSize: "14px",
                            },
                            "& th": {
                                maxWidth: "160px",
                                backgroundColor: "var(--background-color2)",
                                lineHeight: "28px",
                                letterSpacing: "-0.35px",
                            },
                            "& td": {
                                backgroundColor: "var(--color2)",
                                lineHeight: "21px",
                                letterSpacing: "-0.35px",
                                color: "var(--font-color2)",
                                "&.no-space": {
                                    padding: "0 0",
                                },
                            },
                        },
                    },
                    "& table": {
                        "&.table-defult-style": {
                            "& .MuiTableHead-root": {
                                marginBottom: "4px",
                            },
                            "& th": {
                                fontWeight: "700",
                                padding: "0",
                                height: "40px",
                                fontSize: "14px",
                                letterSpacing: "-0.35px",
                                backgroundColor: "var(--background-color1)",
                            },
                        },
                    },
                },
            },
        },
        //로우 테이블 끝
        // 툴팁
        MuiPopper: {
            styleOverrides: {
                root: {
                    "&.MuiPopper-root[role='tooltip']": {
                        "& .MuiTooltip-tooltip": {
                            backgroundColor: "var(--color2)",
                            color: "var(--font-color1)",
                            borderRadius: "4px",
                            padding: "8px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        },
                    },
                },
            },
        },
        // 툴팁 끝
        // 인풋 텍스트
        MuiTextField: {
            styleOverrides: {
                root: {
                    "&.input-field": {
                        maxWidth: "480px",
                        width: "100%",
                        // backgroundColor: "var(--color2)",

                        "&.MuiFormControl-fullWidth": {
                            maxWidth: "100%",
                        },
                        "&:focus-visible": {
                            outline: "0",
                        },
                        "& .MuiInputBase-root": {
                            height: "36px",
                            fontSize: "14px",

                            "&:focus-visible": {
                                outline: "0",
                            },
                        },
                        "& .MuiOutlinedInput-root": {
                            "& input": {
                                padding: "0px 12px",
                                height: "36px",
                                border: "1px solid #ccc",
                                borderRadius: " 8px",
                                backgroundColor: "var(--color2) ",
                                "&:active": {
                                    borderColor: "var(--color1)",
                                    backgroundColor: "var(--color2)",
                                },
                                "&:focus": {
                                    borderColor: "var(--color1)",
                                    boxShadow: "0px 4px 8px 0px rgba(0, 70, 255, 0.15)",
                                },
                            },
                            "&.MuiInputBase-inputAdornedStart, &.MuiFilledInput-input": {
                                backgroundColor: "var(--color2)",
                            },
                            "& fieldset": {
                                display: "none",
                            },
                        },
                        "&.required ": {
                            position: "relative",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: "-1px",
                                left: "0",
                                width: "8px",
                                height: "8px",
                                background: `url(${requiredIcon}) top left no-repeat`,
                                zIndex: "2",
                            },
                        },
                        "& .Mui-disabled": {
                            cursor: "not-allowed",
                            "& input": {
                                border: "1px solid var(--border-color3)",
                                background: "var(--background-color2)",
                            },
                        },
                    },
                },
            },
        },
        // 인풋 텍스트 끝
        // 토글 버튼
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    "&.toggle-group": {
                        "& button": {
                            width: "75px",
                            height: "38px",
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: " -0.35px",
                            padding: "0",
                            color: "var(--font-color3)",
                            border: "1px solid #DDD",
                        },
                        "& .MuiToggleButtonGroup-firstButton": {
                            borderRadius: "8px 0px 0px 8px",
                        },
                        "& .MuiToggleButtonGroup-lastButton": {
                            borderRadius: "0px 8px 8px 0px",
                        },
                        "& .Mui-selected": {
                            backgroundColor: "var(--color1)",
                            color: "var(--color2)",
                            border: "1px solid var(--color1)",
                            fontWeight: "700",
                        },
                    },
                },
            },
        },
        //토글 버튼 끝
    },
});
export default theme;
