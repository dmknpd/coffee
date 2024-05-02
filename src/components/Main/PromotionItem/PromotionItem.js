import { Link } from "react-router-dom";
import "./PromotionItem.scss";

const PromotionItem = (props) => {
  const { id, name, price, src } = props;
  return (
    <Link to={`/${id}`} className="promotion__link">
      <li className="promotion__item">
        <div className="promotion__item_content">
          <img src={src} alt={`${name} image`} className="promotion__img" />
          <div className="promotion__item_text">
            <p className="promotion__name">{name}</p>
            <p className="promotion__price">{price}$</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PromotionItem;
