import { FC } from "react";
import carsJSON from "../../fake_cars.json";
import { Query } from "../../graphql/generated";
import SortCars from '../../components/actions-cars/sort-cars/SortCars';
import './cars.scss';
import SearchCars from '../../components/actions-cars/search-cars/SearchCars';

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;

  return (
    <main className={'main'}>
      <div className={'main__actions actions'}>
        <SortCars/>
        <SearchCars/>
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
