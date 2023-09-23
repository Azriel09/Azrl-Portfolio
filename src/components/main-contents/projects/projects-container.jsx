import { Divider } from "@mui/material";
import "./projects-styles.scss";
import ProjectTab from "./project-tab";

export default function ProjectsContainer() {
  const projects = [
    {
      title: "RyoEx",
      tools: ["js", "react", "mongodb", "nodejs", "mui", "aws"],
      desc: "A project I made in the bootcamp, an exchange rate site with graphs that has a Login/Signup/Reset Password feature, financial news, and a dashboard for easy access of their chosen currencies once they logged in on RyoEx site. It uses mongoDB for online database. Frontend is deployed in Netlify while backend is deployed in AWS EC2",
      links: [
        "https://github.com/Azriel09/client",
        "https://ryoex-change.netlify.app",
        "https://github.com/Azriel09/current-server",
      ],
      image: "https://i.imgur.com/uhroamP.png",
    },
    {
      title: "Jhan Marmel's Gallery",
      tools: ["js", "html", "css", "bootstrap"],
      desc: "A personal gallery project I made during the bootcamp. It showcases my hobby to take pictures of everything and utilizes grid css in order to be displayed properly no matter what the viewer device is.",
      links: [
        "https://github.com/Azriel09/project-1",
        "https://azriel09.github.io/project-1/index.html",
      ],
      image: "https://i.imgur.com/LvqZWEJ.png",
    },
    {
      title: "Azriel URL Shortener",
      tools: ["js", "react", "mui", "sass", "mysql", "aws", "nodejs"],
      desc: "A URL shortener that uses React as Frontend and NodeJS Express as Backend. For the online database, I chose Amazon's RDS Aurora MySQL. Both Frontend and Backend are deployed in Netlify",
      links: [
        "https://github.com/Azriel09/Az_short",
        "https://az-short.netlify.app/",
        "https://github.com/Azriel09/Az_short-backend",
      ],
      image: "https://i.imgur.com/2nqvAb4.png",
    },
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
      </div>
    </div>
  );
}
