import SearchIcon from "@assets/icons/search-icon.svg?react";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import "./search-cars.scss";
import { Car } from "../../../graphql/generated";

interface SearchCarsProps {
  data: Car[];
  setCars: Dispatch<SetStateAction<Car[]>>;
}

const SearchCars = ({ setCars, data }: SearchCarsProps) => {
  const [valueInputSearch, setValueInputSearch] = useState<string>("");

  const onHandleClickSearch = useCallback(() => {
    setCars(
      data.filter((car: Car) => {
        const searchTerm = valueInputSearch.trim().toLowerCase();
        if (searchTerm.length === 0) {
          return true;
        }
        return car.brand.toLowerCase().includes(valueInputSearch.toLowerCase());
      })
    );
  }, [valueInputSearch, data]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onHandleClickSearch();
    }
  };

  return (
    <div className={"actions__search search"}>
      <input
        type="text"
        className="search__field"
        placeholder={"Найти авто"}
        value={valueInputSearch}
        onChange={(e) => setValueInputSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onHandleClickSearch} className="search__button button">
        <SearchIcon className={"button__icon"} />
      </button>
    </div>
  );
};

export default SearchCars;
