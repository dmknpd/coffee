import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Coffee from "../Coffee/Coffee";

import "./Header.scss";

const Header = (props) => {
  return (
    <header className={props.headerText ? "about_header" : "header"}>
      <header className="header__menu">
        <Menu></Menu>
      </header>
      {props.main ? (
        <div className="header__content">
          <h1 className="header__title">Everything You Love About Coffee</h1>
          <Coffee></Coffee>
          <h2 className="header__text">
            We makes every day full of energy and taste
          </h2>
          <h2 className="header__text">Want to try our beans?</h2>
          <Link to="/about" className="menu__item_link">
            <button className="header__button">More</button>
          </Link>
        </div>
      ) : (
        <div className="header__content_about">
          <h1 className="header__title">{props.headerText}</h1>
        </div>
      )}
    </header>
  );
};

export default Header;
