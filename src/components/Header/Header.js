import { Component } from "react";
import Menu from "../Menu/Menu";
import Coffee from "../Coffee/Coffee";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <header className="header__menu">
          <Menu></Menu>
        </header>
        <div className="header__content">
          <h1 className="header__title">Everything You Love About Coffee</h1>
          <Coffee></Coffee>
          <h2 className="header__text">
            We makes every day full of energy and taste
          </h2>
          <h2 className="header__text">Want to try our beans?</h2>
          <button className="header__button">More</button>
        </div>
      </header>
    );
  }
}

export default Header;
