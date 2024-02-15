import "./PromotionItem.scss";

import first from "../../img/PromotionImg/first.jpg";
import second from "../../img/PromotionImg/second.jpg";
import third from "../../img/PromotionImg/third.jpg";

const PromotionItem = (props) => {
  const { name, price, img } = props;
  return (
    <li className="promotion__item">
      <div className="promotion__item_content">
        <img src={first} alt={`${name} image`} className="promotion__img" />
        <p className="promotion__name">{name}</p>
        <p className="promotion__price">{price}$</p>
      </div>
    </li>
  );
};

export default PromotionItem;
