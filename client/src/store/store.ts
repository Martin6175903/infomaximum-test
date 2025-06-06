import { Car } from '../graphql/generated';
import { makeAutoObservable } from 'mobx';
import toast from 'react-hot-toast';

class FavoritesStore {
  favorites: Car[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addCarToFavorites(car: Car): void {
    if (this.favorites.some(item => item.id === car.id)) {
      toast.error('Машина уже в избранном!');
      return;
    }
    this.favorites = [...this.favorites, car];
    toast.success('Машина успешно добавлена в избранное!');
  }

  removeCarFromFavorites(id: number): void {
    const initialLength = this.favorites.length;
    this.favorites = this.favorites.filter((car) => car.id !== id);

    if (this.favorites.length === initialLength) {
      toast.error('Машины не было в избранном!');
      return;
    }
    toast.success('Машина успешно удалена из избранного!');
  }
}

export const favoritesStore = new FavoritesStore()