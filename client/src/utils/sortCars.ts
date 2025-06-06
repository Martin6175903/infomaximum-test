import { Car } from "../graphql/generated";

export const sortCars = (cars: Car[], sortBy: string) => {
  const sortedCars = [...cars];

  switch (sortBy) {
    case "availability":
      return sortedCars.sort(
        (a, b) => (b.availability ? 1 : 0) - (a.availability ? 1 : 0)
      );

    case "brand":
      return sortedCars.sort((a, b) => a.brand.localeCompare(b.brand));

    case "brand-reverse":
      return sortedCars.sort((a, b) => b.brand.localeCompare(a.brand));

    case "date-newest":
      return sortedCars.sort((a, b) => b.model_year - a.model_year);

    case "date-oldest":
      return sortedCars.sort((a, b) => a.model_year - b.model_year);

    case "price-cheaper":
      return sortedCars.sort((a, b) => +a.price.slice(1) - +b.price.slice(1));

    case "price-expensively":
      return sortedCars.sort((a, b) => +b.price.slice(1) - +a.price.slice(1));

    default:
      return sortedCars;
  }
};
