import Menu from "../Menu/Menu";
import Coffee from "../Coffee/Coffee";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Menu color={"black"}></Menu>
        <Coffee color={"black"}></Coffee>
      </div>
    </footer>
  );
};

export default Footer;
