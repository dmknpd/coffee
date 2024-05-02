import { Fragment } from "react";
import Header from "../Header/Header";
import AboutText from "../About/AboutText";
import Footer from "../Footer/Footer";
import List from "../About/List/List";

import "../About/About.scss";
import pleasure_jpg from "../img/Pleasure.png";

const Pleasure = ({ data }) => {
  return (
    <Fragment>
      <Header headerText={"For your pleasure"}></Header>
      <div className="about__content">
        <AboutText img={pleasure_jpg} title={"About our goods"}></AboutText>
      </div>
      <div className="about__line_wrapper">
        <div className="about__line"></div>
      </div>
      <List data={data}></List>
      <Footer></Footer>
    </Fragment>
  );
};

export default Pleasure;
