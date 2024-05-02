import ListItem from "./ListItem/ListItem";

import "./List.scss";

const List = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <ListItem key={id} {...itemProps} />;
  });
  return (
    <div className="list">
      <div className="list_menu">
        <div className="list_menu__conatainer">
          <div className="list_menu__search">
            <label className="list_menu__label" htmlFor="list_menu__input">
              Lookiing for
            </label>
            <input
              type="text"
              className="list_menu__input"
              id="list_menu__input"
              placeholder="start typing here..."
            />
          </div>
          <div className="list_menu__filters">
            <p className="list_menu__filters_label">Or filter</p>
            <div className="list_menu__filters_button_container">
              <button className="list_menu__filters_button">Brazil</button>
              <button className="list_menu__filters_button">Kenya</button>
              <button className="list_menu__filters_button">Columbia</button>
            </div>
          </div>
        </div>
      </div>
      <div className="list__content">{elements}</div>
    </div>
  );
};

export default List;
