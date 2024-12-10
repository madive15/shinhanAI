import { styled } from "@mui/material";
const SearchContentStyle = styled("div", {
    name: "SearchContentStyle",
    slot: "Root",
})({
    "& .btn-root-wrap": {
        button: {
            width: "80px",
        },
    },
});
export default SearchContentStyle;
