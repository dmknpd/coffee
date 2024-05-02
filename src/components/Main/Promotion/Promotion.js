import PromotionItem from "../PromotionItem/PromotionItem";

import "./Promotion.scss";

const Promotion = ({ data }) => {
  const elements = data
    .sort((a, b) => b.sold - a.sold) //sorted by sold items
    .slice(0, 3) // top 3
    .map((item) => {
      return <PromotionItem key={item.id} {...item} />;
    });
  return <ul className="promotion__items">{elements}</ul>;
};

export default Promotion;
