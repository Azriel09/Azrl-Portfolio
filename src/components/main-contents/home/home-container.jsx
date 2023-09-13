import "./home-styles.scss";
import Divider from "@mui/material/Divider";
export default function HomeContainer() {
  return (
    <div className="home-container">
      <div className="greeting">
        Hello! I'm <span className="first-name">Jhan Marmel</span> C. Ubay!
      </div>
      <div className="brief-desc">
        An aspiring Web Developer<span className="blink">|</span>
      </div>
      <Divider className="divider" />
      <div className="introduction">
        <div className="line1">
          I'm a passionate and obsessive, web developer in love with building
          applications.
        </div>
        <div className="line2">
          Experienced with Javascript, Python, NodeJS, and ReactJS.
        </div>
        <div className="line3">
          This website, inspired by{" "}
          <span>
            <a href="https://code.visualstudio.com/" target="blank">
              VS Code
            </a>{" "}
            with the theme of{" "}
            <span>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme"
                target="blank"
              >
                Material Theme Palenight
              </a>
            </span>
          </span>
          , is an interactive overview of what I love, who I am, and the things
          that I've built.
        </div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
