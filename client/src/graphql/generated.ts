export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  /** Наличие автомобиля */
  availability: Scalars['Boolean'];
  /** Марка автомобиля */
  brand: Scalars['String'];
  /** Цвет автомобиля */
  color: Scalars['String'];
  /** Краткое описание автомобиля */
  description: Scalars['String'];
  /** Уникальный id автомобиля */
  id: Scalars['Int'];
  /** Фото автомобиля */
  img_src: Scalars['String'];
  /** Модель автомобиля */
  model: Scalars['String'];
  /** Год выпуска модели автомобиля */
  model_year: Scalars['Int'];
  /** Цена автомобиля */
  price: Scalars['String'];
};

/** Пагинированный список автомобилей с информацией о страницах */
export type PaginatedCars = {
  __typename?: 'PaginatedCars';
  /** Массив автомобилей на текущей странице */
  cars: Array<Car>;
  /** Количество страниц автомобилей */
  totalPages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Получить автомобиль по id */
  car?: Maybe<Car>;
  /** Получить часть автомобилей */
  chunk_cars: PaginatedCars;
};

export type QueryCarArgs = {
  id: Scalars['Int'];
};

export type QueryChunk_CarsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type GetChunkCarsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;

export type GetChunkCarsQuery = {
  __typename?: 'Query';
  chunk_cars: {
    __typename?: 'PaginatedCars';
    totalPages: number;
    cars: Array<{
      __typename?: 'Car';
      id: number;
      brand: string;
      model: string;
      availability: boolean;
      color: string;
      description: string;
      img_src: string;
      model_year: number;
      price: string;
    }>;
  };
};

export type GetCarByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetCarByIdQuery = {
  __typename?: 'Query';
  car?: {
    __typename?: 'Car';
    id: number;
    brand: string;
    model: string;
    availability: boolean;
    color: string;
    description: string;
    img_src: string;
    model_year: number;
    price: string;
  } | null;
};
