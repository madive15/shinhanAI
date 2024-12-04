import { styled } from "@mui/material";
const LayoutStyle = styled("div", {
    name: "LayoutStyle",
    slot: "Root",
})({
    // background: "blue",
    // "& .flexible-side-layout": {
    //     width: "200px",
    //     margin: "0 auto",
    //     background: "red",
    //     "&::after": {
    //         display: "block",
    //         content: '"aaaa"',
    //         width: "100px",
    //         background: "yellow",
    //     },
    // },
});
export default LayoutStyle;
