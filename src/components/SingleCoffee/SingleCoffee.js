import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import AboutText from "../About/AboutText";
import Footer from "../Footer/Footer";

import "../About/About.scss";
import singleCoffee_jpg from "../img/SingleCoffee.jpg";

const SingleCoffee = ({ data }) => {
  const { id } = useParams();
  const coffee = data[id];
  const country = coffee.country;
  const description = coffee.description;
  const price = coffee.price;

  return (
    <Fragment>
      <Header headerText={"Our Coffee"}></Header>
      <div className="about__content">
        <AboutText
          img={singleCoffee_jpg}
          title={"About it"}
          country={country}
          description={description}
          price={price}
        ></AboutText>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default SingleCoffee;
