import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_CAR_BY_ID } from "../../../graphql/query/car.graphql";
import { Query } from "../../../graphql/generated";

interface Car {
  car: Query["car"];
}

export const useGetCarById = () => {
  const params = useParams<{ id: string }>();
  return useQuery<Car>(GET_CAR_BY_ID, {
    variables: {
      id: params.id ? +params.id : null,
    },
  });
};
