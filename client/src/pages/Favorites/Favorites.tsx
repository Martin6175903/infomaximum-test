import Wrapper from "../../components/UI/wrapper/Wrapper";
import { favoritesStore } from "../../store/store";
import "./favorites.scss";
import FavoritesItems from "../../components/favorites-items/FavoritesItems";

const Favorites = () => {
  return (
    <Wrapper>
      <main className="favorites">
        <h1 className="favorites__title">
          Избранные товары — {favoritesStore.favorites.length} позиций
        </h1>
        <FavoritesItems />
      </main>
    </Wrapper>
  );
};

export default Favorites;
