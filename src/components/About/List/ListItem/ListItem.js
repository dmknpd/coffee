import { Link } from "react-router-dom";

import "./ListItem.scss";

const ListItem = (props) => {
  const { id, name, price, country, src } = props;
  return (
    <Link to={`/${id}`} className="list_item">
      <div className="list_item__content">
        <img src={src} alt="Coffee preview" className="list_item__img" />
        <div className="list_item__text_container">
          <p className="list_item__text">{name}</p>
          <p className="list_item__text">{country}</p>
          <p className="list_item__text">{price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
