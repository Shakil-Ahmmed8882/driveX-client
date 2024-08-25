import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CarListingPage from "../modules/home/features/carListingPage/CarListingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/car-listing-page",
    element: <CarListingPage />,
  },
]);

export default router;
