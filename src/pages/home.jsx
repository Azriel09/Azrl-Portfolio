import { Box, Tab, Tabs, Typography } from "@mui/material";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import PropTypes from "prop-types";
import "./home.scss";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";
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
export default function Home() {
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState();
  const handleChange = (event, newValue) => {
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
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {selected.map((tab) => {
              return (
                <Tab
                  disableRipple
                  sx={{ width: "200px", height: "50px", color: "white" }}
                  {...a11yProps(value)}
                  label={tab}
                  key={tab}
                />
              );
            })}
          </Tabs>
        </Box>
        {selected.map((tab, index) => {
          return (
            <CustomTabPanel value={value} index={index} key={index}>
              {tab}
            </CustomTabPanel>
          );
        })}
      </Box>
    </Box>
  );
}
