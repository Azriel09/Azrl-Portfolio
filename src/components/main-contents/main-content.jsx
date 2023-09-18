import { Box, Typography } from "@mui/material";

import { useState } from "react";
import PropTypes from "prop-types";
import "./main-content.scss";
import { StyledTabs, StyledTab } from "./styled-tabs";

import { PageSelector } from "./page-selector";
import { useOutletContext } from "react-router-dom";
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  const [scroll, setScroll] = useState("hidden");
  const {
    activeTabs: [activeTabs, setActiveTabs],
    currentTab: [currentTab, setCurrentTab],
    HandleChange,
    TabIcons,
    isOpen,
  } = useOutletContext();

  // FOR TAB STYLING
  function isNavOpen(open) {
    if (open) {
      return "330px";
    } else {
      return "0px";
    }
  }

  const style = {
    ...(isOpen
      ? {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginLeft: "330px",
        }
      : {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginLeft: "70px",
        }),
  };
  const isProjectSelected = () => {
    if (activeTabs[currentTab] === "projects") {
      return "visible";
    } else {
      return "hidden";
    }
  };
  return (
    <Box sx={style}>
      <Box
        sx={{
          backgroundColor: "#292D3E",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            position: "fixed",
            backgroundColor: "#292d3e",
            width: "100%",
          }}
        >
          <StyledTabs value={currentTab} onChange={HandleChange}>
            {activeTabs.map((tab) => {
              return (
                <StyledTab
                  disableRipple
                  {...a11yProps(currentTab)}
                  label={TabIcons(tab)}
                  key={tab}
                />
              );
            })}
          </StyledTabs>
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          {activeTabs.map((tab, index) => {
            return (
              <CustomTabPanel
                value={currentTab}
                index={index}
                key={index}
                component={"span"}
              >
                {PageSelector(tab)}
              </CustomTabPanel>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
