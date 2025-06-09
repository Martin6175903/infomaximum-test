import { Injectable } from '@nestjs/common';
import carsJSON from './cars.json';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  findChunkCars(limit?: number, page?: number) {
    const totalPages = Math.ceil(carsJSON.length / (limit ? limit : 1));

    const cars =
      limit && page
        ? carsJSON.slice((page - 1) * limit, (page - 1) * limit + limit)
        : carsJSON;

    return { cars, totalPages };
  }

  findOne(id: number): Car | undefined {
    return carsJSON.find(car => car.id === id);
  }
}
