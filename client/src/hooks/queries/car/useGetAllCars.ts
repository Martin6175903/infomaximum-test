import { useQuery } from '@apollo/client';
import { Query } from '../../../graphql/generated';
import { GET_ALL_CARS } from '../../../graphql/query/car.graphql';

interface Cars {
  chunk_cars: Query['chunk_cars'];
}

export const useGetAllCars = (limit?: number, page?: number) => {
  return useQuery<Cars>(GET_ALL_CARS, {
    variables: {
      limit,
      page
    }
  });
};
