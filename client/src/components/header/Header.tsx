import "./header.scss";
import Logo from "@assets/logo.svg?react";
import BurgerIcon from "@assets/icons/burger-icon.svg?react";
import FilledHeartIcon from "@assets/icons/filled-heart-icon.svg?react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <nav className={`header__nav nav`}>
        <Link to="/" className={`nav__link link`}>
          <Logo className={"link__img"} />
        </Link>
        <button className={`nav__button button`}>
          <BurgerIcon className={`button__icon`} />
          <span className={`button__text`}>Каталог</span>
        </button>
      </nav>
      <div className={`header__info info`}>
        <div className={`info__contacts`}>
          <Link
            target="_blank"
            to="https://yandex.ru/maps/-/CHG8rE9l"
            className={`info__link info__link_address`}
          >
            Москва, Волгоградский пр-кт, 43, стр 1
          </Link>
          <Link
            className={`info__link info__link_tel`}
            target="_blank"
            to="tel:78005553535"
          >
            +7 800 555 35 35
          </Link>
        </div>
        <Link to="/favorites" className={`info__favorites`}>
          <FilledHeartIcon className={`favorites__icon`} />
          <span className={`favorites__text`}>Избранное</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
