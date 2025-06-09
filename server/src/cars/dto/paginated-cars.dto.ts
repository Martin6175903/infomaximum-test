import { Car } from '../entities/car.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Пагинированный список автомобилей с информацией о страницах' })
export class PaginatedCars {
  @Field(() => [Car], { description: 'Массив автомобилей на текущей странице' })
  cars: Car[];

  @Field(() => Int, { description: 'Количество страниц автомобилей' })
  totalPages: number;
}
