import { useState } from "react";

import ListItem from "./ListItem/ListItem";

import "./List.scss";

const List = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const searchFilter = (items) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterChange = (newFilter) => {
    if (newFilter === filter) {
      setFilter("");
    } else {
      setFilter(newFilter);
    }
  };

  const filteredData = filter
    ? data.filter((item) => item.country === filter)
    : data;
  const filteredAndSearchedData = search
    ? searchFilter(filteredData)
    : filteredData;

  const elements = filteredAndSearchedData.map((item) => {
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
              value={search}
              onChange={searchChange}
            />
          </div>
          <div className="list_menu__filters">
            <p className="list_menu__filters_label">Or filter</p>
            <div className="list_menu__filters_button_container">
              <button
                className="list_menu__filters_button"
                onClick={() => filterChange("Brazil")}
              >
                Brazil
              </button>
              <button
                className="list_menu__filters_button"
                onClick={() => filterChange("Kenya")}
              >
                Kenya
              </button>
              <button
                className="list_menu__filters_button"
                onClick={() => filterChange("Columbia")}
              >
                Columbia
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list__content">{elements}</div>
    </div>
  );
};

export default List;
