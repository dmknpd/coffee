import { Link } from "react-router-dom";

import "./Menu.scss";
import coffeeLogoWhite from "../img/LogoWhite.svg";
import coffeeLogoBlack from "../img/LogoBlack.svg";

const Menu = (color) => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <img
          src={color.color === "black" ? coffeeLogoBlack : coffeeLogoWhite}
          style={
            color.color === "black"
              ? { marginRight: "-5px", bottom: "-2px" }
              : null
          }
          alt="coffee logo"
          className="menu__item-icon"
        />
        <Link to="/" className="menu__item_link" style={color}>
          Coffee house
        </Link>
      </li>

      <li className="menu__item">
        <Link to="/about" className="menu__item_link" style={color}>
          Our coffee
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/" className="menu__item_link" style={color}>
          For your pleasure
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
