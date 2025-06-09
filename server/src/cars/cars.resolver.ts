import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/car.entity';
import { PaginatedCars } from './dto/paginated-cars.dto';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query(() => PaginatedCars, { name: 'chunk_cars', description: 'Получить часть автомобилей' })
  findAll(
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
    @Args('page', { type: () => Int, nullable: true }) page?: number,
  ) {
    return this.carsService.findChunkCars(limit, page);
  }

  @Query(() => Car, {
    name: 'car',
    nullable: true,
    description: 'Получить автомобиль по id',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carsService.findOne(id);
  }
}
