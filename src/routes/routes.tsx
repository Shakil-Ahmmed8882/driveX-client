import { createBrowserRouter } from "react-router-dom";

import CarListingPage from "../modules/carListingPage/CarListingPage";
import NotFound from "../modules/errorPage/NotFound";
import App from "../App";
import Signup from "../modules/signup/SignUp";
import Login from "../modules/signup/Login";
import Dashboard from "../layout/Dashboard";
import { routeGenerator } from "../utils/routesGenerator";
import { homeRoutes, userDashboardPaths } from "./homeRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(homeRoutes)
  },
  {
    path: "/car-listing-page",
    element: <CarListingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: routeGenerator(userDashboardPaths),
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
