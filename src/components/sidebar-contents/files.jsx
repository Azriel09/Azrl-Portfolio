import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./files.css";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import clsx from "clsx";
export default function Files() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const DrawerToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="files-container">
      <div className="root-folder">
        <ArrowForwardIosIcon
          sx={{
            color: "white",
            transform: isCollapsed ? "rotate(90deg)" : "rotate(0)",
            cursor: "pointer",
          }}
          onClick={DrawerToggle}
        />
        <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
          Jhan_Marmel_Portfolio
        </Typography>
      </div>
    </div>
  );
}
