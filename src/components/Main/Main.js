import { Component } from "react";
import Coffee from "../Coffee/Coffee";

import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="main__content">
          <h3 className="main__title">About Us</h3>
          <Coffee color={"black"}></Coffee>
          <div className="main__text_container">
            <p className="main__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
            <p className="main__text">
              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
