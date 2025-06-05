import SearchIcon from '@assets/icons/search-icon.svg?react';
import { useState } from 'react';
import './search-cars.scss';

const SearchCars = () => {
  const [valueInputSearch, setValueInputSearch] = useState<string>('');

  return (
    <div className={'actions__search search'}>
      <input
        type="text"
        className="search__field"
        placeholder={'Найти авто'}
        value={valueInputSearch}
        onChange={e => setValueInputSearch(e.target.value)}
      />
      <button className="search__button button">
        <SearchIcon className={'button__icon'} />
      </button>
    </div>
  );
};

export default SearchCars;
