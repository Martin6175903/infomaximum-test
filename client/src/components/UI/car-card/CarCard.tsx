import { Car } from '../../../graphql/generated';
import './car-card.scss';
import Button from '../button/Button';
import EmptyHeartIcon from '@assets/icons/empty-heart-icon.svg?react';
import { checkingOnStrLen } from '../../../utils/checkingOnStrLen';

interface CarCardProps {
  car: Car
}

const CarCard = ({ car }: CarCardProps) => {

  return (
    <div className={'car-card'}>
      <div className="car-card__photo photo">
        {!car.availability && (
          <p className="photo__stock">Нет в наличии</p>
        )}
        <img src={`${VITE_SERVER_URL}${car.img_src}`} alt={car.brand} className={`photo__img ${car.availability ? "" : "photo__img--outstock"}`}/>
      </div>
      <div className="car-card__info info">
        <h3 className="info__mark">{checkingOnStrLen([car.brand, car.model], 15)}</h3>
        <div className="info__box box">
          <span className="box__model-year">Год: {car.model_year}</span>
          <span className="box__color">Цвет: {car.color}</span>
        </div>
        <p className="info__price">от {car.price}</p>
        <div className="info__actions actions">
          <Button availability={car.availability}>Купить</Button>
          <button className={'actions__button button'}>
            <EmptyHeartIcon className={'button__icon'}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;