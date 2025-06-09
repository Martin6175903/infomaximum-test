import { gql } from '@apollo/client';
export const GET_ALL_CARS = gql`
  query GetChunkCars($limit: Int, $page: Int) {
    chunk_cars(limit: $limit, page: $page) {
      cars {
        id
        brand
        model
        availability
        color
        description
        img_src
        model_year
        price
      }
      totalPages
    }
  }
`;

export const GET_CAR_BY_ID = gql`
  query GetCarByID($id: Int!) {
    car(id: $id) {
      id
      brand
      model
      availability
      color
      description
      img_src
      model_year
      price
    }
  }
`;
