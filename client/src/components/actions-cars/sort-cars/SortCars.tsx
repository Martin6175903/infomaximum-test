import SortIcon from "@assets/icons/sort-icon.svg?react";
import { useState } from 'react';
import './sort-cars.scss';

const sortItems = [
  { label: 'Сначала в наличии', value: 'availability' },
  { label: 'По имени (A-Z)', value: 'brand' },
  { label: 'По имени (Z-A)', value: 'brand-reverse' },
  { label: 'Сначала новее', value: 'date-newest' },
  { label: 'Сначала старше', value: 'date-oldest' },
  { label: 'Сначала дешевле', value: 'price-cheaper' },
  { label: 'Сначала дороже', value: 'price-expensively' }
]

const SortCars = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [currentItemSelect, setCurrentItemSelect] = useState(sortItems[0]);
  
  return (
    <div className={"actions__sort sort"}>
      <button onClick={() => setIsOpenSelect(!isOpenSelect)} className={"sort__button button"}>
        <SortIcon className={"button__icon"} />
        <span className="button__text">{currentItemSelect.label}</span>
      </button>
      <ul className={`sort__list list ${isOpenSelect ? "select-open": ""}`}>
        {sortItems.map((item) => (
          <li onClick={() => {
            setCurrentItemSelect(item);
            setIsOpenSelect(false);
          }} data-sort={item.value} className={"list__item"} key={item.value}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortCars;