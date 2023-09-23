import styled from "@emotion/styled";
import { Tabs, Tab } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";

export const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
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

    "& .hover": {
      color: "#fff",
    },
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
