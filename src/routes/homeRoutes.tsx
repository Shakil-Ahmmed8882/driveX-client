import ProtectedRoute from "../layout/ProtectedRoute";
import About from "../modules/about/About";
import AllCarsLayout from "../modules/allCars/AllCarsLayout";
import BookingFormPage from "../modules/bookingFormPage/BookingFormPage";
import CarDetails from "../modules/carDetails/CarDetails";
import Contact from "../modules/contact/Contact";
import CarFilterPage from "../modules/dynamic-pages/category-page/CarFilterPage";
import FAQ from "../modules/faq/FAQ";
import HomePageLayout from "../modules/home/HomePageLayout";
import Test from "../modules/test/Test";

export const homePaths = [
  {
    name: "Home",
    path: "/",
    element: <HomePageLayout />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "FAQ",
    path: "faq",
    element: <FAQ />,
  },
  // blog
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
  {
    path: "filter",
    element: <CarFilterPage/>,
  },
  {
    name: "Test",
    path: "test",
    element: <Test />,
  },
  {
    name: "All Cars",
    path: "all-cars",
    element: <AllCarsLayout />,
  },

  // Details page
  {
    path: "cars/:id",
    element: (
      <ProtectedRoute role="user">
        <CarDetails />
      </ProtectedRoute>
    ),
  },
  // Booking form
  {
    path: "booking-form/:carId",
    element: <ProtectedRoute role="user">
      <BookingFormPage />
    </ProtectedRoute>,
  },
];
