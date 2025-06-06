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