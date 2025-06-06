import { favoritesStore } from "../../store/store";
import Button from "../../components/UI/button/Button";
import DeleteIcon from "@assets/icons/delete-icon.svg?react";
import { observer } from "mobx-react-lite";
import "./favorites-items.scss";

const FavoritesItems = observer(() => {
  return (
    <div className="favorites__items">
      {favoritesStore.favorites.map((favorite) => (
        <div className="favorites__item" key={favorite.id}>
          <div className="favorites__img-container">
            <img
              className="favorites__img"
              src={`${VITE_SERVER_URL}${favorite.img_src}`}
              alt={`${favorite.brand} ${favorite.model}`}
            />
          </div>
          <div className="favorites__info">
            <h3 className="favorites__car-title">
              {favorite.brand} {favorite.model}
            </h3>
            <p className="favorites__description">{favorite.description}</p>
            <div className="favorites__specs">
              <p className="favorites__spec">Год: {favorite.model_year}</p>
              <p className="favorites__spec">Цвет: {favorite.color}</p>
              <p className="favorites__spec">от {favorite.price} ₽</p>
            </div>
            <div className="favorites__actions">
              <Button width={259}>Выбрать комплектацию</Button>
              <button
                className="favorites__delete-button"
                onClick={() =>
                  favoritesStore.removeCarFromFavorites(favorite.id)
                }
              >
                <DeleteIcon className="favorites__delete-icon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default FavoritesItems;
