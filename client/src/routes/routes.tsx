import Cars from "../pages/Cars/Cars";
import Favorites from "../pages/Favorites/Favorites";
import Car from "../pages/Car/Car";
import NotFound from "../pages/NotFound/NotFound";

export const routes = [
  { path: "/cars/:pageId", element: <Cars /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/cars/car/:carId", element: <Car /> },
  { path: "*", element: <NotFound /> },
];
