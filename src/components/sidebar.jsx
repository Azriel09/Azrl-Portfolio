import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button } from "@mui/material";
import "./sidebar.css";
import { useState } from "react";
import Files from "./sidebar-contents/files";
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
          <Files HandleSelected={HandleSelected} />
        </div>
      ) : null}
    </div>
  );
}
