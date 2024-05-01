import "./PromotionItem.scss";

const PromotionItem = (props) => {
  const { name, price, src } = props;
  return (
    <li className="promotion__item">
      <div className="promotion__item_content">
        <img src={src} alt={`${name} image`} className="promotion__img" />
        <p className="promotion__name">{name}</p>
        <p className="promotion__price">{price}$</p>
      </div>
    </li>
  );
};

export default PromotionItem;
