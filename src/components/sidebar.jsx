import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button } from "@mui/material";
import "./sidebar.css";
import { useState } from "react";
import Files from "./sidebar-contents/files";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const SidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="button-container">
        <Button onClick={SidebarToggle} className="" disableRipple>
          <FileCopyIcon
            sx={{ width: "40px", height: "40px", color: "white" }}
          />
        </Button>
      </div>
      {isOpen ? (
        <div className="sidebar">
          <Files />
        </div>
      ) : null}
    </div>
  );
}
