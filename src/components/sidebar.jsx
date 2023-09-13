import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button } from "@mui/material";
import "./sidebar.css";
import { useState, useEffect } from "react";
import Directory from "./sidebar-contents/directory";
export default function Sidebar({ HandleSelected, overflow }) {
  const [isOpen, setIsOpen] = useState(true);
  const [navHeight, setNavHeight] = useState({
    maxWidth: "360px",
    backgroundColor: "#3d435b",
    height: "100%",
  });

  // Changes sidebar height when Project tab is selected
  useEffect(() => {
    if (overflow === "projects") {
      setNavHeight({ ...navHeight, ["height"]: "150%" });
    } else {
      setNavHeight({ ...navHeight, ["height"]: "100%" });
    }
  }, [overflow]);
  const SidebarToggle = () => {
    setIsOpen(!isOpen);
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
        <div className="sidebar" style={navHeight}>
          <Directory HandleSelected={HandleSelected} />
        </div>
      ) : (
        <div className="sidebar-closed"></div>
      )}
    </div>
  );
}
