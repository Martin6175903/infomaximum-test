import { Car } from "../../../graphql/generated";
import "./car-card.scss";
import Button from "../button/Button";
import EmptyHeartIcon from "@assets/icons/empty-heart-icon.svg?react";
import FilledHeartIcon from "@assets/icons/filled-heart-icon.svg?react";
import { checkingOnStrLen } from "../../../utils/checkingOnStrLen";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { observer } from "mobx-react-lite";
import { favoritesStore } from "../../../store/store";
import { useState } from "react";

interface CarCardProps {
  car: Car;
}

const CarCard = observer(({ car }: CarCardProps) => {
  const [isFavoriteCar, setIsFavoriteCar] = useState(
    !!favoritesStore.favorites.find((item) => item.id === car.id)
  );

  function isStockCar(isStock: boolean) {
    if (!isStock) {
      toast.error("Данного транспорта сейчас нет в коллекции.");
    }
  }

  function onHandleClickFavorite() {
    setIsFavoriteCar(!isFavoriteCar);
    if (isFavoriteCar) favoritesStore.removeCarFromFavorites(car.id);
    else favoritesStore.addCarToFavorites(car);
  }

  return (
    <div
      onClick={() => isStockCar(car.availability)}
      className={`car-card ${car.availability ? "" : "car-card--outstock"}`}
    >
      <Link
        onClick={(e) => !car.availability && e.preventDefault()}
        to={`/${car.availability ? `cars/${car.id}` : ""}`}
        className="car-card__photo photo"
      >
        {!car.availability && <p className="photo__stock">Нет в наличии</p>}
        <img
          src={`${VITE_SERVER_URL}${car.img_src}`}
          alt={car.brand}
          className={`photo__img ${
            car.availability ? "" : "photo__img--outstock"
          }`}
        />
      </Link>
      <div className="car-card__info info">
        <h3 className="info__mark">
          {checkingOnStrLen([car.brand, car.model], 15)}
        </h3>
        <div className="info__box box">
          <span className="box__model-year">Год: {car.model_year}</span>
          <span className="box__color">Цвет: {car.color}</span>
        </div>
        <p className="info__price">от {car.price}</p>
        <div className="info__actions actions">
          <Button availability={car.availability}>Купить</Button>
          <button
            onClick={onHandleClickFavorite}
            disabled={!car.availability}
            className={"actions__button button"}
          >
            {isFavoriteCar ? (
              <FilledHeartIcon className={"button__icon"} />
            ) : (
              <EmptyHeartIcon className={"button__icon"} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
});

export default CarCard;
