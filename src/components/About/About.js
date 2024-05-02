import { Fragment } from "react";
import Header from "../Header/Header";
import AboutText from "./AboutText";
import Footer from "../Footer/Footer";
import List from "./List/List";

import "./About.scss";
import about_jpg from "../img/About_img.png";

const About = ({ data }) => {
  return (
    <Fragment>
      <Header headerText={"Our Coffee"}></Header>
      <div className="about__content">
        <AboutText img={about_jpg}></AboutText>
      </div>
      <div className="about__line_wrapper">
        <div className="about__line"></div>
      </div>
      <List data={data}></List>
      <Footer></Footer>
    </Fragment>
  );
};

export default About;
