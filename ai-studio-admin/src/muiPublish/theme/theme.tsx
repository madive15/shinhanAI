import { createTheme } from "@mui/material/styles";
import requiredIcon from "../../assets/images/svg/Icons-required.svg";
import requiredIconDisabled from "../../assets/images/svg/Icons-required-disabled.svg";
import { colors } from "@mui/material";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    sub1: true;
    sub2: true;
    secondary: true;
    primary: true;
    primaryBig: true;
    small: true;
    icon: true;
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
      styleOverrides: {},
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#0046FF",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "-0.35px",
            lineHeight: "17px",
            padding: "9px 16px",
            borderRadius: "6px",
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
            lineHeight: "17px",
            padding: "9px 16px",
            borderRadius: "6px",
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
            lineHeight: "17px",
            padding: "9px 16px",
            borderRadius: "6px",
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
            lineHeight: "17px",
            padding: "9px 16px",
            borderRadius: "6px",
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
              background:
                "linear-gradient(97deg, #114ce7 1.56%, #429adc 100%);",
            },
            "&:active": {
              background:
                "linear-gradient(97deg, #1045d0 1.56%, #3a8ac6 100%);",
            },
          },
        },
        {
          props: { variant: "small" },
          style: {
            backgroundColor: "#FFF",
            color: "#666",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "-0.3px",
            lineHeight: "14px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #666",
            minWidth: "unset",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
            "&:active": {
              backgroundColor: "rgba(0, 0, 0, 0.10)",
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
      ],
    },
    // 버튼 끝
    // 체크박스
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0px",
          marginBottom: "-4px",
          marginRight: "6px",
          "& svg": {},
          "&.Mui-disabled svg ": {
            fill: "#DDE6F3",
          },
          "&.Mui-disabled svg path:nth-of-type(1)": {
            stroke: "#DDE6F3",
          },
          "&.Mui-disabled svg path:nth-of-type(2)": {
            stroke: "#BCCCE2",
          },
          // "&.Mui-checked": {
          //   "& svg": {
          //     boxShadow: "0px 4px 6px rgba(0, 70, 255, 0.1)", // checked 상태의 box-shadow
          //   },
          // },
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

          "&.Mui-disabled svg ": {
            fill: "#DDE6F3",
            "& rect": {
              stroke: "#DDE6F3",
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
          border: "1px solid var(--border-color1)",
          padding: "0",
          fontSize: "14px",
          lineHeight: "18px",
          letterSpacing: "-0.35px",
          maxWidth: "480px",
          minWidth: "80px",
          width: "100%",
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
            "&.required ": {
              borderTopLeftRadius: 0,
              background: `rgba(0, 0, 0, 0.02) url(${requiredIconDisabled}) top left no-repeat`,
            },
            "& svg ": {
              fill: "#888888",
            },
          },
          "&.required ": {
            borderTopLeftRadius: 0,
            background: `var(--color2) url(${requiredIcon}) top left no-repeat`,
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
    MuiMenu: {
      styleOverrides: {
        list: {
          border: " 1px solid var(--color1)",
          padding: "12px",
          borderRadius: "4px",
          minWidth: "80px",
          marginTop: "4px",
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
            "&.large": {
              "& .MuiPaper-root": {
                width: "680px",
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
              },
            },
          },
        },
      },
    },
    //로우 테이블 끝
  },
});
export default theme;
