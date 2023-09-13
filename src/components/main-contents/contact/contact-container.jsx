import { Divider } from "@mui/material";
import "./contact-styles.scss";

export default function ContactContainer() {
  return (
    <div className="contact-container">
      <div className="header"># Contact</div>
      <Divider className="divider" />
      <div className="first-p">
        If you're interested in reaching out, please reach out via any of the
        links below!
      </div>

      <div className="links">
        <div className="main">
          [<span>Email</span>] (
          <a href="mailto:azriel@jhanmarmel.com">azriel@jhanmarmel.com</a>)
        </div>
        <div className="main">
          [<span>Github</span>] (
          <a href="https://github.com/Azriel09" target="blank">
            https://github.com/Azriel09
          </a>
          )
        </div>
      </div>
    </div>
  );
}
