import { FC } from 'react';
import carsJSON from '../../fake_cars.json';
import { Query } from '../../graphql/generated';
import SortCars from '../../components/actions-cars/sort-cars/SortCars';
import './cars.scss';
import SearchCars from '../../components/actions-cars/search-cars/SearchCars';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../../graphql/query/car.graphql';

const Cars: FC = () => {
  const {data, loading, error} = useQuery<{cars: Query["cars"]}>(GET_ALL_CARS, {
    variables: {
      offset: 0,
      limit: 10,
    }
  });

  return (
    <main className={'main'}>
      <div className={'main__actions actions'}>
        <SortCars />
        <SearchCars />
      </div>
      <div>
        {loading ? "Loading..." : (
          data?.cars.map((car) => (
            <div key={car.id}>
              <img src={`${VITE_SERVER_URL}${car.img_src}`} alt="" />
            </div>
          ))
        )}
      </div>
      {/*<div>*/}
      {/*  {cars.map((car) => (*/}
      {/*    <div key={car.id}>*/}
      {/*      <div css={{ color: car.color.toLowerCase() }}>*/}
      {/*        {car.brand}*/}
      {/*        <img*/}
      {/*          src={car?.img_src ?? undefined}*/}
      {/*          alt={`${car.brand} ${car.model}`}*/}
      {/*          css={{ maxWidth: "100px" }}*/}
      {/*        />*/}
      {/*        <span>{car.price}</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </main>
  );
};

export default Cars;
