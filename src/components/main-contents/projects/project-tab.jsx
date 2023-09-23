import "./projects-styles.scss";
import { ReactComponent as JavascriptLogo } from "../../../assets/javascript.svg";
import { ReactComponent as ReactLogo } from "../../../assets/react.svg";
import { ReactComponent as PythonLogo } from "../../../assets/python.svg";
import { ReactComponent as MongoDBLogo } from "../../../assets/mongodb.svg";
import { ReactComponent as NodeJSLogo } from "../../../assets/nodejs.svg";
import { ReactComponent as HTMLLogo } from "../../../assets/html.svg";
import { ReactComponent as CSSLogo } from "../../../assets/css.svg";
import { ReactComponent as BootstrapLogo } from "../../../assets/bootstrap.svg";
import { ReactComponent as AWSLogo } from "../../../assets/amazon.svg";
import { ReactComponent as SassLogo } from "../../../assets/sass.svg";
import { ReactComponent as MySQLLogo } from "../../../assets/mysql3.svg";
import MuiLogo from "../../../assets/mui.png";
export default function ProjectTab({ title, tools, desc, links, image }) {
  function projectTools(tool) {
    switch (tool) {
      case "js":
        return <JavascriptLogo className="javascript logo" />;

      case "mui":
        return <img src={MuiLogo} className="mui logo" />;
      case "nodejs":
        return <NodeJSLogo className="nodejs logo" />;
      case "mongodb":
        return <MongoDBLogo className="mongodb logo" />;

      case "react":
        return <ReactLogo className="react logo" />;
      case "python":
        return <PythonLogo className="python logo" />;
      case "html":
        return <HTMLLogo className="html logo" />;
      case "css":
        return <CSSLogo className="css logo" />;
      case "bootstrap":
        return <BootstrapLogo className="bootstrap logo" />;
      case "aws":
        return <AWSLogo className="aws logo" />;
      case "sass":
        return <SassLogo className="sass logo" />;
      case "mysql":
        return <MySQLLogo className="mysql logo" />;
    }
  }

  return (
    <>
      {tools && links ? (
        <div className="proj">
          <div className="proj-left">
            <div className="proj-title">## {title}</div>
            <div className="proj-tools">
              {tools.map((tool) => {
                return projectTools(tool);
              })}
            </div>
            <div className="proj-desc">{desc}</div>
            <div className="proj-links">
              <div className="proj-git">
                <a href={links[0]} target="blank">
                  [Github Repo]
                </a>
              </div>
              {links[2] ? (
                <div>
                  <a href={links[2]} target="blank">
                    [Backend Repo]
                  </a>
                </div>
              ) : null}
              <div className="proj-preview">
                <a href={links[1]} target="blank">
                  [Live Preview]
                </a>
              </div>
            </div>
          </div>
          <div className="proj-right">
            <img src={image} />
          </div>
        </div>
      ) : null}
    </>
  );
}
