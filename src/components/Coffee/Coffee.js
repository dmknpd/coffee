import { Component } from "react";

import "./Coffee.scss";
import CoffeeWhite from "../img/CoffeeWhite.svg";
import CoffeeBlack from "../img/CoffeeBlack.svg";

class Coffee extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className="coffee">
        <div
          className="coffee__line"
          style={{ border: `1px solid ${color}` }}
        ></div>
        <img
          src={color === "black" ? CoffeeBlack : CoffeeWhite}
          alt="coffee icon"
          className="coffee__icon"
        />
        <div
          className="coffee__line"
          style={{ border: `1px solid ${color}` }}
        ></div>
      </div>
    );
  }
}

export default Coffee;
