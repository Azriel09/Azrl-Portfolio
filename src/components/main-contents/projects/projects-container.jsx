import { Divider } from "@mui/material";
import "./projects-styles.scss";
import RyoEx from "../../../assets/project-images/ryoex.png";
import Discord from "../../../assets/project-images/discord.png";
import { ReactComponent as JavascriptLogo } from "../../../assets/javascript.svg";
import { ReactComponent as ReactLogo } from "../../../assets/react.svg";
import { ReactComponent as PythonLogo } from "../../../assets/python.svg";
import { ReactComponent as MongoDBLogo } from "../../../assets/mongodb.svg";
import { ReactComponent as NodeJSLogo } from "../../../assets/nodejs.svg";
import MuiLogo from "../../../assets/mui.png";
import ProjectTab from "./project-tab";
export default function ProjectsContainer() {
  const projects = [
    {
      title: "RyoEx",
      tools: ["js", "react", "mongodb", "nodejs", "mui"],
      desc: "A project I made in the bootcamp, an exchange rate site with graphs that has a Login/Signup/Reset Password feature, and financial news and for easy access of their chosen currencies once they logged in on RyoEx site. It uses mongoDB as a database.",
      links: [
        "https://github.com/Azriel09/client",
        "https://ryoex-change.netlify.app",
      ],
      image: "../../../src/assets/project-images/ryoex.png",
    },
    { title: "Azriel Bot", tools: ["python"] },
  ];
  return (
    <div className="projects-container">
      <div className="header"># Personal Projects</div>
      <Divider className="divider" />
      <div className="intro">
        Below is a selection of some recent projects that I have worked on. For
        more detail on everything that I have done, as well as what I am
        currently working on, check out my GitHub at{" "}
        <a href="https://github.com/Azriel09" target="blank">
          https://github.com/Azriel09
        </a>
      </div>
      <div className="projects-list">
        {" "}
        {projects.map((proj) => {
          return (
            <ProjectTab
              title={proj.title}
              tools={proj.tools}
              desc={proj.desc}
              links={proj.links}
              image={proj.image}
            />
          );
        })}
        {/* DISCORD BOT */}
        <div className="proj">
          <div className="proj-left">
            <div className="proj-title">## Discord Bot</div>
            <div className="proj-tools">
              <PythonLogo className="python logo" />
            </div>
            <div className="proj-desc">
              A simple discord bot that uses reddit API to send Manga chapters
              to a channel and mentions the user.
            </div>
            <div className="proj-links"></div>
          </div>
          <div className="proj-right">
            <img src={Discord} />
          </div>
        </div>
      </div>
    </div>
  );
}
