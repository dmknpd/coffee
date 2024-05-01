import { Fragment } from "react";
import Header from "../Header/Header";
import AboutText from "./AboutText";
import Footer from "../Footer/Footer";

import "./About.scss";
import about_jpg from "../img/About_img.png";

const About = () => {
  return (
    <Fragment>
      <Header headerText={"Our Coffee"}></Header>
      <div className="about__content">
        <AboutText img={about_jpg}></AboutText>
      </div>
      <div className="about__line_wrapper">
        <div className="about__line"></div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default About;
