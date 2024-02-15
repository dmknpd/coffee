import { Component, Fragment } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Promotion from "../Main/Promotion/Promotion";

import "./App.scss";
import Footer from "../Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Solimo Coffee Beans 2 kg", price: "10.73", sold: 10 },
        { name: "Presto Coffee Beans 1 kg", price: "15.99", sold: 15 },
        { name: "AROMISTICO Coffee 1 kg", price: "6.99", sold: 12 },
        { name: "Coffee 1 kg", price: "6.99", sold: 1 },
        { name: "A1 kg", price: "6.99", sold: 2 },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <Header></Header>
        <Main></Main>
        <Promotion data={this.state.data}></Promotion>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;
