import { FC, useEffect, useState } from "react";
import SortCars from "../../components/actions-cars/sort-cars/SortCars";
import "./cars.scss";
import SearchCars from "../../components/actions-cars/search-cars/SearchCars";
import CarCard from "../../components/UI/car-card/CarCard";
import { useGetAllCars } from "../../hooks/queries/car/useGetAllCars";
import Wrapper from "../../components/UI/wrapper/Wrapper";
import { Car } from "../../graphql/generated";

const Cars: FC = () => {
  const { data, loading } = useGetAllCars();
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    if (!loading) setCars(data?.cars ? data.cars : []);
  }, [loading]);

  return (
    <Wrapper>
      <main className={"main"}>
        <div className={"main__actions actions"}>
          <SortCars cars={cars} setCars={setCars} />
          <SearchCars setCars={setCars} data={data?.cars ? data.cars : []} />
        </div>
        <div className={"main__cars"}>
          {loading
            ? "Loading..."
            : cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </main>
    </Wrapper>
  );
};

export default Cars;
