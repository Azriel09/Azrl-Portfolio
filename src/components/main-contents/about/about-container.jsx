import { Divider } from "@mui/material";
import "./about-styles.scss";

export default function AboutContainer() {
  return (
    <div className="about-container">
      <div className="header"># About</div>
      <Divider className="divider" />
      <div className="about-desc">
        <div className="first-p">
          Hi! My name is <span className="first-name">Jhan Marmel</span> Ubay.
          While I was studying a different course, I decided to drop out of
          college and pursue a career in web development, and currently
          expanding my knowledge and experience in web development.
        </div>
        <div className="second-p">
          I am looking for internships as a web developer in order to gain
          real-world experience. I am incredibly passionate about the work that
          I do and would love to learn from actual professionals.
        </div>
        <div className="third-p"></div>
      </div>
      <div className="header">## Technologies</div>
      <Divider className="divider" />
      <div className="technologies">
        While these are some of the languages I am the most familiar with, I am
        constantly looking to expand my toolkit and am open to working with and
        learning new skills!
        <div className="tech-second">
          <span className="topic">Languages, Frameworks and Libraries: </span>
          Bootstrap, CSS, HTML, Javascript, Material UI, MongoDB, NodeJS, Python
        </div>
        <div className="tech-third">
          <span className="topic">Miscellaneuos: </span>Amazon AWS, Git
        </div>
      </div>
    </div>
  );
}
