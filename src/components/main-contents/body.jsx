import About from "../../pages/about";
import Projects from "../../pages/projects";
import Contact from "../../pages/contact";

export const PageSelector = (tab) => {
  switch (tab) {
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    case "projects":
      return <Projects />;
  }
};
