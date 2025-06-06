import { Car } from '../graphql/generated';
import { makeAutoObservable } from 'mobx';
import favorites from '../pages/Favorites/Favorites';
import toast from 'react-hot-toast';

class FavoritesStore {
  favorites: Car[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addCarInFavorites(car: Car) {
    if (!this.favorites.find(item => item.id === car.id)) this.favorites.push(car);
    return toast.success('Машина успешно добавлена в избранное!')
  }

  removeCarFromFavorites(id: number) {
    this.favorites = this.favorites.filter((car) => car.id !== id)
    toast.success('Машина успешно удалена из избранного!')
  }
}

export default new FavoritesStore();