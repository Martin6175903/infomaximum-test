import { FC } from 'react';
import SortCars from '../../components/actions-cars/sort-cars/SortCars';
import './cars.scss';
import SearchCars from '../../components/actions-cars/search-cars/SearchCars';
import CarCard from '../../components/UI/car-card/CarCard';
import { useGetAllCars } from '../../hooks/queries/car/useGetAllCars';
import { useGetCarById } from '../../hooks/queries/car/useGetCarById';
import Wrapper from '../../components/UI/wrapper/Wrapper';

const Cars: FC = () => {
  const { data, loading } = useGetAllCars()

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Cars;
