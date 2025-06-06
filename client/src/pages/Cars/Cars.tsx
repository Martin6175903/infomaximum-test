import { FC } from 'react';
import SortCars from '../../components/actions-cars/sort-cars/SortCars';
import './cars.scss';
import SearchCars from '../../components/actions-cars/search-cars/SearchCars';
import CarCard from '../../components/UI/car-card/CarCard';
import { useGetAllCars } from '../../hooks/queries/car/useGetAllCars';
import { useGetCarById } from '../../hooks/queries/car/useGetCarById';

const Cars: FC = () => {
  const { data, loading } = useGetAllCars()

  return (
    <main className={'main'}>
      <div className={'main__actions actions'}>
        <SortCars />
        <SearchCars />
      </div>
      <div className={'main__cars'}>
        {loading ? "Loading..." : (
          data?.cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        )}
      </div>
    </main>
  );
};

export default Cars;
