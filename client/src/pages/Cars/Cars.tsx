import { FC, useEffect, useState } from "react";
import SortCars from "../../components/actions-cars/sort-cars/SortCars";
import "./cars.scss";
import SearchCars from "../../components/actions-cars/search-cars/SearchCars";
import CarCard from "../../components/UI/car-card/CarCard";
import { useGetAllCars } from "../../hooks/queries/car/useGetAllCars";
import Wrapper from "../../components/UI/wrapper/Wrapper";
import { Car } from "../../graphql/generated";
import { useParams } from 'react-router';
import Pagination from '../../components/pagination/Pagination';

const Cars: FC = () => {
  const params = useParams<{ pageId: string }>();

  const { data, loading } = useGetAllCars(4, params.pageId && !isNaN(+params.pageId) ? +params.pageId : 1);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    if (!loading) setCars(data?.chunk_cars.cars ? data.chunk_cars.cars : []);
  }, [loading]);

  return (
    <Wrapper>
      <main className={"main"}>
        <div className={"main__actions actions"}>
          <SortCars cars={cars} setCars={setCars} />
          <SearchCars setCars={setCars} data={data?.chunk_cars.cars ? data.chunk_cars.cars : []} />
        </div>
        <div className={"main__cars"}>
          {loading
            ? "Loading..."
            : cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
        <Pagination totalPages={data?.chunk_cars.totalPages || 1}/>
      </main>
    </Wrapper>
  );
};

export default Cars;
