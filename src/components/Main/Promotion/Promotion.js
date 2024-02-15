import PromotionItem from "../PromotionItem/PromotionItem";

import "./Promotion.scss";

const Promotion = ({ data }) => {
  // const elements = data.map((item) => {
  //   const { id, ...itemProps } = item;
  //   return <PromotionItem key={id} {...itemProps} />;
  // });
  const elements = data
    .sort((a, b) => b.sold - a.sold) //sorted by sold items
    .slice(0, 3) // top 3
    .map((item) => {
      const { id, ...itemProps } = item;
      return <PromotionItem key={id} {...itemProps} />;
    });
  return <ul className="promotion__items">{elements}</ul>;
};

export default Promotion;
