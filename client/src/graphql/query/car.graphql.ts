import { gql } from '@apollo/client';

export const GET_ALL_CARS = gql`
    query GetAllCars {
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
    }
`

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
`