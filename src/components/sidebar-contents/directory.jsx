import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./directory.scss";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import JavascriptLogo from "../../assets/javascript.svg";
import InfoLogo from "../../assets/info.svg";

export default function Directory({ HandleSelected }) {
  const [selected, setSelected] = useState("root");
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);
  const [isCollapsed3, setIsCollapsed3] = useState(false);

  const RootDirectoryToggle = () => {
    setIsCollapsed1(!isCollapsed1);
  };

  const SrcDirectoryToggle = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  const ComponentsDirectoryToggle = () => {
    setIsCollapsed3(!isCollapsed3);
  };

  const HandleChange = (event, newSelected) => {
    if (newSelected !== null) {
      setSelected(newSelected);
      HandleSelected(newSelected);
    }
  };

  return (
    <div className="files-container">
      <h3>EXPLORER</h3>

      <ToggleButtonGroup
        orientation="vertical"
        exclusive
        onChange={HandleChange}
        value={selected}
        className="directory"
      >
        {/* THE LINES THAT SHOW UP WHEN DIRECTORY IS OPENED, IDK WHAT TO CALL THEM */}
        <div className="line-container">
          <div className="line-under-portfolio"></div>
          <div className="line-under-src"></div>
          <div className="line-under-components"></div>
        </div>
        {/* ROOT */}
        <ToggleButton
          disableRipple
          sx={{
            border: "none",
            height: "30px",
          }}
          value="root"
          aria-label="root"
        >
          <Box className="root-folder folder" onClick={RootDirectoryToggle}>
            <ArrowForwardIosIcon
              sx={{
                color: "#94959b",
                width: "15px",
                height: "15px",
                transform: isCollapsed1 ? "rotate(90deg)" : "rotate(0)",
              }}
            />
            <Typography
              sx={{
                textTransform: "uppercase",
              }}
            >
              Jhan_Marmel_Portfolio
            </Typography>
          </Box>
        </ToggleButton>

        {/* SRC */}
        {isCollapsed1 ? (
          <ToggleButton
            disableRipple
            sx={{ border: "none", height: "30px" }}
            value="src"
            aria-label="src"
          >
            <Box className="src-folder folder" onClick={SrcDirectoryToggle}>
              <ArrowForwardIosIcon
                sx={{
                  color: "#94959b",
                  width: "15px",
                  height: "15px",
                  transform: isCollapsed2 ? "rotate(90deg)" : "rotate(0)",
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  textTransform: "lowercase",
                }}
              >
                src
              </Typography>
            </Box>
          </ToggleButton>
        ) : null}

        {/* COMPONENTS */}
        {isCollapsed2 && isCollapsed1 ? (
          <ToggleButton
            disableRipple
            sx={{ border: "none", height: "30px" }}
            value="components"
            aria-label="components"
          >
            {isCollapsed3 && isCollapsed2 ? (
              <div>
                <div
                  style={{
                    width: "1px",
                    height: "120px",
                    position: "absolute",
                    backgroundColor: "gray",
                    left: "38px",
                    top: "-1px",
                  }}
                ></div>
                <div
                  style={{
                    width: "1px",
                    height: "60px",
                    position: "absolute",
                    backgroundColor: "gray",
                    left: "58px",
                    top: "25px",
                  }}
                ></div>
              </div>
            ) : (
              <div
                style={{
                  width: "1px",
                  height: "60px",
                  position: "absolute",
                  backgroundColor: "gray",
                  left: "38px",
                  top: "-1px",
                }}
              ></div>
            )}
            <Box
              className="components-folder folder"
              onClick={ComponentsDirectoryToggle}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: "#94959b",
                  width: "15px",
                  height: "15px",
                  transform: isCollapsed3 ? "rotate(90deg)" : "rotate(0)",
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  textTransform: "lowercase",
                }}
              >
                components
              </Typography>
            </Box>
          </ToggleButton>
        ) : null}

        {/* AboutJS */}
        {isCollapsed3 && isCollapsed2 && isCollapsed1 ? (
          <ToggleButton
            disableRipple
            sx={{ border: "none", height: "30px" }}
            value="about"
            aria-label="about"
          >
            <Box className="about-file file folder">
              {" "}
              <img src={JavascriptLogo} className="icon" />
              <Typography
                sx={{
                  textTransform: "capitalize",
                }}
              >
                About.<span style={{ textTransform: "lowercase" }}>js</span>
              </Typography>
            </Box>
          </ToggleButton>
        ) : null}
        {/* ProjectsJS */}
        {isCollapsed3 && isCollapsed2 && isCollapsed1 ? (
          <ToggleButton
            disableRipple
            sx={{ border: "none", height: "30px" }}
            value="projects"
            aria-label="projects"
          >
            <Box className="projects-file file folder">
              {" "}
              <img src={JavascriptLogo} className="icon" />
              <Typography
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Projects.<span style={{ textTransform: "lowercase" }}>js</span>
              </Typography>
            </Box>
          </ToggleButton>
        ) : null}
        {/* HomeJS */}
        {isCollapsed2 && isCollapsed1 ? (
          <ToggleButton
            disableRipple
            sx={{ border: "none", height: "30px" }}
            value="home"
            aria-label="home"
          >
            <Box className="home-file file folder">
              <img src={JavascriptLogo} className="icon" />
              <Typography
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Home.<span style={{ textTransform: "lowercase" }}>js</span>
              </Typography>
            </Box>
          </ToggleButton>
        ) : null}

        {/* CONTACT */}
        {isCollapsed1 ? (
          <ToggleButton
            disableRipple
            sx={{ border: "none", height: "30px" }}
            value="contact"
            aria-label="contact"
          >
            <Box className="contact-file file folder">
              <img src={InfoLogo} className="icon" />
              <Typography
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Contact.<span style={{ textTransform: "lowercase" }}>md</span>
              </Typography>
            </Box>
          </ToggleButton>
        ) : null}
      </ToggleButtonGroup>
    </div>
  );
}
