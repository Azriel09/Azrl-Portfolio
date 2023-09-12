import { Box, Typography } from "@mui/material";
import Sidebar from "../sidebar";
import { useState } from "react";
import PropTypes from "prop-types";
import "./main-content.scss";
import { StyledTabs, StyledTab } from "./styled-tabs";
import { ReactComponent as JavascriptLogo } from "../../assets/javascript.svg";
import { ReactComponent as InfoLogo } from "../../assets/info.svg";
import CloseIcon from "@mui/icons-material/Close";
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
  const [activeTabs, setActiveTabs] = useState(["home"]);
  const [currentTab, setCurrentTab] = useState(0);
  const HandleChange = (event, newValue) => {
    console.log(newValue);
    setCurrentTab(newValue);
  };

  // FOR TAB STYLING
  const jsArr = ["home", "about", "projects"];
  const styles = {
    tabStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
    },
    iconStyles: { height: "25px", width: "25px" },
    closeIconStyles: { height: "20px", width: "20px" },
  };

  const HandleSelected = (tab) => {
    const tabs = ["projects", "home", "contact", "about"];

    if (tabs.includes(tab)) {
      if (activeTabs.indexOf(tab) === -1) {
        setCurrentTab(activeTabs.length);
      } else {
        // Switch to clicked tab in sidenav if it already exist
        setCurrentTab(activeTabs.indexOf(tab));
      }
      // Switch to clicked tab in sidenav if it doesnt exist yet
      if (!activeTabs.includes(tab)) {
        setActiveTabs([...activeTabs, tab]);
      }
    }
  };

  const HandleClose = (event, tab) => {
    // TO CLICK THROUGH THE PARENT ELEMENTS AND REACH THE CLOSE ICON BUTTON
    event.stopPropagation();

    const tabToRemove = tab;
    const indexOfTabToRemove = activeTabs.indexOf(tab);

    if (indexOfTabToRemove < currentTab) {
      setCurrentTab(currentTab - 1);
    }
    setActiveTabs(activeTabs.filter((tab) => tab !== tabToRemove));
  };

  function TabIcons(tab) {
    // IF TAB IS JS, USE JS ICON
    if (jsArr.includes(tab)) {
      return (
        <div style={styles.tabStyles}>
          <JavascriptLogo style={styles.iconStyles} />
          <div>
            {tab}
            <span style={{ textTransform: "lowercase" }}>.js</span>
          </div>
          <CloseIcon
            style={styles.closeIconStyles}
            onClick={(e) => HandleClose(e, tab)}
          />
        </div>
      );
    } else {
      // USE INFO ICON
      return (
        <div style={styles.tabStyles}>
          <InfoLogo style={styles.iconStyles} />
          <div>
            {tab}
            <span style={{ textTransform: "lowercase" }}>.md</span>
          </div>
          <CloseIcon
            style={styles.closeIconStyles}
            onClick={(e) => HandleClose(e, tab)}
          />
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
  );
}
