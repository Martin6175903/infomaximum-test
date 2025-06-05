import './header.scss';
import Logo from '@assets/logo.svg?react';
import BurgerIcon from '@assets/icons/burger-icon.svg?react';
import FilledHeartIcon from '@assets/icons/filled-heart-icon.svg?react';

const Header = () => {
  return (
    <header className="header">
      <nav className={`header__nav nav`}>
        <a href="/" className={`nav__link link`}>
          <Logo className={'link__img'} />
        </a>
        <button className={`nav__button button`}>
          <BurgerIcon className={`button__icon`} />
          <span className={`button__text`}>Каталог</span>
        </button>
      </nav>
      <div className={`header__info info`}>
        <div className={`info__contacts`}>
          <a
            target="_blank"
            href="https://yandex.ru/maps/-/CHG8rE9l"
            className={`info__link info__link_address`}
          >
            Москва, Волгоградский пр-кт, 43, стр 1
          </a>
          <a
            className={`info__link info__link_tel`}
            target="_blank"
            href="tel:78005553535"
          >
            +7 800 555 35 35
          </a>
        </div>
        <a href="/favorites" className={`info__favorites favorites`}>
          <FilledHeartIcon className={`favorites__icon`} />
          <span className={`favorites__text`}>Избранное</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
