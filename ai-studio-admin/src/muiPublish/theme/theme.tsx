import { createTheme } from "@mui/material/styles";

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
      styleOverrides: {
        contained: {
          fontSize: "14px",
          letterSpacing: "-0.35px",
          backgroundColor: "#0046FF",
          lineHeight: "17px",
          color: "#FFFFFF",
          padding: "9px 16px",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: "#0039CE",
          },
          "&:active": {
            backgroundColor: "#002EA5",
          },
        },
        outlined: {
          fontSize: "14px",
          letterSpacing: "-0.35px",
          backgroundColor: "#FFF",
          lineHeight: "17px",
          color: "#0046FF",
          outline: "#0046FF",
          padding: "9px 16px",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: "#E8EEFF",
          },
          "&:active": {
            backgroundColor: "#D1DDFF",
          },
        },
      },
    },
  },
});
export default theme;
