import { Fragment } from "react";
import Header from "../Header/Header";
import MainText from "./MainText";
import Promotion from "../Main/Promotion/Promotion";
import Footer from "../Footer/Footer";

const Main = ({ data }) => {
  return (
    <Fragment>
      <Header main={true}></Header>
      <MainText></MainText>
      <Promotion data={data}></Promotion>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
