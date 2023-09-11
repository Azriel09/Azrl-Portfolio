import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button } from "@mui/material";
import "./sidebar.css";
import { useState } from "react";
import Directory from "./sidebar-contents/directory";
export default function Sidebar({ HandleSelected }) {
  const [isOpen, setIsOpen] = useState(true);
  const SidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const [tabs, setTabs] = useState({
    about: false,
    projects: false,
    home: false,
    contact: false,
  });

  return (
    <div>
      <div className="button-container">
        <Button onClick={SidebarToggle} className="" disableRipple>
          <FileCopyIcon
            sx={{ width: "45px", height: "45px", color: "white" }}
          />
        </Button>
      </div>
      {isOpen ? (
        <div className="sidebar">
          <Directory HandleSelected={HandleSelected} />
        </div>
      ) : (
        <div className="sidebar-closed"></div>
      )}
    </div>
  );
}
