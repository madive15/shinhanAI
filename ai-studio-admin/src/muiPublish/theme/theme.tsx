import { createTheme } from "@mui/material/styles";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    sub1: true;
    sub2: true;
    secondary: true;
    primary: true;
    primaryBig: true;
    small: true;
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
      ],
    },
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
        },
      },
    },
  },
});
export default theme;
