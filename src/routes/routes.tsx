import { createBrowserRouter } from "react-router-dom";

import CarListingPage from "../modules/carListingPage/CarListingPage";
import NotFound from "../modules/errorPage/NotFound";
import App from "../App";
import Signup from "../modules/signup/SignUp";
import Login from "../modules/signup/Login";
import Dashboard from "../layout/Dashboard";
import { routeGenerator } from "../utils/routesGenerator";
import { homePaths, userDashboardPaths } from "./homeRoutes";
import PaymentLayout from "../modules/payment/feature/PaymentLayout";
import PaymentSuccess from "../modules/payment/feature/PaymentSuccess";
import PaymentFailed from "../modules/payment/feature/PaymentFail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(homePaths)
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
    path: "/payment",
    element: <PaymentLayout />,
  },
  {
    path: "payment/success/:transectionId",
    element: <PaymentSuccess />,
  },
  {
    path: "payment/fail/:transectionId",
    element: <PaymentFailed />,
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
