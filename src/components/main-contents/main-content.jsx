import { Box, Tab, Tabs, Typography } from "@mui/material";
import Sidebar from "../sidebar";
import { useState } from "react";
import PropTypes from "prop-types";
import "./main-content.css";
import { StyledTabs, StyledTab } from "./styled-tabs";
import { ReactComponent as JavascriptLogo } from "../../assets/javascript.svg";
import { ReactComponent as InfoLogo } from "../../assets/info.svg";
import { PageSelector } from "./body";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function MainContent() {
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState();
  const HandleChange = (event, newValue) => {
    setValue(newValue);
  };
  const HandleSelected = (tab) => {
    if (
      tab === "projects" ||
      tab === "home" ||
      tab === "contact" ||
      tab === "about"
    ) {
      if (selected.indexOf(tab) === -1) {
        setValue(selected.length);
      } else {
        // Switch to clicked tab in sidenav if it already exist
        setValue(selected.indexOf(tab));
      }
      if (!selected.includes(tab)) {
        setSelected([...selected, tab]);
      }
    }
    // Switch to clicked tab in sidenav if it doesnt exist yet
  };

  function TabIcons(tab) {
    const jsArr = ["home", "about", "projects"];
    if (jsArr.includes(tab)) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <JavascriptLogo style={{ height: "25px", width: "25px" }} />
          {tab}
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <InfoLogo style={{ height: "25px", width: "25px" }} />
          {tab}
        </div>
      );
    }
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Sidebar HandleSelected={HandleSelected} />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#292D3E",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabs
            value={value}
            onChange={HandleChange}
            aria-label="basic tabs example"
          >
            {selected.map((tab) => {
              return (
                <StyledTab
                  disableRipple
                  {...a11yProps(value)}
                  label={TabIcons(tab)}
                  key={tab}
                />
              );
            })}
          </StyledTabs>
        </Box>
        {selected.map((tab, index) => {
          return (
            <CustomTabPanel value={value} index={index} key={index}>
              {PageSelector(tab)}
            </CustomTabPanel>
          );
        })}
      </Box>
    </Box>
  );
}
