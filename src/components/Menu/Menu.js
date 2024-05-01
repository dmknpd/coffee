import { Component } from "react";

import "./Menu.scss";
import coffeeLogoWhite from "../img/LogoWhite.svg";
import coffeeLogoBlack from "../img/LogoBlack.svg";

class Menu extends Component {
  render() {
    const { color } = this.props;
    return (
      <ul
        className="menu"
        style={color === "black" ? { color: "black" } : { color: "white" }}
      >
        <li className="menu__item">
          <img
            src={color === "black" ? coffeeLogoBlack : coffeeLogoWhite}
            style={
              color === "black" ? { marginRight: "-5px", bottom: "-2px" } : null
            }
            alt="coffee logo"
            className="menu__item-icon"
          />
          Coffee house
        </li>

        <li className="menu__item">Our coffee</li>
        <li className="menu__item">For your pleasure</li>
      </ul>
    );
  }
}

export default Menu;
