import styled from "@emotion/styled";
import { Tabs, Tab } from "@mui/material";

export const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .css-1kbxdc9-MuiTabs-root": { maxHeight: "50px" },
  "& .MuiTabs-root": { maxHeight: "50px" },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    transition: "none",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#80cbc4",
  },
});
export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "capitalize",
    fontSize: "17px",
    color: "#4e73aa",

    "&.MuiTab-root": {
      padding: "0",
      width: "200px",
      height: "30px",
    },
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);
