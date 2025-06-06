import { useQuery } from "@apollo/client";
import { Query } from "../../../graphql/generated";
import { GET_ALL_CARS } from "../../../graphql/query/car.graphql";

interface Cars {
  cars: Query["cars"];
}

export const useGetAllCars = () => {
  return useQuery<Cars>(GET_ALL_CARS);
};
