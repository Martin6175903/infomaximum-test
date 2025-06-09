import { Car } from '../../graphql/generated';
import { sortCars } from '../../utils/sortCars';
import { useMemo } from 'react';

export const useSortedCars = (cars: Car[], sortBy: string) => {
  return useMemo(() => sortCars(cars, sortBy), [cars, sortBy]);
};
