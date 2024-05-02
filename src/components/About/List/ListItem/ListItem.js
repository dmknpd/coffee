import "./ListItem.scss";
import third from "../../../img/PromotionImg/third.jpg";

const ListItem = (props) => {
  const { name, price, country, src } = props;
  return (
    <div className="list_item">
      <div className="list_item__content">
        <img src={src} alt="Coffee preview" className="list_item__img" />
        <div className="list_item__text_container">
          <p className="list_item__text">{name}</p>
          <p className="list_item__text">{country}</p>
          <p className="list_item__text">{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
