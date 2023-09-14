import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button } from "@mui/material";
import "./sidebar.css";
import { useState, useEffect } from "react";
import Directory from "./sidebar-contents/directory";
import { Outlet } from "react-router-dom";
import { ReactComponent as InfoLogo } from "../assets/info.svg";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as JavascriptLogo } from "../assets/javascript.svg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTabs, setActiveTabs] = useState(["home"]);
  const [currentTab, setCurrentTab] = useState(0);

  const jsArr = ["home", "about", "projects"];
  const styles = {
    tabStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
    },
    iconStyles: { height: "25px", width: "25px" },
  };

  const SidebarToggle = () => {
    setIsOpen(!isOpen);
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

  const HandleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const TabIcons = (tab) => {
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
            className="close-icon"
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
            className="close-icon"
            onClick={(e) => HandleClose(e, tab)}
          />
        </div>
      );
    }
  };
  return (
    <div className="sidebar-container">
      <div className="button-container">
        <Button onClick={SidebarToggle} className="" disableRipple>
          <FileCopyIcon
            sx={{ width: "45px", height: "45px", color: "white" }}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className="sidebar"
          style={{
            maxWidth: "360px",
            backgroundColor: "#3d435b",
            height: "100vh",
          }}
        >
          <Directory HandleSelected={HandleSelected} />
        </div>
      ) : (
        <div className="sidebar-closed"></div>
      )}
      <Outlet
        context={{
          activeTabs: [activeTabs, setActiveTabs],
          currentTab: [currentTab, setCurrentTab],
          HandleSelected,
          HandleClose,
          HandleChange,
          TabIcons,
        }}
      />
    </div>
  );
}
